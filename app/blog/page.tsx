/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) throw new Error("Failed to fetch posts :(");

    return response.json();
}

export default async function Blog() {
    const posts = await getData();

    return (
        <>
            Blog page
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
