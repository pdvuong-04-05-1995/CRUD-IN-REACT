import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ListUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa không?");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          location.reload();
          navigate("/user");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <Link to="add" className="btn btn-primary m-2">
        Add +
      </Link>
      <div className="w-75 rounded bg-white border shadow p-4">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>
                    <Link
                      to={`read/${item.id}`}
                      className="btn btn-ms btn-info me-2"
                    >
                      Read
                    </Link>
                    <Link
                      to={`update/${item.id}`}
                      className="btn btn-ms btn-primary me-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => handleDelete(item.id)}
                      className="btn btn-ms btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListUsers;
