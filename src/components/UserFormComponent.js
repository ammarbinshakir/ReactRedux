import React,{useState} from 'react';
import {Form,Col ,Button,ButtonGroup,} from 'react-bootstrap'
import './UserForm.css'
import {useForm} from 'react-hook-form'
// import uuidv4 from 'uuid/v4'
import image2base64 from 'image-to-base64'
import {useHistory} from "react-router-dom";
// import  base64Img from 'base64-img'
import {userForm} from "../redux";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {connect} from 'react-redux'

const LOCAL_STORAGE_KEY='user.ino'


const UserForm = ({userForm}) => {
    const {register,handleSubmit,errors}=useForm({ defaultValues:  {
            firstName: "",
            lastName: "",
            email: "",
            phone:"",
            address:"",
            photo:[]
        }})
    const history=useHistory();





    const onSubmit = (data) => {
        console.log('Submit event', data)


        // const onSubmit = (data) => {
        //     if (window.File && window.FileReader && window.FileList && window.Blob) {
        //         var f = data.target.photo[0]; // FileList object
        //         var reader = new FileReader();
        //         // Closure to capture the file information.
        //         reader.onload = ((files) => {
        //             return (e) => {
        //                 var binaryData = e.target.result;
        //                 //Converting Binary Data to base 64
        //                 var base64String = window.btoa(binaryData);
        //                 const userList=JSON.parse( localStorage.getItem('user.ino'))
        //                     if(userList) {
        //                         const files = [...userList, {...data, photo: base64String}]
        //                         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(files))
        //                         // console.log(base64String); //cGF0aC90by9maWxlLmpwZw==
        //                     }else{
        //                         const files = [{...data, photo: base64String}]
        //                         localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(files))
        //                     }
        //                 //putting file converted to base64
        //                 console.log(base64String);
        //
        //             };
        //         })(f);
        //         // Read in the image file as a data URL.
        //         reader.readAsBinaryString(f);
        //     } else {
        //         alert('The File APIs are not fully supported in this browser.');
        //     }
        // }




        image2base64(data.photo[0]) // you can also to use url
            .then(
                (response) => {

                    userForm({...data, photo: response})
                    console.log(response)
                    //
                    // const userList=JSON.parse( localStorage.getItem('user.ino'))
                    // if(userList) {
                    //     const files = [...userList, {...data, photo: response}]
                    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(files))
                    //     console.log(response); //cGF0aC90by9maWxlLmpwZw==
                    // }else{
                    //     const files = [{...data, photo: response}]
                    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(files))
                    // }
    })
            .catch(
                (error) => {
                    console.log(error); //Exepection error....
                })
        history.push('/usertable')
    };






    return (
        <>
            <br/>
            <div className='h3'>
                <h3 >Please Enter User Information</h3>
            </div>
            <Form className='user-form' onSubmit={handleSubmit(onSubmit)}>

                <Form.Row >
                    <Col>
                        <Form.Control type="text" placeholder="First name" name="firstname"
                                      ref={register({required: 'Required',
                                          minLength:5, maxLength:10, pattern: {value: /^[A-Za-z]+$/i,
                                              message: "invalid name"}
                                      })}/>
                    </Col>
                    {errors.firstname && errors.firstname.message}
                    <Col>
                        <Form.Control type="text" placeholder="Last name" name="lastname"
                                      ref={register({required: 'Required',
                                          minLength:5, maxLength:10, pattern: {value: /^[A-Za-z]+$/i,
                                              message: "invalid name"}
                                      })}/>
                    </Col>
                    {errors.lastname && errors.lastname.message}
                </Form.Row>
                <br/>
                <Form.Row   >
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Email: abc@mail.com" name="email"
                                      ref={register({
                                          required: 'Required',
                                          pattern: {
                                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                              message: "invalid email address"
                                          }
                                      })}/>
                    </Form.Group>
                    {errors.email && errors.email.message}
                </Form.Row>
                <Form.Row  >
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Control type="phone" placeholder="Phone: 03001234567" name="phone"
                                      ref={register({
                                          required: 'Required', pattern:{
                                              value: /^(\+92|92|03|0092)\d{10}$/

                                              // /03[0-9]{2}[0-9]{7}/gm
                                              //  /[+]923[0-9]{2}[0-9]{7}/gm
                                              //   /00923[0-9]{2}[0-9]{7}/gm
                                          }})}/>
                    </Form.Group>
                    {errors.phone && errors.phone.message}
                </Form.Row>
                <Form.Row  >
                    <Form.Group as={Col} controlId="formGridAddress">
                        <Form.Control placeholder="Address: 1234 Main St" name="address"
                                      ref={register({required: 'Required', minLength:5, maxLength:100,})}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAvatar">
                        <Form.File
                            type="file"
                            id="custom-file"
                            label="Choose avatar"
                            name="photo"
                            custom
                            ref={register({
                                required: 'Required'})}

                        />
                    </Form.Group>
                </Form.Row>
                <br/>
                <ButtonGroup><Button variant="primary" type="submit"  value="submit">Submit form</Button></ButtonGroup>
            </Form>
        </>
    );
};


const mapDispatchToProps= dispatch=> {
    return{
        userForm: (data)=>dispatch(userForm(data))
    }
}

export default connect(null ,mapDispatchToProps) (UserForm);