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
        # -> Click on the About link in the navigation menu to go to the About page.
        frame = context.pages[-1]
        # Click on the About link in the navigation menu
        elem = frame.locator('xpath=html/body/div/div/header/div/nav/a[3]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        

        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=I teach modern, patient, 1‑on‑1 lessons that build real‑world skills and confidence. My focus is safety, calm coaching, and practical prep for Hamilton’s test routes.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Calm, patient coaching').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Fully insured vehicle with dual controls').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Clean driving record').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Safety‑first approach with local expertise and calm coaching.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Step‑by‑step coaching, clear feedback, and plenty of practice to build habits that last.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Fully insured lesson vehicle with dual controls. Safety is the priority every lesson.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Practice the exact Hamilton test routes, tricky intersections, and parking areas you’ll see on test day.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Patient, encouraging instruction tailored to your pace—great for nervous drivers and refreshers.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Began coaching with a focus on safe foundations.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Specialized in local test routes and exam‑day preparation.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Expanded training for highway merging, spacing, and lane changes.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=5+ years').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=120+ students').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=4.9 stars').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Serving the Greater Toronto Area').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Licensed private driving instructor. Not a Ministry-licensed driving school. G2/G lessons only.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 Go Safe Driving').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    