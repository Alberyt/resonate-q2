import { useEffect, useMemo, useState } from "react";

import { IContact } from "@/models";

/**
 * @return handleAlphabet - A method to filter selected character
 * @return handleSearch - A method to search for contacts
 * @return query - Searched query 
 * @return loading - loading state
 * @return contacts - list of filtered contacts
 */
const useFetch = () => {
    const [data, setData] = useState<IContact[]>([]);     // Raw Data
    const [query, setQuery] = useState("");               // Full text search or first letter (^char)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
      fetch(`https://my-json-server.typicode.com/alberyt/resonate-q2-server/users?_sort=name${query && `&name_like=${query}`}`)
          .then((res) => res.json())
          .then((data) => {
            setData(data)
          })
      setLoading(false)
    }, [query, ])

    /**
     * Updates contacts by sorting them in the corresponding names.
     * 
     * @return {Map} - Sorted Contacts
     */
    const contacts: Map<string, IContact[]> = useMemo(() => {
      const map = new Map<string, IContact[]>();

      data.map((contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        if (!map.has(firstLetter)) {
          map.set(firstLetter, [contact]);
        } else {
          const prev = map.get(firstLetter);
          if (prev) map.set(firstLetter, [...prev, contact]);
        }
      })

      return map;
    }, [data])

    const handleSearch = (query: string) => {
      setQuery(query);
    }

    /**
     * Updates the query to only search for corresponding character
     */
    const handleAlphabet = (character: string) => {
      if (character === query) setQuery("")
      else setQuery(character)
    }

    return {
      handleAlphabet,
      handleSearch,
      query,
      loading,
      contacts
    }
}

export default useFetch
