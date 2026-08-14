import { notFound } from "next/navigation";
import { Site } from "../site";

const pages = new Set([
  "about",
  "services",
  "approach",
  "thought-leadership",
  "contact",
]);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!pages.has(slug)) notFound();

  return <Site page={slug} />;
}
