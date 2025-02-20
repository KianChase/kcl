"use client";

import { useState } from "react";

interface MapProps {
  address: string;
  className?: string;
}

export function Map({ address, className }: MapProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
        <p className="text-gray-500">Unable to load map</p>
      </div>
    );
  }

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
      onError={() => setError(true)}
    />
  );
} 