import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

function BlogCard({ title, body, id }) {
  return (
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/200/300?random=${id}`}
          alt="blog card image"
          fill
        />{" "}
        {/* alt tag is required for next.js */}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{body}.</p>
      </div>
    </Link>
  );
}

export default BlogCard;
