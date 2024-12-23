import { Badge } from "@chakra-ui/react";

interface props{
    score: number;
}

const CriticsScore=({score}:props)=>{
    let clr = score>75? "green": score<25? "red": "yellow"
    return(
        <>
        <Badge colorPalette={clr} > {score} </Badge>

        </>
    )

}
export default CriticsScore;