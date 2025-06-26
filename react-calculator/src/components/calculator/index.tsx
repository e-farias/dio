'use client'

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import CaculatorButton from "./button"
import { Operation } from "@/lib/types"

enum OperationSymbol {
  sum = "+",
  sub = "-",
  mul = "×",
  div = "÷"
}

const Calculator = () => {

  const [firstNumber, setFirstNumber] = useState<number | null>(null)
  const [secondNumber, setSecondNumber] = useState<number | null>(null)
  const [operation, setOperation] = useState<Operation | null>(null)
  const [result, setResult] = useState<number | null>(null)
  const [sentence, setSentence] = useState<string>("")

  const handleSetOperation = (value: Operation) => {
    setOperation(value)
  }

  const handleDelete = () => {
    if (result) {
      return handleClear()
    }
    if (secondNumber) {
      if (secondNumber.toString().length > 1) {
        const newNumber = parseInt(secondNumber.toString().slice(0, -1))
        return setSecondNumber(newNumber)
      }
      return setSecondNumber(null)
    }
    if (operation) {
      return setOperation(null)
    }
    if (firstNumber) {
      if (firstNumber.toString().length > 1) {
        const newNumber = parseInt(firstNumber.toString().slice(0, -1))
        return setFirstNumber(newNumber)
      }
      return setFirstNumber(null)
    }
  }

  const handleClear = () => {
    setFirstNumber(null)
    setSecondNumber(null)
    setOperation(null)
    setResult(null)
  }

  const handleSetNumber = (value: number) => {
    if (!firstNumber) {
      setFirstNumber(value)
    } else {
      if (!operation) {
        const concatValues = Number(`${firstNumber}${value}`)
        setFirstNumber(concatValues)
      } else {
        if (!secondNumber) {  
          setSecondNumber(value)
        } else {
          const concatValues = Number(`${secondNumber}${value}`)
          setSecondNumber(concatValues)
        }
      }
    }
  }

  const handleSum = (a: number, b: number) => {
    return a + b
  }

  const handleSubtract = (a: number, b: number) => {
    return a - b
  }

  const handleMul = (a: number, b: number) => {
    return a * b
  }

  const handleDiv = (a: number, b: number) => {
    return a / b
  }

  const handleCalculate = () => {
    if (firstNumber && secondNumber && operation) {
      if (operation === "sum") {
        setResult(handleSum(firstNumber, secondNumber))
      } else if (operation === "sub") {
        setResult(handleSubtract(firstNumber, secondNumber))
      } else if (operation === "mul") {
        setResult(handleMul(firstNumber, secondNumber))
      } else if (operation === "div") {
        setResult(handleDiv(firstNumber, secondNumber))
      }
    }
  }


  useEffect(() => {
    setSentence(`${firstNumber || ""}${operation ? OperationSymbol[operation] : ""}${secondNumber || ""}`)
  }, [firstNumber, secondNumber, operation])

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
          {result && (
            <span className="text-stone-500 text-2xl">
              {sentence}
            </span>
          )}
        </div>
        
        <div className="flex flex-row justify-end">
          <span className="text-6xl truncate">
            {result ? result : sentence}
          </span>
        </div>
      </div>

      <div className="flex flex-col col-span-1 gap-2">

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="7"
              value="7"
              onClick={() => handleSetNumber(7)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="8"
              value="8"
              onClick={() => handleSetNumber(8)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="9"
              value="9"
              onClick={() => handleSetNumber(9)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="×"
              value="×"
              onClick={() => handleSetOperation("mul")}
              theme="orange"
            />
          </div>

        </div>

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="4"
              value="4"
              onClick={() => handleSetNumber(4)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="5"
              value="5"
              onClick={() => handleSetNumber(5)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="6"
              value="6"
              onClick={() => handleSetNumber(6)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="−"
              value="−"
              onClick={() => handleSetOperation("sub")}
              theme="orange"
            />
          </div>

        </div>

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="1"
              value="1"
              onClick={() => handleSetNumber(1)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="2"
              value="2"
              onClick={() => handleSetNumber(2)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="3"
              value="3"
              onClick={() => handleSetNumber(3)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="+"
              value="+"
              onClick={() => handleSetOperation("sum")}
              theme="orange"
            />
          </div>

        </div>

        <div className="w-full grid justify-items-center grid-cols-4 gap-2">

        <div className="flex flex-col col-span-1">
            <button
              className={cn(
                "flex justify-center items-center cursor-pointer",
                "p-4 w-15 h-15 bg-stone-400 rounded-full active:bg-stone-300 hover:opacity-85",
              )}
              onClick={() => handleDelete()}
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
            <CaculatorButton
              key="0"
              value="0"
              onClick={() => handleSetNumber(0)}
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="="
              value="="
              onClick={() => handleCalculate()}
              theme="orange"
            />
          </div>

          <div className="flex flex-col col-span-1">
            <CaculatorButton
              key="÷"
              value="÷"
              onClick={() => handleSetOperation("div")}
              theme="orange"
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default Calculator