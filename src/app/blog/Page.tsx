import type { Metadata } from "next";
import HeroBlog from "./components/HeroBlog";

export const metadata: Metadata = {
  title: "Blog de Marketing Digital e Sites",
  description:
    "Artigos sobre criação de sites, Google Ads, marketing digital e geração de clientes.",
};

export default function Blog() {
  return (
    <>
      <HeroBlog />
    </>
  );
}
