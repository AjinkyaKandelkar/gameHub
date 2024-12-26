import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../Services/api-media";
import { Genres } from "../modules/Genres";

interface Props {
  Genre: Genres[];
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenereList = ({ Genre, onSelectGenre, selectedGenre }: Props) => {
  return (
    <>
    <Heading size={"2xl"}> Genres </Heading>
      <List.Root listStyle="none">
        {Genre.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                overflow="hidden"
                borderRadius={8}
              />
              <Button

                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant={"plain"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {" "}
                {genre.name}{" "}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};
export default GenereList;
