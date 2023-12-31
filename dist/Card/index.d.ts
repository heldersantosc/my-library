import React from "react";
export interface CardProps {
    img: {
        src: string;
        alt: string;
    };
    title: string;
}
export declare function Card({ img, title, children, }: React.PropsWithChildren<CardProps>): React.JSX.Element;
