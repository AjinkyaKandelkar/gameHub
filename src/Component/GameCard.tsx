import { Button, Card, Image } from "@chakra-ui/react";
import Game from "../modules/Game";
import PlatformIconList from "./PlatformIconList";

interface props{
    game:Game
}

const GameCard=({game}: props)=>{

    return(
        <>
            <Card.Root key={game.id} maxW={"sm"} overflow={"hidden"}>
                <Image src={game.background_image} alt={game.background_image_additional} />
                <Card.Body gap={"2"}>
                    <Card.Title> {game.name} </Card.Title>
                    <Card.Description>
                            {/* {game.parent_platforms.map(p=> 
                                <span key={p.platform.id}> {p.platform.name} </span>
                             )}
                               */}
                        <PlatformIconList platforms={game.parent_platforms.map(( p )=> p.platform )}></PlatformIconList>
                        {/* <PlatformIconList platforms={game.parent_platforms.map(plat=> plat.platform)}></PlatformIconList>          */}
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