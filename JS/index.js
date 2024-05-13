//BT!1:Tính tiền lương nhân viên
//sơ đồ 3 khối
//Input: Số gnày làm việc
//processing: Tổng Lương = Lương một ngày * số ngày làm việc
//output: Tổng lương

document.getElementById("tinhluong").onclick = function () {
  // console.log('huhu')
  let luongNhanVienMotNgay = document.getElementById("luongnhanvien").value * 1;
  let soNgayLam = document.getElementById("songaylamviec").value * 1;
  // output
  let tinhLuong = 0;
  // processing
  luongNhanVienMotNgay = 100000;
  tinhLuong = soNgayLam * luongNhanVienMotNgay;

  // console.log(luongnhanvienmotngay)

  // console.log(tinhluong)

  document.getElementById(
    "result-b1"
  ).innerHTML = ` Tiền lương của nhân viên: ${tinhLuong.toLocaleString("vn", {
    style: "currency",
    currency: "VND",
  })}`;
};

//BT2:Tính trung bình của 5 số thực
//sơ đồ 3 khối
//Input: 5 số thực bất kỳ
//processing: (số thứ 1 + Số thứ 2 + Số thứ 3 + Số thứ 4 + Số thứ 5 )/5
//output:  trung binh 5 số thực là:

document.getElementById("tinhtrungbinh").onclick = function () {
  // console.log('huhu')
  // input
  let num1 = document.getElementById("Sothunhat").value * 1;
  let num2 = document.getElementById("Sothuhai").value * 1;
  let num3 = document.getElementById("Sothuba").value * 1;
  let num4 = document.getElementById("Sothubon").value * 1;
  let num5 = document.getElementById("Sothunam").value * 1;
  // output
  let trungBinhSoThuc = 0;
  // processing
  trungBinhSoThuc = (num1 + num2 + num3 + num4 + num5) / 5;
  // console.log(luongnhanvienmotngay)

  // console.log(tinhluong)

  document.getElementById(
    "result-b2"
  ).innerHTML = ` Trung bình 5 số thực lần lượt ${num1}, ${num2}, ${num3}, ${num4}, ${num5} : ${trungBinhSoThuc}`;
};

//BT3:Tính Quy đổi USd thành VNĐ biết tỷ giá hiện tại là 23500/1USD
//sơ đồ 3 khối
//Input: Số USD cần được quy đổi
//processing: số tiền VND sau quy đổi = số USD * 23500
//output: Số tiền VNĐ sau khi quy đổi

document.getElementById("Quydoi").onclick = function () {
  // console.log('huhu')
  let USD = document.getElementById("soUSD").value * 1;
  // output
  let VND = 0;
  // processing
  VND = USD * 23500;

  // console.log(VND)

  document.getElementById(
    "result-b3"
  ).innerHTML = `Với tỷ giá 23.500, ${USD.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })} được quy đổi thành : ${VND.toLocaleString("vn", {
    style: "currency",
    currency: "VND",
  })}`;
};

//BT4: Tính diện tích, chu vi hình chữ nhật
//sơ đồ 3 khối
//Input: chiều dài & chiều rộng của Hình chủ nhật
//processing: Diện tích = Chiều Dài * Chiều Rộng, Chu vi =( Chiều Dài + Chiều Rộng)*2
//output: Diên tích & chu vi

document.getElementById("tinhchuvi-dientich").onclick = function () {
  // console.log('huhu')
  let chieuDai = document.getElementById("Chieudai").value * 1;
  let chieuRong = document.getElementById("Chieurong").value * 1;
  // output
  let chuVi = 0;
  let dienTich = 0;
  // processing
  chuVi = (chieuDai+ chieuRong) * 2;
  dienTich = chieuDai * chieuRong;
  console.log(chuVi);
  console.log(dienTich);
  document.getElementById(
    "result-b4"
  ).innerHTML = `Với hình chủ nhật có chiều dài:${chieuDai}, chiều rộng ${chieuRong}, thì nhận được chu vi: ${chuVi} và diện tích: ${dienTich}`;
};

//BT5: Tính tổng ký số của số có 2 chữ số bất kỳ
//sơ đồ 3 khối
//Input: 1 số có 2 chữ số hay (10<= num <= 99)
//processing: số hàng chục ,số hàng đơn vị
//output: Tổng 2 ký số = số hàng chục +số hàng đơn vị

document.getElementById("Tongkyso").onclick = function () {
  // console.log('huhu')
  let soCoHaiChuSo = Number(document.getElementById("socohaichuso").value).toFixed();
  // output
  let tongKySo = 0;
  // processing

  if ((10 <= soCoHaiChuSo) & (soCoHaiChuSo <= 99)) {
    
    let soHangChuc = (soCoHaiChuSo - (soCoHaiChuSo % 10)) / 10;
    let soHangDonVi = soCoHaiChuSo % 10;

    tongKySo = soHangChuc + soHangDonVi;
    document.getElementById(
      "result-b5"
    ).innerHTML = `Với chữ số có 2 chữ số là ${soCoHaiChuSo}, ta có tổng 2 ký số là: ${tongKySo}`;
  } else {
    let notNum ='Số '+ soCoHaiChuSo +'Không phải số nguyên dương có 2 chữ số'
    tongKySo= notNum
    document.getElementById(
      "result-b5"
    ).innerHTML = `số ${soCoHaiChuSo} Không phải số nguyên dương có 2 chữ số`;
    console.log(tongKySo);
  }
};
