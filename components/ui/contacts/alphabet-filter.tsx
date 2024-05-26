import React from 'react'
import { Button } from '../button'

type Alphabet = {
  character: string,
  query: string,
  handleFilter: (character: string) => void;
}

const AlphabetFilter: React.FC<Alphabet> = ({character, query, handleFilter}) => {
  const filter = query[0] === "^";
  const selected = filter && query[1] === character
  return (
      <Button onClick={() => handleFilter(`^${character}`)} variant={filter && selected ? "default" : "ghost"} size={"sm"} className='flex'>
        {character}
      </Button>
  )
}

export default AlphabetFilter
