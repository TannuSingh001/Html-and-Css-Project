// HOUR Hand
// for 12h = 360
// 1 hrs = 30
// nh = 30h
// 60min = 30deg
// 1 min = 1/2
//  30n+ n/2/...1
//  for min
// 60 min = 360
// 1 min = 6deg
// nmin = 6n...2

// For sec
// 6osec = 360sec
//  nsec  = 6n...3
let hour_hand = document.querySelector(".hour-hand");
let min_hand = document.querySelector(".min-hand");
let sec_hand = document.querySelector(".sec-hand");

let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(() => {

    let time = new Date();

    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    let hrotation = 30 * h + m / 2;
    let mrotation = 6 * m;
    let srotation = 6 * s;

    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;

    dh.innerHTML = h < 10? "0" + h : h;
    dm.innerHTML = m < 10 ? "0" + m : m;
    ds.innerHTML = s < 10 ? "0" + s : s;

}, 1000);