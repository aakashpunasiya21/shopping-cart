import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap'
import Home from './Home';
//import { Router } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state => {
    state.login
  })
  
  const handleClose= () =>{
    dispatch(login(false))
  }

  const handleShow= () =>{
    dispatch(login(true))
  }
  
  
  const [username, setUsername] = useState("");
  console.log(username)
  const [password, setPassword] = useState("");
  console.log(password)

  const submit = () => {
    <login />
  }

  return (

    <div className="text-center mt-5">
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={selector.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" name="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         <Button variant="primary" onClick={handleClose}>
            login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


















 <Router>
      <nav>
        <ul>
         <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/product">ProductContainer</Link>
          </li>

        </ul>
      </nav>
      <Switch>
        <Route exact path="/">

        </Route>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/product">
          <ProductsContainer />

        </Route>
      </Switch>


    </Router> 

export default App
