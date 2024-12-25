import { platform } from "../modules/Platform";
import useData from "./useData";

const usePlatforms=()=>useData<platform>('/platforms/lists/parents')
export default usePlatforms;