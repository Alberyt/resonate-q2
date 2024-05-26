import { FaPhone, FaPlus, FaQuestion } from "react-icons/fa";
import { MdMessage, MdMoreHoriz, MdVideoCall } from "react-icons/md";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import Placeholder from "@/components/ui/placeholder";

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
          <div className={cn("h-8 w-8 rounded-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90", className)} 
            onClick={handleContact}>
            {handleContact ? 
              <>{icon}</> :
              <Placeholder>
                {icon}
              </Placeholder>
            }
          </div>
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
    case "view":
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
