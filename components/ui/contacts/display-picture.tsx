import { IContact } from "@/models"
import Image from "next/image"

const DisplayPicture: React.FC<IContact> = ({name, picture}) => {
  const initials = name.split(" ")[0][0] + name.split(" ")[1][0]

  return (
    <div className="h-8 w-8 rounded-full border border-white items-center text-center">
      {picture ?
        <Image 
          src={picture}
          alt={"test"}
          className="h-8 w-8 bg-fit rounded-full border"
          height={30}
          width={30}
        />  :
        <p className="flex h-8 w-8 text-center items-center justify-center">{initials}</p>
        
      }
    </div>
  )
}

export default DisplayPicture
