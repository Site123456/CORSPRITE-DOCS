import React from "react";
import modules from "@/data/modules.json";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = React.use(params);

  const categoryData = modules.find(c => c.slug === category);
  if (!categoryData) return <h1 className="text-white">Category not found</h1>;

  return (
    <div className="bg-black text-white px-6 py-10 max-w-2xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold">{categoryData.title}</h1>

        {/* Lucide Back Button */}
        <Link
          href="/modules"
          className="inline-flex items-center gap-2 text-white bg-neutral-950 transition px-3 py-1.5 rounded-md hover:bg-neutral-900"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Simple Blue Link List */}
      <ul className="space-y-3">
        {categoryData.items.map(([name, slug]) => (
          <li key={slug}>
            <Link
              href={`/modules/${categoryData.slug}/${slug}`}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
