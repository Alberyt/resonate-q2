import useFetchContacts from "@/hooks/useFetchContacts";
import useFetchContact from "@/hooks/useFetchContact";
import useFetchFavourites from "@/hooks/useFetchFavourites";

/**
 * @returns Collection of methods from useFetchContact, useFetchContacts & useFetchFavourites
 */
const useContact = () => {
  const contacts = useFetchContacts();
  const contact = useFetchContact();
  const favourites = useFetchFavourites();

  return {
    contacts,
    contact,
    favourites
  }
}

export default useContact
