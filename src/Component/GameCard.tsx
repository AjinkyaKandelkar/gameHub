import { Button, Card, Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import Game from "../modules/Game";
import PlatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../Services/api-media";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <>
      <Card.Root key={game.id} maxW={"sm"} overflow={"hidden"}>
        <Image
          src={getCroppedImageUrl(game.background_image)}  //to get the cropped image using url
          alt={game.background_image_additional}
        />
        <Card.Body gap={"2"}>
          <Card.Title> {game.name} </Card.Title>
          <Card.Description>
           <HStack  justifyContent={"space-between"}>
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                ></PlatformIconList>
              
             
                <CriticsScore score={game.metacritic}></CriticsScore>
              
            </HStack>
          </Card.Description>
        </Card.Body>
        <Card.Footer gap={"2"}>
          <Button variant="solid">Buy now</Button>
          <Button variant="ghost">Add to cart</Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
};
export default GameCard;
