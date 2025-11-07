import { Route, Routes, Navigate } from 'react-router-dom';
import SiteLayout from '@/layouts/SiteLayout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Services = lazy(() => import('@/pages/Services'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Reviews = lazy(() => import('@/pages/Reviews'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Policies = lazy(() => import('@/pages/Policies'));

export default function App() {
  return (
    <SiteLayout>
      <Suspense fallback={<div className="container py-10">Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/privacy" element={<Policies />} />
          <Route path="/terms" element={<Policies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  );
}
