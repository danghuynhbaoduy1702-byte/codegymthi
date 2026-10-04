function laNamNhuan(nam) {
    return (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0);
}


function tinhSoNgay(chuoiThangNam) {

    let phanDoan = chuoiThangNam.split("/");

    
    if (phanDoan.length !== 2 || phanDoan[0].length !== 2 || phanDoan[1].length !== 4) {
        return "Lỗi: Nhập sai định dạng! Vui lòng nhập MM/yyyy (Ví dụ: 02/2020)";
    }

    let thang = parseInt(phanDoan[0]);
    let nam = parseInt(phanDoan[1]);

   
    if (isNaN(thang) || isNaN(nam) || thang < 1 || thang > 12 || nam <= 0) {
        return "Lỗi: Tháng hoặc năm không hợp lệ!";
    }

    
    if (thang === 2) {
        return laNamNhuan(nam) ? 29 : 28;
    } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
        return 30;
    } else {
        return 31;
    }
}


let nhapVao = prompt("Nhập tháng/năm theo định dạng MM/yyyy (Ví dụ: 02/2020):");

if (nhapVao) {
    let ketQua = tinhSoNgay(nhapVao.trim());

    
    if (typeof ketQua === "number") {
        alert(`Tháng/Năm ${nhapVao} có ${ketQua} ngày.`);
    } else {
        alert(ketQua); 
    }
    console.log(`Đầu vào: ${nhapVao} -> Kết quả: ${ketQua}`);
} else {
    alert("Bạn chưa nhập dữ liệu!");
}