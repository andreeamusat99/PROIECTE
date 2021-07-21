const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".substract");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")){
        count.innerHTML++;
        setColor()
    }
    if (e.target.classList.contains("substract")){
        count.innerHTML--;
        setColor()
    }
    if (e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor()
    }
})

function setColor() {
    if(count.innerHTML > 0) {
        count.style.color = "yellow"
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered"
    }
    else {
        count.style.color = "#fff"
    }
}

/* add.addEventListener("click", () => {
     count.innerHTML++; //incrementez valoarea cu 1
});

sub.addEventListener("click", () => {
    count.innerHTML--; //decrementez valoarea cu 1
});

resetCount.addEventListener("click", () => {
    count.innerHTML = 0; //resetez la 0
});
*/
