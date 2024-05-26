import useFetchContacts from "./useFetchContacts";
import useFetchContact from "./useFetchContact";


const useContact = () => {
  const contacts = useFetchContacts();
  const contact = useFetchContact();

  return {
    contacts,
    contact
  }
}

export default useContact
