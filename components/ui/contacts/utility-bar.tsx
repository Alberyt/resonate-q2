import { Button } from "../button"
import { Input } from "../input"

const UtilityBar = () => {
  return (
    <div className="flex">
      {/* Search Bar */}
      <Input placeholder="Search" className="rounded-lg"/>
      {/* Add Contact */}
      <Button size={"icon"} variant={"outline"}>

      </Button>
      {/* More Options */}
    </div>
  )
}

export default UtilityBar
