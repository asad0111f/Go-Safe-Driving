import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:5173", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # -> Click the 'Book Lesson' button to open the booking modal.
        frame = context.pages[-1]
        # Click 'Book Lesson' button to open booking modal
        elem = frame.locator('xpath=html/body/div/div/header/div/div/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Click the 'Submit' button without filling any fields to trigger validation errors.
        frame = context.pages[-1]
        # Click 'Submit' button without filling any fields
        elem = frame.locator('xpath=html/body/div[2]/div/div/div/div[2]/div/div/form/div[5]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # -> Enter invalid phone number 'abc' in the phone input field.
        frame = context.pages[-1]
        # Enter invalid phone number 'abc' in phone input field
        elem = frame.locator('xpath=html/body/div[2]/div/div/div/div[2]/div/div/form/div[2]/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('abc')
        

        # -> Enter a valid name with at least 2 characters in the 'Name' input field.
        frame = context.pages[-1]
        # Enter valid name 'John Doe' in the Name input field
        elem = frame.locator('xpath=html/body/div[2]/div/div/div/div[2]/div/div/form/div/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('John Doe')
        

        # -> Clear the phone input field and enter a valid phone number.
        frame = context.pages[-1]
        # Clear the phone input field
        elem = frame.locator('xpath=html/body/div[2]/div/div/div/div[2]/div/div/form/div[2]/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('')
        

        frame = context.pages[-1]
        # Enter a valid phone number
        elem = frame.locator('xpath=html/body/div[2]/div/div/div/div[2]/div/div/form/div[2]/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('1234567890')
        

        # -> Enter a valid date and time in the 'Preferred Date/Time' input field.
        frame = context.pages[-1]
        # Enter valid date and time '2025-11-10T10:00' in Preferred Date/Time field
        elem = frame.locator('xpath=html/body/div[2]/div/div/div/div[2]/div/div/form/div[4]/input').nth(0)
        await page.wait_for_timeout(3000); await elem.fill('2025-11-10T10:00')
        

        # -> Click the 'Submit' button to submit the form.
        frame = context.pages[-1]
        # Click 'Submit' button to submit the form
        elem = frame.locator('xpath=html/body/div[2]/div/div/div/div[2]/div/div/form/div[5]/button').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Please fill out this field.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Please enter a valid phone number.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Thanks — we\'ll confirm shortly.').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    