import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenere from "../hooks/useGenere";
import getCroppedImageUrl from "../Services/api-media";
const GenereList = () => {
  const { data } = useGenere();
  return (
    <>
      <List.Root listStyle="none">
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack> 
                <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} overflow='hidden' borderRadius={8}/>
                <Text> {genre.name} </Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};
export default GenereList;
