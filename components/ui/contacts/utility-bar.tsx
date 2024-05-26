import IconButton from "@/components/ui/icon-button";
import SearchBar from "@/components/ui/contacts/search-bar";

type Query = {
  handleSearch: (query: string) => void;
}

/**
 * @param handleSearch - Function to filter all the contact list. 
 * @returns Search bar, add contacts, additional filters.
 */
const UtilityBar: React.FC<Query> = ({handleSearch}) => {
  return (
    <div className="flex w-full justify-between items-center pb-4">
      {/* Search Bar */}
      <SearchBar handleSearch={(query) => handleSearch(query)}/>
      
      {/* Buttons */}
      <div className="flex space-x-2 w-1/3">
        {/* Add Contact */}
        <IconButton symbol={"plus"} displayLabel={false} />
        <IconButton symbol={"more"} displayLabel={false}/>
        {/* More Options */}
      </div>
    </div>
  )
}

export default UtilityBar
