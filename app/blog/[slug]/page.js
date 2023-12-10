import React from "react";

export default function BlogPost({ params }) {
  return (
    <div>
      <p>This is the Blog Post generated Dynamically</p>
      <p>
        Our Slug is: <strong>{params.slug}</strong>! We can now use url with
        this slug info to get the required post associated with this slug!
      </p>
    </div>
  );
}
