import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handlenSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then((res) => {
        // console.log(res);
        navigate("/user");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center bg-light vh-100  p-8"
      >
        <h1 className="text-danger m-4">Add User</h1>
        <Form
          className="w-50 rounded bg-white border shadow p-5"
          onSubmit={handlenSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setValues({ ...values, name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              onChange={(e) => {
                setValues({ ...values, email: e.target.value });
              }}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone: </Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone"
              onChange={(e) => {
                setValues({ ...values, phone: e.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/user" className="btn btn-secondary m-2">
            Back
          </Link>
        </Form>
      </Container>
    </>
  );
};

export default AddUser;
