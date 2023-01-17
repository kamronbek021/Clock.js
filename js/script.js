let hours = document.querySelector(".hours")
let minutes = document. querySelector(".minutes")
let h = document.querySelector(".h")
let m = document.querySelector(".m")
let s = document.querySelector(".s")


// console.log(new Date(). getsecond());

// let x = 1
// let  stop

// function rec() {
//     console.log(x);
//     if (x < 10) {
//         x++
//         rec()
//     }
//     stop = setTimeout(() => {
//         x++
//         rec()
//         if (x == 5) {
//             clearTimeout(stop)
//         }
//     }, 200);
// }

// rec


function clock () {
    let time  = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    
    if (hour < 10) {
        hours.innerText = "0" + hour
    }else {
         hours.innerText = hour
    }
    if (min < 10) {
        minutes.innerHTML = "0" + min
    }else {
        minutes.innerHTML = min
    }
    
    // hours innerHTML = hour < 10 ? "0" + hour : hour
    
    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`
    
    setTimeout(() => {
        clock()
    }, 1000);
}

clock()

// let tabsItemActive = document.querySelector(".tabsItem.active")

// tabsItemActive.addEventListener("click", function () {
//     console.log(this);
//     if (this.classList.contains("active")) {
//         console.log('Yes');
//         this.classList.add("qwer")
//         this.classList.remove("active")
//         this.classList.toggle("aaa")
//     }else {
//         console.log('No');
//     }
// })

let tabsItem = document.querySelectorAll(".tabsItem")
let tabsContentItem = document.querySelectorAll(".tabsContentItem")

for(let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener("click", function() {
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove("active")
            tabsContentItem[k].classList.remove("active")
        }
        tabsItem[i].classList.add("active")
        tabsContentItem[i].classList.add("active")
    })
}











