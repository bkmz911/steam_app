/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    alt: string;
    className: string;
}

export const FooterLogo: React.FC<Props> = (props) => {
    return (
        <>
            <Image {...props} width={50} height={50} />
        </>
    );
};
