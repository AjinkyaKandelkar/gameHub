
import { GameQuery } from "../App";
import { BreadcrumbLink, BreadcrumbRoot } from "../components/ui/breadcrumb";

interface props{
    gameQuery: GameQuery | null;
    onSelectCrum:(gameQ: any )=>void;
}
const GameHeading=({gameQuery, onSelectCrum}:props)=>{
    
    // const heading = `${gameQuery.platform?.name || ''}  ${gameQuery.genre?.name || ''} Games`
    return<>
    <BreadcrumbRoot size={"lg"} marginY={4}>
        <BreadcrumbLink onClick={()=> onSelectCrum(()=>{ gameQuery? null:null }) }> Games </BreadcrumbLink>
        { gameQuery?.platform && <BreadcrumbLink > {gameQuery?.platform?.name} </BreadcrumbLink>}
        { gameQuery?.genre && <BreadcrumbLink> {gameQuery?.genre?.name} </BreadcrumbLink>}
    </BreadcrumbRoot>
        {/* <Heading size={'4xl'} marginY={4}>
            

             {heading}  
            
        </Heading> */}
    </>
}
export default GameHeading;