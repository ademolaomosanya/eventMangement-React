import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function signin() {
  return (
    <div class="sign--container">
      <Form className="h-100 m-auto  align-items-center justify-content-center"
     style={{width:"600px"}} >
        <h1
          style={{
            fontSize: "20px", margin: "0px",
            color: " rgb(250,150, 186)",
          }}
        >
          Sign into your Account
        </h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <div className="form-a">
          <p>
            Dont have an account?{" "}
            <a style={{ textDecoration: "none",  }} href="/signup">
              Register here
            </a>
          </p>
        </div>
      </Form>
    </div>
  );
}
