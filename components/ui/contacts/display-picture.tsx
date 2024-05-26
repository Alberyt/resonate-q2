import Image from "next/image"

import { IContact } from "@/models"

// Size Varients
const variants = {
  small: "h-10 w-10",
  medium: "h-20 w-20",
  large: "h-30 w-30"
}

type Picture = {
  contact: IContact;
  variant?: "small" | "medium" | "large",
}

/**
 * @param contact - Contact Object 
 * @param variant - Size of display picture
 * @returns Avatar of user
 */
const DisplayPicture: React.FC<Picture> = ({contact, variant}) => {
  const name = contact.name.split(" ");
  const initials = name[0][0] + name[1][0];

  return (
    <div className={`${variant ? variants[variant] : variants["small"]} border rounded-full border-gray-400 items-center text-center`}>
      <Image 
        src={contact.picture}
        alt={initials}
        className={`${variant ? `${variants[variant]} text-5xl` : variants["small"]} bg-fit rounded-full flex text-center items-center justify-center`}
        height={220}
        width={220}
      /> 
    </div>
  )
}

export default DisplayPicture
