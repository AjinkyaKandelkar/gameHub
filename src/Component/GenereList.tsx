import { Button, HStack, Image, Link, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/api-media";
import { Genres } from "../modules/Genres";

interface Props{
  Genre: Genres[];
  onSelectGenre:(genre: Genres)=>void;
}

const GenereList = ({Genre, onSelectGenre }:Props) => {
  return (
    <>
      <List.Root listStyle="none">
        {Genre.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack> 
                <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} overflow='hidden' borderRadius={8}/>
                <Button  variant={"plain"} onClick={()=>{onSelectGenre(genre)}}> {genre.name} </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};
export default GenereList;
