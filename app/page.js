import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <h1>Welcome to the World of Next.Js</h1>

      <h3>Features of NextJS</h3>
      <ul>
        <li>Full Stack Applications. FE & BE are part of the same Project</li>
        <li>File Based Routing</li>
        <li>
          Server Side Rendering. Good for the SEO and Search Engine Crawlers
        </li>
      </ul>

      <p>
        <Link href="/about">About NextJS Link Component</Link>
      </p>

      <p>
        <Link href="/blog">Blog Page</Link>
      </p>
    </main>
  );
}
