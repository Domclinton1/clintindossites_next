type Props = {
  href: string;
  children: React.ReactNode;
};

export default function CtaButton({ href, children }: Props) {
  return (
    <a href={href} target="_blank" className="cta-button m-auto">
      {children}
    </a>
  );
}
