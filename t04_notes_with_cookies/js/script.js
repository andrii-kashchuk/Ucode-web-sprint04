const area = document.querySelector("#area");
const addbtn = document.querySelector("#add");
const clrbtn = document.querySelector("#clear");
const massagebox = document.querySelector(".massage-box");
const massage = document.querySelector("#massage");

let cookiename = 1;
let _height = 120;
let height = 200;
let cookiedate = new Date(Date.now());

if (document.cookie != "") {
    massage.innerHTML = document.cookie.replace(/(;)/g, "");
} else {
    massage.innerHTML = "[Empty]";
}

function addCookie() {
    document.cookie = `-->cookie${cookiename} = ${area.value} <br>;expires=${cookiedate} `;
    cookiename++;
}
function clrcookies() {
    if (document.cookie == "") {
        console.error("No Cookies");
    } else {
        for (let i = 100; i > 0; i--) {
            document.cookie = `-->cookie${i} = ${area.value}<br>;expires=01 Jan 1970 00:00:00 UTC `;
        }
        cookiename = 1;
    }
}
addbtn.addEventListener(
    "click",
    function () {
        addCookie();
        console.log(area.value);
        let temp = document.cookie;
        height += 15;
        _height += 15;
        massage.style.height = _height + "px";
        massagebox.style.height = height + "px";
        massage.innerHTML = temp.replace(/(;)/g, "");
    },
    false
);
clrbtn.addEventListener(
    "click",
    function () {
        clrcookies();
        _height = 120;
        height = 200;
        massage.style.height = 120 + "px";
        massagebox.style.height = 200 + "px";
        massage.innerHTML = "[Empty]";
    },
    false
);