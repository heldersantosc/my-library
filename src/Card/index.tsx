import React from "react";

export interface CardProps {
  img: { src: string; alt: string };
  title: string;
}

export function Card({
  img,
  title,
  children,
}: React.PropsWithChildren<CardProps>) {
  return <button>Esse botão</button>;
}
