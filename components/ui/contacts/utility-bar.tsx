import { FaPlus  } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";

import { Button } from "../button"
import SearchBar from "./search-bar";
import IconButton from "../icon-button";

type Query = {
  handleSearch: (query: string) => void;
}

const UtilityBar: React.FC<Query> = ({handleSearch}) => {
  return (
    <div className="flex w-full justify-between items-center pb-4">
      {/* Search Bar */}
      <SearchBar handleSearch={(query) => handleSearch(query)}/>
      
      {/* Buttons */}
      <div className="flex space-x-2 w-1/3">
        {/* Add Contact */}
        <IconButton symbol={"plus"} displayLabel={false}/>
        <IconButton symbol={"more"} displayLabel={false}/>
        {/* More Options */}
      </div>
    </div>
  )
}

export default UtilityBar
