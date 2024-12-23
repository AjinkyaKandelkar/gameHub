import useGenere from "../hooks/useGenere";

const GenereList=()=>{
    const{genres} = useGenere();
    return<>
    <ul>
        {genres.map((genre)=>
        <li> {genre.name} </li>
        )}
    </ul>
    
    </>
}
export default GenereList;