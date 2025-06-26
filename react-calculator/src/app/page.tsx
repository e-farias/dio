import Calculator from "@/components/calculator"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className={cn(
      "font-[family-name:var(--font-geist-sans)]",
      "w-full h-[100dvh] grid justify-items-center",
      "p-8"
    )}>

      <div className="text-center">
        <h1 className="text-4xl font-bold">Calculator</h1>
        <h2>React iOS</h2>
      </div>

      <div className="flex flex-col justify-center items-center w-[95dvw] max-w-70">
        <Calculator />
      </div>
    </main>
  );
}
