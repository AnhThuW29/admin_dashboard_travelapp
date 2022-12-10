import "./DataTable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../DataTableSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "Data/client";

const DataTable = () => {
    // const [data, setData] = useState(userRows)

    const [users, setUsers] = useState([]);

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
        setUsers(users.filter((item) => item.id !== id));
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
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.id)}
                        >
                            Delete
                        </div>
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
        </div>
    );
};

export default DataTable;

// import React, { useState } from 'react'
// import { DataGrid } from '@mui/x-data-grid';

// const DataTable = ({
//     rows,
//     columns,
//     loading,
//     sx
// }) => {
//     const [pageSize, setPageSize] = useState(2);

//     return (
//         <DataGrid
//             rows={rows}
//             columns={columns}
//             loading={loading}
//             sx={sx}
//             checkboxSelection
//             pagination
//             pageSize={pageSize}
//             onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//             rowsPerPageOptions={[2, 5, 10]}
//         />
//     );
// };

// export default DataTable
