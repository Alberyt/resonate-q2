import useContact from "@/hooks/useContact"
import { Separator } from "./separator"

/**
 * 
 * @returns Header to welcome the user
 */
const Header = () => {
  const { contact } = useContact();
  return (
    <div className="px-6 bg-gray-300 md:bg-white">
      <div className="flex flex-row items-center w-full h-14">
        <h1 className="text-xl ml-2">Welcome back, <span className="text-red-600 hover:underline hover:cursor-pointer" 
          onClick={() => contact.handleContact(100)}>Albert!</span></h1>
      </div>
      <Separator className="bg-gray-400"/>
    </div>
  )
}

export default Header
