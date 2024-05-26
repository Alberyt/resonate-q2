import { Button } from '@/components/ui/button'

type Alphabet = {
  character: string,
  query: string,
  handleFilter: (character: string) => void;
}

/**
 * 
 * @param character - Letter from Alphabet
 * @param query - The query from search bar or selected letter filter.
 * @param handleFilter - Updates query searching for only names starting with specific character.
 * @returns Filter with letter users can select.
 */
const AlphabetFilter: React.FC<Alphabet> = ({character, query, handleFilter}) => {
  // Determine if filter was pressed based on query.
  const filter = query[0] === "^";
  const selected = filter && query[1] === character
  return (
    <Button onClick={() => handleFilter(`^${character}`)} variant={filter && selected ? "default" : "ghost"} size={"sm"} className='flex'>
      {character}
    </Button>
  )
}

export default AlphabetFilter
