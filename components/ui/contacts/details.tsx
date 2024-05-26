import { IContact } from "@/models"

/**
 * 
 * @param {IContact} contact - Contact Object 
 * @returns Additional Details regarding the contact.
 */
const Details: React.FC<IContact> = ({mobile, email, website, notes }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-1/2">
      <h1>Mobile:</h1>
      <h1>{mobile}</h1>
      <h1>Email:</h1>
      <h1>{email}</h1>
      <h1>Website:</h1>
      <h1>{website}</h1>
      <h1>Notes:</h1>
      <h1>{notes}</h1>
    </div>
  )
}

export default Details
