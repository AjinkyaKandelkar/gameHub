import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2b4324b2008c44fcbb2ee0be2078f484'
    }
})