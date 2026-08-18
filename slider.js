const imgs = document.querySelectorAll(".sec > img")
const sec = document.querySelector(".sec")
const list = document.querySelectorAll("ul > li ")

const btnright = document.querySelector(".btnR")

const btnleft = document.querySelector(".btnL")

const allbtn = document.querySelectorAll("button")


let flag = null
let stop;
let click = true


startauto()

btnright.addEventListener("click", () => {


    run()

})

btnleft.addEventListener("click", () => [

    run2()

])


function run() {


    imgs.forEach((val, index) => {



        flag = val.getAttribute("data-test")
        val.style.filter = "blur(5px)"

        if (flag < 2) {

            flag++


        } else {

            flag = 0

        }

        if (flag == 2) {
            val.style.filter = "blur(0px)"
        }



        val.setAttribute("data-test", flag)

        switch (flag) {

            case 0: val.classList.remove("right"), val.classList.remove("center"), val.classList.add("left");
                break;

            case 1: val.classList.remove("left"), val.classList.remove("center"), val.classList.add("right");
                break;

            case 2: val.classList.remove("right"), val.classList.remove("left"), val.classList.add("center");
        }


    })

    active()
    timer()

}


function run2() {


    imgs.forEach((val, index) => {


        flag = Number(val.getAttribute("data-test"))
        val.style.filter = "blur(5px)"

        if (flag > 0) {

            flag--

        } else {

            flag = 2

        }

        if (flag == 2) {
            val.style.filter = "blur(0px)"
        }

        val.setAttribute("data-test", flag)

        switch (flag) {

            case 1: val.classList.remove("left"), val.classList.remove("center"), val.classList.add("right");
                break;

            case 0: val.classList.remove("right"), val.classList.remove("center"), val.classList.add("left");
                break;

            case 2: val.classList.remove("right"), val.classList.remove("left"), val.classList.add("center");

        }


    })

    active()
    timer()

}


function active() {

    list.forEach((val) => {
        val.style.background = "white"



        imgs.forEach((item, index) => {

            let y = item.getAttribute("data-test")

            if (y == 2) {
                list[index].style.background = "black"
            }


        })
    })

}



function timer() {


    allbtn.forEach((val) => {


        val.addEventListener("click", () => {

            val.setAttribute("disabled", "disabled")


            setTimeout(() => {

                val.removeAttribute("disabled")

            }, 850);



        })

    })


}


btnleft.addEventListener("mousemove", () => {
    clearInterval(stop)
})
btnright.addEventListener("mousemove", () => {
    clearInterval(stop)
})

btnleft.addEventListener("mouseleave", () => {
    startauto()
})
btnright.addEventListener("mouseleave", () => {
    startauto()
})


function startauto() {

    stop = setInterval(() => {

        run().click()

    }, 2500);
}

