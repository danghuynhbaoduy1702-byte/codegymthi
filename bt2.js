
function kiemTraSoHoanHao(n) {
    if (n <= 0 || !Number.isInteger(n)) return false;

    let tongUoc = 0;

  
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            tongUoc += i; 
        }
    }


    return tongUoc === n;
}

let nhapVao = prompt("Nhập vào một số nguyên dương:");
let so = parseInt(nhapVao);

if (isNaN(so) || so <= 0) {
    alert("Vui lòng nhập một số nguyên dương hợp lệ!");
} else {
    let ketQua = kiemTraSoHoanHao(so);
    
    alert(`Số ${so}: ${ketQua}`);
    console.log(`Đầu vào: ${so} -> Kết quả: ${ketQua}`);
}