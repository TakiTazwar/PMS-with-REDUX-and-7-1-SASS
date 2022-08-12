import axios from 'axios';
//import { useNavigate } from 'react-router-dom';

async function loginAPI (data)
{

    const headers={"Content-Type":"application/json"};

    const post= await axios.post("http://localhost:5000/user/login",data,headers);

    return post.data.data;

}

export default loginAPI;