const plusbutton=document.querySelector("#plus")
const minusbutton=document.querySelector("#minus")
const screenCount=document.querySelector("#count")
const reset=document.querySelector(".reset")
const computeBtn=document.querySelector(".compute")
const textBox=document.querySelector("#text-box")

let count=0

const resetCount=()=>{
    count=0
    screenCount.innerText=count
    textBox.innerText="Current count is 0"
}

const addNum=()=>{
    count++
    screenCount.innerText=count
}

const subtractNum=()=>{
    count--
    screenCount.innerText=count
}

const computeValue=()=>{
    textBox.innerText=`Current count is ${count}`

}

reset.addEventListener('click',resetCount)
plusbutton.addEventListener('click',addNum)
minusbutton.addEventListener('click',subtractNum)
computeBtn.addEventListener('click',computeValue)