import { platform } from "./Platform";

interface Game{
    id: number,
    name: string,
    name_original:string,
    released:Date,
    background_image:string,
    background_image_additional:string,
    rating:number,
    description:string
    parent_platforms:{ platform :platform}[]
}
export default Game;
