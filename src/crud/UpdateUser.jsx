import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Form, Modal, Button } from "react-bootstrap";
import axios from "axios";

const UpdateUser = () => {
  // const [data, setData] = useState([]);

  const { id } = useParams();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setValues(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handlenSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/users/" + id, values)
      .then((res) => {
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
        <h1 className="text-danger m-4">Edit User</h1>
        <Form
          className="w-50 rounded bg-white border shadow p-5"
          onSubmit={handlenSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={(e) => {
                setValues({ ...values, name: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={values.email}
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
              value={values.phone}
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

export default UpdateUser;
