"use client";

import { useState } from "react";

const logoUrl = "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/719109484_122105159949349698_8842327329302787829_n.jpg?stp=dst-jpg_tt6&amp;cstp=mx1024x1024&amp;ctp=s1024x1024&amp;_nc_cat=105&amp;_nc_map=urlgen_bucketless&amp;ccb=1-7&amp;_nc_sid=6ee11a&amp;_nc_ohc=GSlSNzZR_TgQ7kNvwEjyrim&amp;_nc_oc=AdrNxY_ECUML9VzK3x2YUDhOCbMfyCUq4UL909SF3AdIGufcQq9zECcTlRXziRCJR64&amp;_nc_zt=23&amp;_nc_ht=scontent.fjsr13-1.fna&amp;_nc_gid=eZdWn3g0TaYo00nmdnGoMA&amp;_nc_ss=7b2a8&amp;oh=00_AQN0h-gyxqCpgs95JSR9YqYi_vg8NJQv5D-prKrvXB80QQ&amp;oe=6AE286C7";

export function Brand({ footer = false }: { footer?: boolean }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <span className={footer ? "footer-brand" : "brand"}>
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M4 18.5 10.7 4l3.1 6.7M8 13.5h8l3 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18.5" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {!imageFailed && <img src={logoUrl} alt="" loading="eager" onError={() => setImageFailed(true)} />}
      </span>
      <span className={footer ? "" : "brand-word"}>Project<span>ACE</span></span>
    </span>
  );
}
