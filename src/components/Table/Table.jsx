import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { dataClient } from '../../Data/dataClient'
import "./Table.css";

function createData(trackingId, name, customer, date, amount, status) {
  return {trackingId, name, customer, date, amount, status };
}

const rows = [
  createData(18908424, "Tour Bà Nà hill 1 ngày", 'Anh Thư' , "2 November 2022", 2, "Chờ xác nhận"),
  createData(18908424, "Tour Huế 3 ngày 2 đêm ", 'Anh Thư' , "2 November 2022", 2, "Đã xác nhận"),
  createData(18908424, "2 vé phòng đôi Sheraton hotel", 'Anh Thư' , "25 October 2022", 2, "Hoàn thành"),
  createData(18908421, "1 vé phòng đơn Iris hotel", 'Anh Thư' , "20 October 2022", 2, "Hoàn thành"),
];


const makeStyle = (status)=>{
  if(status === 'Đã xác nhận')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Chờ xác nhận')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3>Giao dịch gần đây</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029", borderRadius: '0.7rem' }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Mã theo dõi</TableCell>
                <TableCell>Giao dịch</TableCell>
                <TableCell>Khách hàng</TableCell>
                <TableCell align="left">Ngày</TableCell>
                <TableCell>Số lượng</TableCell>
                <TableCell align="left">Trạng thái</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.trackingId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.trackingId}
                  </TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.customer}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Chi tiết</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}