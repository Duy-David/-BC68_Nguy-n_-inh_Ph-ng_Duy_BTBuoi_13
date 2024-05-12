//BT!1:Tính tiền lương nhân viên
//sơ đồ 3 khối
//Input: Số gnày làm việc
//processing: Tổng Lương = Lương một ngày * số ngày làm việc
//output: Tổng lương

document.getElementById("tinhluong").onclick = function () {
  // console.log('huhu')
  let luongnhanvienmotngay = document.getElementById("luongnhanvien").value * 1;
  let songaylam = document.getElementById("songaylamviec").value * 1;
  // output
  let tinhluong = 0;
  // processing
  luongnhanvienmotngay = 100000;
  tinhluong = songaylam * luongnhanvienmotngay;

  // console.log(luongnhanvienmotngay)

  // console.log(tinhluong)

  document.getElementById(
    "result-b1"
  ).innerHTML = ` Tiền lương của nhân viên: ${tinhluong.toLocaleString("vn", {
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
  let trungbinhsothuc = 0;
  // processing
  trungbinhsothuc = (num1 + num2 + num3 + num4 + num5) / 5;
  // console.log(luongnhanvienmotngay)

  // console.log(tinhluong)

  document.getElementById(
    "result-b2"
  ).innerHTML = ` Trung bình 5 số thực lần lượt ${num1}, ${num2}, ${num3}, ${num4}, ${num5} : ${trungbinhsothuc}`;
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
  let chieudai = document.getElementById("Chieudai").value * 1;
  let chieurong = document.getElementById("Chieurong").value * 1;
  // output
  let chuvi = 0;
  let dientich = 0;
  // processing
  chuvi = (chieudai + chieurong) * 2;
  dientich = chieudai * chieurong;
  console.log(chuvi);
  console.log(dientich);
  document.getElementById(
    "result-b4"
  ).innerHTML = `Với hình chủ nhật có chiều dài:${chieudai}, chiều rộng ${chieurong}, thì nhận được chu vi: ${chuvi} và diện tích: ${dientich}`;
};

//BT5: Tính tổng ký số của số có 2 chữ số bất kỳ
//sơ đồ 3 khối
//Input: 1 số có 2 chữ số hay (10<= num <= 99)
//processing: số hàng chục ,số hàng đơn vị
//output: Tổng 2 ký số = số hàng chục +số hàng đơn vị

document.getElementById("Tongkyso").onclick = function () {
  // console.log('huhu')
  let socohaichuso = Number(document.getElementById("socohaichuso").value).toFixed();
  // output
  let tongkyso = 0;
  // processing

  if ((10 <= socohaichuso) & (socohaichuso <= 99)) {
    
    let sohangchuc = (socohaichuso - (socohaichuso % 10)) / 10;
    let sohangdonvi = socohaichuso % 10;

    tongkyso = sohangchuc + sohangdonvi;
    document.getElementById(
      "result-b5"
    ).innerHTML = `Với chữ số có 2 chữ số là ${socohaichuso}, ta có tổng 2 ký số là: ${tongkyso}`;
  } else {
    let notnum ='Số '+ socohaichuso +'Không phải số nguyên dương có 2 chữ số'
   tongkyso= notnum
    document.getElementById(
      "result-b5"
    ).innerHTML = `số ${socohaichuso} Không phải số nguyên dương có 2 chữ số`;
    console.log(tongkyso);
  }
};
