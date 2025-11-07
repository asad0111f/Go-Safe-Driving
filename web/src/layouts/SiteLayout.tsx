import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import FloatingCallButton from '@/components/FloatingCallButton';
import BookLessonProvider from '@/components/book/BookLessonProvider';

type Props = {
  children: ReactNode;
  announcement?: { message: string; href?: string } | null;
};

export default function SiteLayout({ children, announcement = null }: Props) {
  return (
    <div className="site-bg min-h-dvh text-neutral-900">
      <BookLessonProvider>
        {announcement ? (
          <AnnouncementBar message={announcement.message} href={announcement.href} />
        ) : null}
        <Header sticky />
        <main id="main-content" role="main" className="container py-10 md:py-14">{children}</main>
        <Footer />
        <FloatingCallButton />
      </BookLessonProvider>
    </div>
  );
}
