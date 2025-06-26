import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string
  theme?: 'gray' | 'orange' | 'zinc'
}

export const CaculatorButton = ({
  value,
  theme = 'gray',
  className,
  ...props
} : Props) => {

  let cnBg = 'bg-stone-800 rounded-full active:bg-stone-700'

  if (theme === 'orange') cnBg = 'bg-orange-400 rounded-full active:bg-orange-300'
  if (theme === 'zinc') cnBg = 'bg-stone-400 rounded-full active:bg-stone-300'

  return (
    <button
      className={cn(
        "flex justify-center items-center cursor-pointer",
        "p-4 w-15 h-15 active:opacity-100 hover:opacity-85",
        cnBg,
        className
      )}
      {...props}
    >
      <span className={cn(
        theme === 'orange' ? "text-4xl" : "text-2xl",
      )}>
        {value}
      </span>
    </button>
  )
}

export default CaculatorButton