import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
export default function Siginup() {
  return (
    <div class="sign--container">
      <Form className='h-100 m-auto col w-50 align-items-center justify-content-center'
      style={{width:"600px"}}>
        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="name" placeholder="FirstName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="name" placeholder="LastName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

<div className="d-flex justify-content-center">
<Button variant="primary"  type="submit">
          Submit
        </Button>
</div>
      </Form>
    </div>
  );
}
