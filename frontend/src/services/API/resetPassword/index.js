import axios from 'axios';

async function resetPasswordMailAPI (data)
{
    const headers={"Content-Type":"application/json"};

    const post= await axios.post("http://localhost:5000/user/resetpasswordmail",data,headers);

    return post.data;

}

export default resetPasswordMailAPI;