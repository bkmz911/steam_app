/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    src: string;
    alt: string;
    className: string;
    href: string;
}

export const FooterLogo: React.FC<Props> = (props) => {
    return (
        <Link href={props.href} target="_blank">
            <Image {...props} width={50} height={50} />
        </Link>
    );
};
