import { Metadata } from "next";

type Props = {
    params: {
        id: string;
    };
};

async function getData(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { next: { revalidate: 5 } }
    );
    return response.json();
}

export async function generateMetadata({
    params: { id },
}: Props): Promise<Metadata> {
    const post = await getData(id);

    return {
        title: post.title,
        description: post.body,
    };
}

export default async function Post({ params: { id } }: Props) {
    const post = await getData(id);

    console.log(post);

    return (
        <>
            Post number {id}
            <div>
                <h1>Title: {post.title}</h1>
                <span>Body: {post.body}</span>
            </div>
        </>
    );
}
