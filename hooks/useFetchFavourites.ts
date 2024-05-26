import { useEffect, useState } from "react";

import { IContact } from "@/models";

/**
 * 
 * @returns contacts - list of favourite contacts
 * @returns loading - loading state
 */
const useFetchFavourites = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);     // Raw Data
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(`https://my-json-server.typicode.com/alberyt/resonate-q2-server/users?favorite=true`)
        .then((res) => res.json())
        .then((data) => {
          setContacts(data)
        })
    setLoading(false)
  }, [])

  return {
    contacts,
    loading
  }  
}

export default useFetchFavourites
