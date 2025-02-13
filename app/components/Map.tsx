"use client";

interface MapProps {
  address: string;
  className?: string;
}

export function Map({ address, className }: MapProps) {
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=${encodeURIComponent(address)}`}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={className}
      title="Location Map"
    />
  );
} 