import useFetchContacts from "./useFetchContacts";
import useFetchContact from "./useFetchContact";
import useFetchFavourites from "./useFetchFavourites";


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
