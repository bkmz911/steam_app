import Link from "next/link";

export default function Header() {
    return <header className="flex items-center justify-center gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
    </header>
}