import { IContact } from '@/models';
import { useState } from 'react'

const useFetchContact = () => {
  const [contact, setContact] = useState<IContact | null>(null);
  const [loading, setLoading] = useState(false);

  const handleContact = (id: number) => {
    setLoading(true)
    fetch(`https://my-json-server.typicode.com/alberyt/resonate-q2-server/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setContact(data)
      })
    setLoading(false);
  }

  return {
    contact, 
    handleContact,
    loading
  }
}

export default useFetchContact
