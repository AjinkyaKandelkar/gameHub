import { Button, Card, Image } from "@chakra-ui/react";
import Game from "../modules/Game";

interface props{
    game:Game
}
const GameCard=({game}: props)=>{

    return(
        <>
            <Card.Root maxW={"sm"} overflow={"hidden"}>
                <Image src={game.background_image} alt={game.background_image_additional} />
                <Card.Body gap={"2"}>
                    <Card.Title> {game.name} </Card.Title>
                    <Card.Description>
                        {game.description}
                    </Card.Description>

                </Card.Body>
                <Card.Footer gap={"2"}>
                    <Button variant="solid">Buy now</Button>
                    <Button variant="ghost">Add to cart</Button>
                </Card.Footer>
                
            </Card.Root> 
        </>
    )
}
export default GameCard;