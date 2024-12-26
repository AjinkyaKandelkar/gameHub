
import { Heading} from "@chakra-ui/react";
import { GameQuery } from "../App";

interface props{
    gameQuery: GameQuery
}
const GameHeading=({gameQuery}:props)=>{
    
    const heading = `${gameQuery.platform?.name || ''}  ${gameQuery.genre?.name || ''} Games`
    return<>
        <Heading size={'4xl'} marginY={4}>
            

             {heading}  
            
        </Heading>
    </>
}
export default GameHeading;