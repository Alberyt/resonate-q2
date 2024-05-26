import { IContact } from "@/models";
import DisplayPicture from "@/components/ui/contacts/display-picture";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import useContact from "@/hooks/useContact";

type IFavourites = {
  favourites: {
    contacts: IContact[];
    loading: boolean;
  }
}

/**
 * @param {IFavourites} favourites - List containing user's favourited contacts and loading component.
 * @returns Simple view of user's favourited contains.
 */
const Favourites: React.FC<IFavourites> = ({favourites}) => {
  const methods = useContact();
  return (
    <section>
      <h1 className="font-semibold underline-offset-2">Favourites</h1>
      <ScrollArea>
        <div className="flex flex-row justify-start items-center space-x-4 mb-4">
          {favourites.contacts.map((contact, index) => (
            <Button key={index} className="flex flex-col h-full items-center bg-gray-300 hover:shadow-lg hover:bg-gray-300 rounded-lg" 
                tabIndex={0} onClick={() => methods.contact.handleContact(contact.id)}>
              <DisplayPicture contact={contact} variant="medium"/>
              <h1 className="text-sm text-black">{contact.name.split(" ")[0]}</h1>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal"/>
      </ScrollArea>
    </section>
  )
}

export default Favourites
