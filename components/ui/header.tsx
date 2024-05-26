import { Separator } from "./separator"

const Header = () => {
  return (
    <div className="px-6">
      <div className="flex flex-row items-center w-full h-12">
        <h1 className="text-xl">Welcome back, <span className="text-red-600 hover:underline hover:cursor-pointer">User!</span></h1>
      </div>
      <Separator className="bg-black"/>
    </div>
  )
}

export default Header
