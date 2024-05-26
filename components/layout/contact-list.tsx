import { useState } from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import UtilityBar from "@/components/ui/contacts/utility-bar"
import AlphabetHeader from "@/components/ui/contacts/alphabet-header"
import QuickView from "@/components/ui/contacts/quick-view"
import AlphabetFilter from "@/components/ui/contacts/alphabet-filter"
import { alphabet } from "@/components/constants"
import { IContact } from "@/models"

type IContacts = {
  contacts: {
    handleAlphabet: (character: string) => void;
    handleSearch: (query: string) => void;
    query: string;
    loading: boolean;
    contacts: Map<string, IContact[]>;
  },
  children?: React.ReactNode;
}

/**
 * Creates contact list holding; search bar, add contact, filters.
 * 
 * @param {Hook} contacts - Hook containing all the necessary methods and data to update list
 * @param {React.ReactNode} children - Used to add additional components inside utility and contact list.
 * @returns Self contained contact list.
 */
const Contacts: React.FC<IContacts> = ({contacts, children}) => {
  const [ selected, setSelected ] = useState<number | null>(null);        // Get id, not index

  const handleSelected = (id: number) => {
    if (selected === id) setSelected(null)
    else setSelected(id)
  }

  return (
    <section className="flex flex-col h-full w-full p-6 bg-gray-300 md:rounded-3xl">
      <UtilityBar handleSearch={(query) => contacts.handleSearch(query)}/>
        {children}
      <ScrollArea className="h-full w-full">
        <div className="flex flex-row space-x-2">
          <section className="space-y-3 w-4/5">
            {alphabet.map((character, index) => (
              <div key={index} className="space-y-3">
                <AlphabetHeader character={character}/>
                <QuickView contacts={contacts.contacts.get(character)} selected={selected} updateSelected={(id) => handleSelected(id)}/>
              </div>
            ))}
          </section>
          <section className="w-1/5">
            {alphabet.map((character, index) => (
              <AlphabetFilter key={index} character={character} query={contacts.query} handleFilter={(char) => contacts.handleAlphabet(char)}/>
            ))}
          </section>
        </div>
      </ScrollArea>
    </section>
  )
}

export default Contacts
