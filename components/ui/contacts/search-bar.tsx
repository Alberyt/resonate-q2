import { FaSearch } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

type Query = {
  handleSearch: (query: string) => void;
}

/**
 * 
 * @param handleSearch - Function to filter all the contact list.
 * @returns Search bar for contacts
 */
const SearchBar: React.FC<Query> = ({handleSearch}) => {
  return (
    <div className="flex flex-row mr-auto rounded-3xl overflow-hidden w-full">
      <Input 
        placeholder="Search" 
        className="w-3/4"
        // defaultValue={query}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // Prevents the default behavior of the Enter key (e.g., form submission)
            handleSearch("");
          }
        }}  
      />
      <Button variant={"outline"} className="p-2 rounded-r-full" aira-label="Search button">
        <FaSearch size={16} />
      </Button>
    </div>
  )
}

export default SearchBar
