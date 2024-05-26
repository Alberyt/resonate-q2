import { IContact } from "@/models"

import DisplayPicture from "@/components/ui/contacts/display-picture";
import IconButton from "@/components/ui/icon-button";
import useFetchContact from "@/hooks/useFetchContact";

type View = {
  contacts?: IContact[],
  selected: number | null,
  updateSelected: (id: number) => void;
}

/**
 * 
 * @param {IContact[]} contacts - List of contacts
 * @param {number} selected - Current selected contact
 * @param updateSelected - Update current selected contact
 * @returns Quick view for contacts
 */
const QuickView: React.FC<View> = ({contacts, selected, updateSelected}) => {
  const {handleContact} = useFetchContact();
  return (
    <>
      {contacts && 
        <div className="flex flex-col rounded-lg w-full min-h-fit py-2 space-y-2">
          {contacts?.map((contact, index) => (
            <div key={index} className={`ml-2 mx-auto items-center ${contacts.length - 1 !== index && "pb-2"} w-full hover:shadow-lg rounded-3xl`}>
              <div tabIndex={0} className={`flex items-center space-x-4 hover:cursor-pointer ml-2`} onClick={() => updateSelected(contact.id)}>
                <DisplayPicture contact={contact}/>
                <div className="flex flex-col">
                  <h1 className="truncate overflow-hidden">{contact.name}</h1>
                  {selected === contact.id && <p className="font-light text-xs flex justify-center text-gray-500">Mobile: {contact.mobile}</p>}
                </div>
              </div>
              {selected === contact.id && (
                <div className="pt-4 space-y-2 ml-2">
                  <section className="flex justify-between w-[200px]">
                    <IconButton symbol={"call"} className="bg-green-400 hover:bg-green-600"/>
                    <IconButton symbol={"message"} className="bg-blue-400 hover:bg-blue-600" />
                    <IconButton symbol={"video"} className="bg-green-400 hover:bg-green-600"/>
                    <IconButton symbol={"more"} className="bg-orange-400 hover:bg-orange-600" handleContact={() => handleContact(contact.id)}/>
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
