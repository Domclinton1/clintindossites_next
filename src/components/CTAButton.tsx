import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function CtaButton({ href, children }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="cta-button whatsapp-track m-auto"
    >
      {children}
    </Link>
  );
}
