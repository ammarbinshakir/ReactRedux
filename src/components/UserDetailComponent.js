import React, {useState} from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import './UserForm.css'

const UserDetailComponent = () => {
    const [userList, setUserList] = useState(JSON.parse( localStorage.getItem('user.ino')))
    const [filter, setFilter] = useState(JSON.parse( localStorage.getItem('user.ino')))
    return (
        <>
            <br/>
            <div className='user-form'>
                {
                    filter.map((user,i) => (<Card  key={i} style={{ backgroundColor: '#bddffc', width: '25rem', height:'25rem'  }}>
                        <Card.Body>
                            <img variant="top" src={user.photo} alt="image" style={{width:'150px', height:'150px'  }} />
                            <Card.Body>
                                <ListGroupItem><h3 className="h3">{user.firstname} {user.lastname}</h3></ListGroupItem>
                            </Card.Body>
                            <ListGroup className="list-group-flush" >
                                <ListGroupItem>{user.firstname}</ListGroupItem>
                                <ListGroupItem>{user.lastname}</ListGroupItem>
                                <ListGroupItem>{user.email}</ListGroupItem>
                                <ListGroupItem>{user.phone}</ListGroupItem>
                                <ListGroupItem>{user.address}</ListGroupItem>
                            </ListGroup>
                        </Card.Body>
                    </Card>))}
                <br/>
            </div>
        </>
    );
};

export default UserDetailComponent;