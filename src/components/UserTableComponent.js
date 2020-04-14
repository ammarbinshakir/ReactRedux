import React, {useState} from 'react';
import {Button, ButtonGroup, InputGroup, Table, FormControl} from 'react-bootstrap'
import './UserForm.css'
// import avatar from "./avatar.png";
import UserForm from "./UserFormComponent";
// import base64img from 'base64-img'

import {connect} from 'react-redux'

import {Link} from "react-router-dom";
import {userForm} from "../redux";
const LOCAL_STORAGE_KEY='user.ino'
const Users = ({userFormTable}) => {

    // JSON.parse( localStorage.getItem('user.ino'))
    //
    // const [userList, setUserList] = useState(JSON.parse( localStorage.getItem('user.ino')) || [])

    const [userList, setUserList] = useState(userFormTable || [])
    console.log(userFormTable)

    const [filter, setFilter] = useState(userFormTable || [])

    // base64Img.img('data:image/png;base64,...', 'dest', '1', function(err, filepath) {});
    // remove user
    const handleDelete=(i)=>{
        const deleteUser = filter.filter((user, index) => index !== i)
        setFilter(deleteUser)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(deleteUser))
        console.log(deleteUser)
    }

    // onChange Search
    const handleChange=(e)=>{

        const filterSearch = userList

        setFilter(filterSearch.filter(user => user.firstname.includes(e.target.value )|| user.lastname.includes(e.target.value)))

        // console.log(userList.filter(user => user.firstname.includes(e.target.value )|| user.lastname.includes(e.target.value)))
    }
    return (
        <>
            <br/>
            <br/>
            <h3 className="h3">Users</h3>
            <InputGroup className="mb-3" size='lg'>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" ><span role="img">🔎</span></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    onChange={handleChange}
                    placeholder="firstname or lastname"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <Table striped bordered hover >
                <thead>
                <tr>

                    <th>#</th>
                    <th>Profile Picture</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>

                </tr>
                </thead>
                <tbody >
                {filter.map((user, i )=> (<tr>

                    <td>{i=i}</td>
                    <td>
                        <img variant="top" src={`data:image/jpeg;base64,${user.photo}` }  style={{ width:'75px', height:'75px'}} />
                        {/*<img variant="top" src={user.photo}  style={{ width:'75px', height:'75px'}} />*/}
                        {/*    <img variant="top" src={userList.photo}  style={{ width:'75px', height:'75px'}} alt="image"/>*/}
                    </td>
                    <td >{user.firstname}</td>
                    <td >{user.lastname}</td>
                    <td >{user.email}</td>
                    <input type="checkbox" name="check" />
                    <ButtonGroup><Link to={`/userdetail/${i}`}><Button type="submit" variant="primary" >View</Button></Link>
                        <Link to={`/userform/${i}`}><Button type="submit"  variant="info">Edit</Button></Link>
                        <Button type="submit" onClick={() => handleDelete(i)} variant="danger">Delete</Button></ButtonGroup> {'  '}

                </tr>))}


                </tbody>
            </Table>
        </>
    );
};

const mapStateToProps = state =>{
    console.log(state)
    return{
        userFormTable: state.userForm
    }
}

// const mapDispatchToProps= dispatch=> {
//     return{
//         userForm: (data)=>dispatch(userForm(data))
//     }
// }

export default connect(mapStateToProps,null)(Users);