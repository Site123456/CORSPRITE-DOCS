import React from "react";
import modules from "@/data/modules.json";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

interface ModulePageProps {
  params: Promise<{
    category: string;
    module: string;
  }>;
}

export default function ModulePage({ params }: ModulePageProps) {
  const { category, module: moduleSlug } = React.use(params);

  const categoryData = modules.find(c => c.slug === category);
  const moduleItem = categoryData?.items.find(([, slug]) => slug === moduleSlug);

  const moduleName = moduleItem ? moduleItem[0] : "Unknown Module";

  return (
    <div className="bg-black text-white px-6 py-10 max-w-2xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-semibold">{moduleName}</h1>

        <Link
        href={`/modules/${category}`}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                    bg-neutral-950
                    hover:bg-neutral-900/70 transition-all duration-200"
        >
            <ArrowLeft size={18} strokeWidth={2.2} />
            <span className="font-medium">Back</span>
        </Link>

      </div>
        <div className="w-full flex items-center justify-center h-30
                        bg-[repeating-linear-gradient(45deg,#d4a106_0,#d4a106_26px,#000_26px,#000_52px)]">

            <div className="flex items-center gap-5">
            <Construction size={25} className="text-white" />
            <span className="text-2xl font-semibold text-white tracking-tight">
                Page in construction
            </span>
            </div>

        </div>



    </div>
  );
}
