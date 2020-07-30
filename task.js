let value = Array.from(document.getElementsByClassName('dropdown__value'));
let link = Array.from(document.getElementsByClassName('dropdown__link'));

let list1 = link[0].closest("ul");
console.log(list1.previousElementSibling);


for (let i = 0; i < value.length; i++) {
    value[i].addEventListener("click", () => {
        value[i].nextElementSibling.classList.toggle("dropdown__list_active");
    })
}

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", (event) => {
        event.preventDefault();
        link[i].closest("ul").previousElementSibling.textContent = link[i].textContent;
        link[i].closest("ul").classList.remove("dropdown__list_active");
    })
}