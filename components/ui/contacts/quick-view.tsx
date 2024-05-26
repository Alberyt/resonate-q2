import { IContact } from "@/models"

import DisplayPicture from "./display-picture";
import IconButton from "../icon-button";

type View = {
  contacts?: IContact[],
  selected: number | null,
  updateSelected: (id: number) => void;
}

const QuickView: React.FC<View> = ({contacts, selected, updateSelected}) => {
  return (
    <>
      {contacts && 
        <div className="flex flex-col rounded-lg w-full min-h-fit py-2 space-y-2">
          {contacts?.map((contact, index) => (
            <div key={index} className={`ml-2 mx-auto items-center ${contacts.length - 1 !== index && "pb-2"} w-full`}>
              <div tabIndex={0} className={`flex items-center space-x-4 hover:cursor-pointer`} onClick={() => updateSelected(contact.id)}>
                <DisplayPicture contact={contact}/>
                <div className="flex flex-col">
                  <h1 className="truncate overflow-hidden">{contact.name}</h1>
                  {selected === contact.id && <p className="font-light text-xs flex justify-center">Mobile: {contact.mobile}</p>}
                </div>
              </div>
              {selected === contact.id && (
                <div className="pt-2 space-y-2">
                  <section className="flex justify-between w-5/6">
                    <IconButton symbol={"call"} />
                    <IconButton symbol={"message"} className="bg-blue-400 hover:bg-blue-600" />
                    <IconButton symbol={"video"} />
                    <IconButton symbol={"more"} className="bg-orange-400 hover:bg-orange-600"/>
                  </section>
                </div>
              )}
            </div>
          ))}
      </div>
    }
    </>
  )
}

export default QuickView
