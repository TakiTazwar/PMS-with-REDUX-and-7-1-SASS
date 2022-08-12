import axios from 'axios';


async function registerAPI (data)
{
    const headers={"Content-Type":"application/json"};

    const post= await axios.post("http://localhost:5000/user/registration",data,headers);

    return post.data.data;
    // //const navigate=useNavigate();
    // const headers={"Content-Type":"application/json"};
    // await axios.post("http://localhost:5000/user/registration",data,headers).then(res=>
    // {
    //     if(res.data.success==true)
    //     {
    //     // localStorage.setItem('type', res.data.data.type);
    //     // localStorage.setItem('id', res.data.data.id);
    //     // localStorage.setItem('token', res.data.data.access_token);
    //     alert("registration success");
    //     //navigate("/login");
    //     }
    //     else if(res.data.success==false)
    //     {
    //         alert(res.data.message);
    //     }
    // })
    // //.catch(res=>navigate("/internalError"));
}

export default registerAPI;