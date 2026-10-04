let mang = [3, 7, 9, 12, 14, 18, 21];

if (mang.length > 50) {
    console.log("Mảng không được quá 50 phần tử!");
} else {
    console.log("Mảng ban đầu:", mang);

    let tong = 0;
    let dem = 0;


    for (let i = 0; i < mang.length; i++) {
        if (mang[i] % 3 === 0) {
            tong += mang[i];
            dem++;
        }
    }

    
    if (dem > 0) {
        let tbc = tong / dem;
        console.log("Trung bình cộng các số chia hết cho 3:", tbc);
    } else {
        console.log("Không có số nào chia hết cho 3.");
    }
}