

let s = prompt("Avtomabilin getidyi mesafeni daxil edin:") * 1;
let t = prompt("Avtomabilin getdiyi zamani daxil edin:") * 1;
const calculation = function (s, t) {
    let OSY = 0;
    let second = t / 3600;
    let v = s / second;
    if (v > 0 && v < 60) {
        OYS = 6;
    }
    else if (v >= 60 && v < 90) {
        OYS = 9;
    }
    else if (v >= 90 && v < 120) {
        OYS = 8;
    } else if(v>120){
        OYS = 10;
    }
    else{
        return "Daxil etdiyiniz deyisen duz deyil!"
    }
    let l = (OYS * s) / 100;
    let netice = `${s} km yolu ${t} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${v} km saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${l} litr, ortalama yanacaq sərfiyyatı isə ${OYS} l/100 km olacaq`
    return netice;
}
console.log(calculation(s, t));