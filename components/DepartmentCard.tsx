import Link from "next/link";
import type { CSSProperties } from "react";
import type { Department } from "@/lib/data";

const departmentLogos: Record<string, string> = {
  aeroace: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/862131244_122122187457411389_7278719327535327925_n.jpg?stp=dst-jpg_tt6&cstp=mx230x230&ctp=s230x230&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=70a8KGaty4kQ7kNvwFDrHvO&_nc_oc=AdqZ7hwSbdVNuvrTMkCaXVeszzDhvwRL3T42fBFcJp2E_NxTftCM44VRTDmr3M2rFCs&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=bvVwEQreOKa0FWwXdBkXNQ&_nc_ss=7b2a8&oh=00_AQPFlGlFu2crX15RS2949LO88rH-nwKmdjbNXmPyXFJyag&oe=6AE5A64A",
  aquaace: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/862323086_122100620229522772_6957294596682646282_n.jpg?stp=dst-jpg_tt6&cstp=mx392x396&ctp=s392x396&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=tAhHMITL-M0Q7kNvwFJy_wT&_nc_oc=Adq0-dUnnNb6z0P9z8GRUMhHiF3r7aEuJ-jrRandHGxYeM_zyQYj-7JcQXefKAE2Whs&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=AowUVpW4hV9C8J8xD50Qew&_nc_ss=7b2a8&oh=00_AQP3S7GMBa-yoVezeftrkPnbaSJBn7O-PrzuiCECBC_Aew&oe=6AE58DCE",
  landace: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/861298393_122096282061530919_1310256267179166460_n.jpg?stp=dst-jpg_tt6&cstp=mx395x395&ctp=s395x395&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ThcKqP8oPtgQ7kNvwFD-q-&_nc_oc=Adq3OPzpAnaP5CZJfI8xx9Zl4sZRcHXmGrHepqtJGeS4_ocNECj0OlOneZc894rtmsE&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=9teIX1J2DM1kOz2HkRXv9g&_nc_ss=7b2a8&oh=00_AQMzrIaJF9Q5XeEpYy1hf-pKnYN9CUzGkibiJApWm-UqGQ&oe=6AE588A3",
  roboace: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/862828061_122139487335344440_8554886301787335913_n.jpg?stp=dst-jpg_tt6&cstp=mx448x450&ctp=s448x450&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=bpLZ3_t58gQQ7kNvwEx8Jyl&_nc_oc=Adoqrre6X9xlAPIlNM0p_mb29xm2fLLCTBbt3RdTsYRax_rhNSKriBrPhMWxDhixK2s&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=mXRXI5k5tj9-4aLB0S9VAQ&_nc_ss=7b2a8&oh=00_AQMgH2D09gx0OL7VJrHjNIOYprBnbLUGKgBkaTdiMpWwmA&oe=6AE58348",
  astroace: "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/865390891_122100482457523493_60362545972221743_n.jpg?stp=dst-jpg_tt6&cstp=mx1049x1049&ctp=s1049x1049&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Bi67FtgN_y4Q7kNvwFNCKqD&_nc_oc=AdqqhGYhisq3br2rSSHaPHcZDdfbslMirQGthBV4TWAn0V01Kllas0_rZTs01oKVoIw&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=hEZKD6DjVUcBSB1PwSDZ8Q&_nc_ss=7b2a8&oh=00_AQMhal6jkjUcJpd0loYmd2N6bacnrkERJY7edt_G1C37eQ&oe=6AE5905F",
  "ace-canvas": "https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/866566934_122099347557524426_6356138267251516550_n.jpg?stp=dst-jpg_tt6&cstp=mx454x454&ctp=s454x454&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rh1m1JCi2pMQ7kNvwHXwOKM&_nc_oc=AdqU4yHcFOLBlt5qRVd2iQsWnYSKY4RbKDMiShl1pBGAwq8aAtPKkUcc49ncE3mSWqQ&_nc_zt=23&_nc_ht=scontent.fjsr13-1.fna&_nc_gid=DiI47ln-sErZESb3UZW63w&_nc_ss=7b2a8&oh=00_AQOscaxNJZstk0lVpzpeuMFxvHQPr0aaHOiXdDz4F9Q7ww&oe=6AE5990C",
};

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <article className={"department-card department-card-" + department.slug} style={{ "--dept": department.color } as CSSProperties}>
      <div className="card-top">
        <span className="department-icon">
          <img
            className={"department-mark department-mark-" + department.slug}
            src={departmentLogos[department.slug]}
            alt={department.name + " logo"}
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="card-code">ACE / {department.number}</span>
      </div>
      <h3>{department.name}</h3>
      <p>{department.summary}</p>
      <Link className="card-link" href={"/departments/" + department.slug}>
        Explore {department.shortLabel.toLowerCase()} <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
