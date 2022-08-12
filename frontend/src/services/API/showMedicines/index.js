import axios from 'axios';

async function getAllMedicine (data)
{

    const get=await axios({
        method: 'get',
        url: 'http://localhost:5000/customer/viewallmedicine'
    });

    return get;

}

async function deleteMedicine(data)
{
    const deleteMed=axios
    ({
        method: 'delete',
        url: 'http://localhost:5000/admin/deleteBook/'+data,
    });

    return deleteMed;

}

async function showSingleMedicine(data)
{
    const Med=axios
    ({
        method: 'get',
        url: "http://localhost:5000/customer/viewmedicine/"+data,
    });

    return Med;
}

async function editMedicine(id,formData)
{
    const editData=await axios({
        method: 'put',
        url: 'http://localhost:5000/admin/editmedicine/'+id,
        data: formData
    });

    return editData;
}

async function addMedicine(formData)
{
    const addData=await axios({
        method: 'post',
        url: 'http://localhost:5000/admin/addmedicine',
        data: formData
    });

    return addData;
}

export default {
    getAllMedicine,
    deleteMedicine,
    showSingleMedicine,
    editMedicine,
    addMedicine
}