let startbtn = document.querySelector("#start")
let restart = document.querySelector("#reset")
let doli = document.querySelector("#doli")
let second = document.querySelector("#second")
let minute = document.querySelector("#minute")
startbtn.addEventListener('click', startinterval)
restart.addEventListener('click', reset)

var i=0
let interval
let check=true

function startinterval(){
    if(check===true){
    interval=setInterval(starwatch,10)
    check=false
    startbtn.innerText='Stop'
    } else{
        stopwatch()

    }
}
let l=0
let j=0
let d
function starwatch(){
    i++
    if(i==100){
        i=0
        j++
        if(j==60){
            j=0
            l++
        }
    }
    doli.innerText=re(i)
    second.innerText=re(j)
    minute.innerText=re(l)
}

function stopwatch(){
    clearInterval(interval)
    check=true
    startbtn.innerText='Start'
}

function re(arg){
    if (arg<10){
        d='0';
        d=d+arg
    }else{
        d=0
        d=d+arg
    }
    return d
}

function reset(){
    clearInterval(interval)
    i=0
    j=0
    l=0
    doli.innerText=re(i)
    second.innerText=re(j)
    minute.innerText=re(l)
    check=true
}