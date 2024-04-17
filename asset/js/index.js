
function tinhPhuongTrinhBacNhat(a, b) {

    //đầu tiên cần check validate dữ liệu đầu vào bằng cách kiểm tra kiểu dữ liệu
    if(typeof a !== 'number') {
        return 'a phải là 1 số'
    }

    if (typeof b !== 'number') {
        return 'b phải là 1 số'
    }

    console.log('Phương trình bật nhất có dạng ' + a + 'x + ' + b + " = 0")

    // check a và b
    if(a == 0 && b != 0) {
        return 'Phương trình vô nghiệm'
    }

    else if (a == 0 && b == 0) {
        return 'Phương trình vô số nghiệm'
    }

    else {
        return 'Phương trình có 1 nghiệm là : ' + -b/a
    }
}

//cần gán giá trị của hàm với 1 biến sau đó sử dụng biến đó để in ra màn hình
let result = tinhPhuongTrinhBacNhat(0, 0)
console.log(result)

//Phương trình bậc 2 :

function tinhPhuongTrinhBacHai(a, b, c) {

    // Kiểm tra dữ liệu đầu vào
    if (typeof a !== 'number') {
        return 'a phải là kiểu số'
    }

    if (typeof b !== 'number') {
        return 'b phải là kiểu số'
    }

    if (typeof c !== 'number') {
        return 'c phải là kiểu số'
    }


    console.log('Phương trình bậc 2 có dạng : '+ a + 'x^2 + ' + b + 'x + ' +c+ ' = 0' )

    // Tính Delta
    let delta = b**2 - 4*a*c
    console.log('Detal = ' + delta)

    // Tính nghiệm
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta))/2*a
        let x2 = (-b - Math.sqrt(delta))/2*a
        return 'Phương trình có 2 nghiệm x1 = ' + x1 + ' và x2 = ' + x2
    }

    else if (delta == 0) {
        let x = -b/2*a
        return 'Phương trình có 2 nghiệm kép x1 = x2 = '+ x
    }

    else
    {
        return 'Phương trình vô nghiệm'
    }

}

let result2 = tinhPhuongTrinhBacHai(1, 3, 2)
console.log(result2)

//Bài tập 3
function tinhDiemTrungBinh (toan, van, anh)
{
    // kiểm tra dữ liệu đầu vào
    if (typeof toan !== 'number') {
        return 'Điểm toán phải là số'
    } else {
        if(toan < 0 || toan > 10) {
            return 'Điểm toán phải trong khoảng 0 -> 10'
        }
    }

    if (typeof van !== 'number') {
        return 'Điểm văn phải là số'
    } else {
        if(van < 0 || van > 10) {
            return 'Điểm văn phải trong khoảng 0 -> 10'
        }
    }

    if (typeof anh !== 'number') {
        return 'Điểm anh phải là số'
    } else {
        if(anh < 0 || anh > 10) {
            return 'Điểm anh phải trong khoảng 0 -> 10'
        }
    }

    let diemTB = (toan + van + anh)/3
    console.log(diemTB)

    if (diemTB < 5) {
        return 'Học sinh Yếu'
    }

    else if (diemTB >=5 && diemTB < 6.5) {
        return 'Học sinh Trung Bình'
    }

    else if(diemTB >= 6.5 && diemTB < 8) {
        return 'Học sinh Khá'
    }

    else
    {
        return 'Học sinh Giỏi'
    }
}

let hocLuc = tinhDiemTrungBinh(11, 8, 9)
console.log(hocLuc)

