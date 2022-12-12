import "./DataTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../DataTableSource2";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axiosClient from "Data/client";

import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import axios from "axios";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DataTableNguoiMua = () => {
  // const [data, setData] = useState(userRows)

  const [users, setUsers] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [idNV, setIDNV] = useState();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        await axiosClient.get("/v1/nguoidung/getallmua").then((res) => {
          setUsers(res.data);
        });
      } catch (error) {
        console.log("LOI", error);
      }
    };
    getUser();
  }, []);

  const handleDelete = (id) => {
    setIDNV(id);
    handleClickOpen();
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              // to="/client/:clientID"
              to={"/client/" + params.id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            {userData.Quyen == "QUANLY" ? (
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.id)}
              >
                Delete
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        getRowId={(row) => row._id}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Bạn thật sự muốn xóa khách hàng này?"}</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>Hủy</Button>
            <Button
              onClick={async () => {
                handleClose();
                await axios.delete(
                  "http://localhost:9000/v1/nguoidung/delete/" + idNV
                );
                setUsers(users.filter((item) => item.id !== idNV));
                window.location.replace("/client");
              }}
            >
              Xóa
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default DataTableNguoiMua;
