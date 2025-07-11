import { Repository as TRepository } from "@/lib/types"
import EmptyBoxIcon from "@/components/icons/empty-box"

const Repository = ({ repository }: { repository: TRepository | null }) => {
  return (
    <div className="flex flex-col my-auto items-center justify-center">

      {repository ? (
        <div className="flex">
          <div className="flex">
            
          </div>
        </div>
      ) : (
        <div className="flex h-full">
          <div className="flex flex-col items-center justify-center gap-2 text-slate-600">
            <EmptyBoxIcon className="w-16 h-16" />
            <p className="text-lg">Nada encontrado no momento</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default Repository
