type Alphabet = {
    character: string,
}

const AlphabetHeader: React.FC<Alphabet> = ({character}) => {
  return (
      <h1 className="ml-2">{character}</h1>
  )
}

export default AlphabetHeader
