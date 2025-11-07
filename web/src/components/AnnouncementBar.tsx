import { Link } from 'react-router-dom';

type Props = { message: string; href?: string };

export default function AnnouncementBar({ message, href }: Props) {
  return (
    <div className="bg-primary text-white">
      <div className="container flex min-h-9 items-center justify-center gap-2 px-3 py-1.5 text-xs sm:text-sm">
        <span className="font-medium tracking-tight">{message}</span>
        {href ? (
          <Link to={href} className="underline decoration-white/60 underline-offset-4">
            Learn more
          </Link>
        ) : null}
      </div>
    </div>
  );
}

