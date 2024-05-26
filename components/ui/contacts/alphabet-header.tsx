type Alphabet = {
    character: string,
}

/**
 * @param character 
 * @returns Header for corresponding letter
 */
const AlphabetHeader: React.FC<Alphabet> = ({character}) => {
  return (
      <h1 className="ml-2">{character}</h1>
  )
}

export default AlphabetHeader
