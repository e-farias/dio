"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import GitHubIcon from "@/components/icons/github"
import Repository from "@/components/repository"
import { Repository as RepositoryType } from "@/lib/types"

export default function Home() {

  const [repository, setRepository] = useState<RepositoryType | null>(null)

  return (
    <main className={cn(
      "font-[family-name:var(--font-geist-sans)]",
      "w-full h-[100dvh] flex flex-col items-center",
      "p-8 gap-8"
    )}>

      <div className="flex text-center">
        <GitHubIcon
          className="w-20 h-20"
        />
      </div>

      <div className="flex w-full lg:max-w-sm">
        <input
          type="text"
          className={cn(
            "w-full p-2 rounded-full px-4 focus:ring-0",
            'border border-gray-300 focus:outline-gray-300',
          )}
        />
      </div>

      <div className="flex w-full lg:max-w-sm">
        <button
          className={cn(
            "w-full p-2 rounded-full px-4 focus:ring-0 cursor-pointer",
            "bg-slate-100 hover:opacity-80 text-slate-950"
          )}
          onClick={() => {
            console.log("buscar")
          }}
        >
          Buscar
        </button>
      </div>

      <Repository
        repository={repository}
      />

    </main>
  );
}
