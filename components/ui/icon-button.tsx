import { FaPhone, FaQuestion } from "react-icons/fa";
import { MdMessage, MdMore, MdVideoCall } from "react-icons/md";

import { cn } from "@/lib/utils";

import { Button } from "./button"

type Icon = {
  symbol: string
  className?: string
}

const IconButton: React.FC<Icon> = ({symbol, className}) => {
  const icon = createIcon(symbol)
  return (
    <>
      <div className="flex flex-col space-y-2 items-center">
        <Button size={"customIcon"} className={cn("bg-green-400 hover:bg-green-600", className)}>
          {icon}
        </Button>
        <h1 className="text-xs font-extralight">{symbol}</h1>
      </div>
    </>
  )
}

const createIcon = (symbol: string) => {
  const options = { size: 20, color: "white" }
  switch (symbol) {
    case "call":
      return <FaPhone {...options} />
    case "message":
      return <MdMessage {...options} />
    case "video":
      return <MdVideoCall {...options} />
    case "more":
      return <MdMore {...options} />
    default:
      return <FaQuestion {...options}/>
  }
}

export default IconButton
