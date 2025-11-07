import Section from '@/components/Section';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TrainingGallery() {
  const items = [
    { src: '/images/Gallery/training/1.jpg', alt: 'Learner driving during lesson with instructor notes' },
    { src: '/images/Gallery/training/2.jpg', alt: 'Instructor coaching beside car and cones' },
    { src: '/images/Gallery/training/3.jpg', alt: 'Student at test lot practicing with cones' },
  ];

  // Simple lightbox state handled locally
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  function onOpen(index: number) {
    setCurrent(index);
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }

  return (
    <Section title="Training in action" subtitle="Real moments from behind the wheel.">
      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{ 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {items.map((g, i) => (
          <SwiperSlide key={g.src}>
            <button
              type="button"
              className="block w-full"
              onClick={() => onOpen(i)}
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="h-64 w-full rounded-2xl object-cover shadow-soft"
                loading="lazy"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={onClose}
        >
          <img
            src={items[current].src}
            alt={items[current].alt}
            className="max-h-[85vh] w-auto max-w-[95vw] rounded-2xl shadow-2xl"
          />
        </div>
      ) : null}
    </Section>
  );
}
