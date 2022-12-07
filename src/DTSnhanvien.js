export const userColumns = [
    {
        field: "HoTen",
        headerName: "Nhân viên",
        width: 200,
        renderCell: (params) => {
            return <div className="cellWithImg">{params.row.HoTen}</div>;
        },
    },
    // {
    //     field: "NgaySinh",
    //     headerName: "Ngày Sinh",
    //     width: 130,
    // },
    // {
    //     field: "GioiTinh",
    //     headerName: "Giới tính",
    //     width: 130,
    // },
    {
        field: "Email",
        headerName: "Email",
        width: 200,
    },
    {
        field: "SDT",
        headerName: "Số điện thoại",
        width: 130,
    },
    // {
    //     field: "DiaChi",
    //     headerName: "Địa chỉ",
    //     width: 130,
    // },
    // {
    //     field: "CMND",
    //     headerName: "CMND",
    //     width: 150,
    // },

    // {
    //   field: "status",
    //   headerName: "Trạng thái",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <div className={`cellWithStatus ${params.row.status}`}>
    //         {params.row.status}
    //       </div>
    //     );
    //   },
    // },
];
