"use client";

import { useState } from "react";
import Image from "next/image";

const logoUrl = "/projectace-logo.png";

export function Brand({ footer = false }: { footer?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <span className={footer ? "footer-brand" : "brand"}>
      <span className="brand-mark" aria-hidden="true">
        {!imageFailed ? (
          <Image
            src={logoUrl}
            alt=""
            width={40}
            height={40}
            unoptimized
            loading="eager"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M4 18.5 10.7 4l3.1 6.7M8 13.5h8l3 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )}
      </span>
      <span className={footer ? "" : "brand-word"}>Project<span>ACE</span></span>
    </span>
  );
}
