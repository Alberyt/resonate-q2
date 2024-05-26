import { IContact } from "@/models"
import Image from "next/image"


const variants = {
  small: "h-10 w-10",
  medium: "h-20 w-20",
}

type Picture = {
  contact: IContact;
  variant?: "small" | "medium",
}

const DisplayPicture: React.FC<Picture> = ({contact, variant}) => {
  const name = contact.name.split(" ");
  const initials = name[0][0] + name[1][0];

  return (
    <div className={`${variant ? variants[variant] : variants["small"]} border rounded-full border-gray-400 items-center text-center`}>
      {contact.picture ?
        <Image 
          src={contact.picture}
          alt={"test"}
          className={`${variant ? variants[variant] : variants["small"]} bg-fit rounded-full`}
          height={60}
          width={60}
        />  :
        <p className={`flex ${variant ? variants[variant] : variants["small"]} text-center items-center justify-center`}>{initials}</p>
        
      }
    </div>
  )
}

export default DisplayPicture
