import { IContact } from "@/models";
import DisplayPicture from "../ui/contacts/display-picture";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Button } from "../ui/button";

type IFavourites = {
  favourites: {
    contacts: IContact[];
    loading: boolean;
  }
}

const Favourites: React.FC<IFavourites> = ({favourites}) => {
  return (
    <section>
      <h1 className="font-semibold underline-offset-2">Favourites</h1>
      <ScrollArea>
        <div className="flex flex-row justify-start items-center space-x-4 mb-4">
          {favourites.contacts.map((contact, index) => (
            <Button key={index} className="flex flex-col h-full items-center bg-gray-300 hover:bg-gray-500" tabIndex={0}>
              <DisplayPicture contact={contact} variant="medium"/>
              <h1 className="text-sm text-black">{contact.name.split(" ")[0]}</h1>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}

export default Favourites
