import { Genres } from "../modules/Genres";
import useData from "./useData";

const useGenere = () => useData<Genres>('/genres');
export default useGenere;
