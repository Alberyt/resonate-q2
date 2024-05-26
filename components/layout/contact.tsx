import { FaArrowLeft } from "react-icons/fa";

import DisplayPicture from "@/components/ui/contacts/display-picture";
import IconButton from "@/components/ui/icon-button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Details from "@/components/ui/contacts/details";
import { Button } from "@/components/ui/button";
import useContact from "@/hooks/useContact";

/**
 * @returns Displays additional information for selected contact. 
 */
const Contact = () => {
  const { contact } = useContact();
  return (
    <section className="bg-gray-300 md:my-6 md:mr-6 md:rounded-3xl p-8 h-full z">
      <ScrollArea className="h-full">
        {contact.contact && (
          <section className="flex flex-col space-y-6">
            <Button variant={"link"} size={"icon"} onClick={contact.removeContact} className="ml-2 md:hidden">
            <FaArrowLeft size={20}/>
            </Button>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-16">
              <DisplayPicture contact={contact.contact} variant="large"/>
              <div className="flex flex-col gap-1 w-full text-center lg:text-start">
                <h1 className="text-lg font-semibold">{contact.contact.name}</h1>
                <p className="text-gray-500">Mobile: {contact.contact.mobile}</p>
                <div className="flex flex-row pt-2 space-y-2 justify-center lg:justify-start">
                  <section className="flex justify-between w-full md:w-[250px]">
                    <IconButton symbol={"call"} className="bg-green-400 hover:bg-green-600"/>
                    <IconButton symbol={"message"} className="bg-blue-400 hover:bg-blue-600" />
                    <IconButton symbol={"video"} className="bg-green-400 hover:bg-green-600"/>
                    <IconButton symbol={"more"} className="bg-orange-400 hover:bg-orange-600"/>
                  </section>
                </div>
              </div>
            </div>
            <Separator className="bg-gray-400"/>
            <Details {...contact.contact}/>
          </section>
        )}
      </ScrollArea>
    </section>
  )
}

export default Contact
