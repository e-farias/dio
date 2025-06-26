'use client'

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import CaculatorButton from "./button"
import { Operation } from "@/lib/types"

const Calculator = () => {

  const [firstNumber, setFirstNumber] = useState<number | null>(null)
  const [secondNumber, setSecondNumber] = useState<number | null>(null)
  const [operation, setOperation] = useState<Operation | null>(null)

  const [result, setResult] = useState<number | null>(null)

  const handleOperationUpdate = (newValue: string) => {
  }

  return (
    <div
      className={cn(
        "w-full grid grid-cols-1",
        "border-2 border-stone-900 rounded-2xl",
        "gap-2 p-2"
      )}
    >

      <div className="flex flex-col justify-end min-h-24">
        <div className="flex flex-row justify-end">
          <span className="text-stone-500 text-2xl">2+2</span>
        </div>

        <div className="flex flex-row justify-end">
          <span className="text-6xl truncate">4</span>
        </div>
      </div>

      <div className="flex flex-col col-span-1 gap-2">

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-1">
            <button
              className={cn(
                "flex justify-center items-center cursor-pointer",
                "p-4 w-15 h-15 bg-stone-400 rounded-full active:bg-stone-300 hover:opacity-85",
              )}
            >
              <span className="text-2xl">
                {!result ? (
                  <>⌫</>
                ) : (
                  <>C</>
                )}
              </span>
            </button>
          </div>

          <div className="flex flex-col col-span-1">
            <button
              className={cn(
                "flex justify-center items-center cursor-pointer",
                "p-4 w-15 h-15 bg-stone-400 rounded-full active:bg-stone-300 hover:opacity-85",
              )}
            >
              <span className="text-2xl">C</span>
            </button>
          </div>

          <div className="flex flex-col col-span-1">
            <button
              className={cn(
                "flex justify-center items-center cursor-pointer",
                "p-4 w-15 h-15 bg-stone-400 rounded-full active:bg-stone-300 hover:opacity-85",
              )}
            >
              <span className="text-2xl">C</span>
            </button>
          </div>

          <div className="flex flex-col col-span-1">
            <button
              className={cn(
                "flex justify-center items-center cursor-pointer",
                "p-4 w-15 h-15 bg-orange-400 rounded-full active:bg-orange-300 hover:opacity-85",
              )}
            >
              <span className="text-4xl">÷</span>
            </button>
          </div>

        </div>

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="7"
              value="7"
              handleClick={() => handleOperationUpdate("7")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="8"
              value="8"
              handleClick={() => handleOperationUpdate("8")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="9"
              value="9"
              handleClick={() => handleOperationUpdate("9")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="×"
              value="×"
              handleClick={() => handleOperationUpdate("×")}
              type="operation"
            />
          </div>

        </div>

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="4"
              value="4"
              handleClick={() => handleOperationUpdate("4")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="5"
              value="5"
              handleClick={() => handleOperationUpdate("5")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="6"
              value="6"
              handleClick={() => handleOperationUpdate("6")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="−"
              value="−"
              handleClick={() => handleOperationUpdate("−")}
              type="operation"
            />
          </div>

        </div>

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="1"
              value="1"
              handleClick={() => handleOperationUpdate("1")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="2"
              value="2"
              handleClick={() => handleOperationUpdate("2")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="3"
              value="3"
              handleClick={() => handleOperationUpdate("3")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="+"
              value="+"
              handleClick={() => handleOperationUpdate("+")}
              type="operation"
            />
          </div>

        </div>

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-2">
            <CaculatorButton
              key="0"
              value="0"
              handleClick={() => handleOperationUpdate("0")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key=","
              value=","
              handleClick={() => handleOperationUpdate(",")}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="="
              value="="
              handleClick={() => handleOperationUpdate("=")}
              type="operation"
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Calculator