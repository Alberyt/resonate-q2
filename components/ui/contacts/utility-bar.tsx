import { FaPlus  } from "react-icons/fa";
import { MdOutlineMoreHoriz } from "react-icons/md";

import { Button } from "../button"
import SearchBar from "./search-bar";

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
        <Button size={"customIcon"} >
          <FaPlus size={16} />
        </Button>
        <Button size={"customIcon"}>
          <MdOutlineMoreHoriz size={24} />
        </Button>
        {/* More Options */}
      </div>
    </div>
  )
}

export default UtilityBar
