import { Metadata } from "next";

type ParamsType = Promise<{ id: string }>;

async function getData(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        { next: { revalidate: 5 } }
    );
    return response.json();
}

export async function generateMetadata(props: {
    params: ParamsType;
}): Promise<Metadata> {
    const { id } = await props.params;
    const post = await getData(id);

    return {
        title: post.title,
        description: post.body,
    };
}

export default async function Post(props: { params: ParamsType }) {
    const { id } = await props.params;
    const post = await getData(id);

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

// export async function generateMetadata({
//     params,
// }: MetadataContext & {
//     params: PageParams | Promise<PageParams>;
// }): Promise<Metadata> {
//     const { id } = await params; // Ждем разрешения params
//     const post = await getData(id);

//     return {
//         title: post.title,
//         description: post.body,
//     };
// }

// export default async function Post({
//     params,
// }: {
//     params: PageParams | Promise<PageParams>;
// }) {
//     const { id } = await params; // Ждем разрешения params
//     const post = await getData(id);

//     return (
//         <>
//             Post number {id}
//             <div>
//                 <h1>Title: {post.title}</h1>
//                 <span>Body: {post.body}</span>
//             </div>
//         </>
//     );
// }
