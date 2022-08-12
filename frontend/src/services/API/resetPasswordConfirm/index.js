import axios from 'axios';

async function resetPasswordAPI (data)
{
    const headers={"Content-Type":"application/json"};

    const post= await axios.post("http://localhost:5000/user/resetpassword",data,headers);

    return post.data;

}

export default resetPasswordAPI;