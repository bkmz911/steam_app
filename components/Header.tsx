import Navigation from "./Navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
];

export default function Header() {
    return (
        <header className="flex items-center justify-center gap-10">
            <Navigation navLinks={navItems} />
        </header>
    );
}
