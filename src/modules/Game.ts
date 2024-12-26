import { platform } from "./Platform";
import screenshots from "./Screenshot";

interface Game{
    id: number,
    name: string,
    name_original:string,
    released:Date,
    background_image:string,
    background_image_additional:string,
    rating:number,
    description:string
    parent_platforms:{ platform :platform}[],
    metacritic:number;
    screenshots_count:number;
    short_screenshots:screenshots[];
}
export default Game;
