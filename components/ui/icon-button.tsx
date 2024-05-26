import { FaPhone, FaPlus, FaQuestion } from "react-icons/fa";
import { MdMessage, MdMoreHoriz, MdVideoCall } from "react-icons/md";

import { cn } from "@/lib/utils";

import { Button } from "./button"

type Icon = {
  symbol: string,
  displayLabel?: boolean,
  className?: string
  handleContact?: () => void;
}

/**
 * 
 * @param {string} symbol - Symbol you want to make for button
 * @param {boolean} displayLabel - Toggle for displaying label
 * @param {string} className - Updates css
 * @param handleContact - Updates opened quick view menu
 * @returns Button with icon and label.
 */
const IconButton: React.FC<Icon> = ({symbol, displayLabel = true, className, handleContact}) => {
  const icon = createIcon(symbol)
  return (
    <>
      <div className="flex flex-col space-y-2 items-center">
        <Button size={"customIcon"} className={cn("", className)} onClick={handleContact}>
          {icon}
        </Button>
        { displayLabel && <h1 className="text-xs capitalize">{symbol}</h1> }
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
      return <MdMoreHoriz {...options} />
    case "edit":
      return <MdMoreHoriz {...options} />
    case "plus":
      return <FaPlus {...options} />  
    default:
      return <FaQuestion {...options}/>
  }
}

export default IconButton
