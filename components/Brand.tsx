"use client";

import { useState } from "react";
import Image from "next/image";

const logoUrl = "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&cstp=mx1024x1024&ctp=s1024x1024&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0cYP_8SHQa8Q7kNvwFtb-2c&_nc_oc=AdovEZt00dCi9j-PtG3KyjpuvWV0zxuZsKbAtVeKPOYefrqIvTwqotLLY8Pd5trxS4w&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=WcnGfCmzKlD-Y1vYfN0hxw&_nc_ss=7b2a8&oh=00_AQMQnEcnuK8zhbOU6K1AEMKlU9Yw1vpoFfYwCkDjDZIAgw&oe=6AE59A47";

export function Brand({ footer = false }: { footer?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <span className={footer ? "footer-brand" : "brand"}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M4 18.5 10.7 4l3.1 6.7M8 13.5h8l3 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {!imageFailed && <Image src={logoUrl} alt="" width={40} height={40} unoptimized loading="eager" onError={() => setImageFailed(true)} />}
      </span>
      <span className={footer ? "" : "brand-word"}>Project<span>ACE</span></span>
    </span>
  );
}
