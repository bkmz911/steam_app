import Link from "next/link";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>About us</h1>
            <ul className="mt-10 list-disc">
                <li className="ml-4">
                    <Link href="/about/contacts">Contacts</Link>
                </li>
                <li className="ml-4">
                    <Link href="/about/team">Team</Link>
                </li>
            </ul>
            {children}
        </div>
    );
}
