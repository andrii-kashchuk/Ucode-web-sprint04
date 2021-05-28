
let li = document.getElementsByTagName("li");

for (let i = 0; i < li.length; i++) {
    if (li[i].className !== "good" &&
        li[i].className !== "evil" &&
        li[i].className !== "unknown") {
        li[i].className = "unknown";
    }

    if ( !li[i].hasAttribute("data-element") ) {
        li[i].setAttribute("data-element", "none");
    }

    let dataElement = li[i].getAttribute("data-element").split(" ");
        li[i].insertAdjacentHTML("beforeend", '<br/>');

        dataElement.forEach(function (item) {
            if (item.length > 0) {
                li[i].insertAdjacentHTML('beforeend','<div class="elem ' + item + '">' +
                (item === 'none' ? '<div class="line"></div>' : '') +
                '</div>');
            }

    });

}
