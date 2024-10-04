import { type ReactNode } from "react";

type HeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <div className="logo">
        <img {...image} />
        {children}
      </div>
    </header>
  );
}
