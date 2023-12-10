import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <div>
      <h2>
        We will cover so many Blog posts related to Next JS Dynamic Routes
      </h2>

      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </div>
  );
}
