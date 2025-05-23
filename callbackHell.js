function wakeUp(callback) {
    console.log("Wakeup in morining 5 o'clock");
    setTimeout(() => {
        callback();
    },2000)
};

function breakfast(callback) {
    console.log("Eat early breakfast at 8 in morning")
     setTimeout(() => {
        callback();
    },3000)
}

function work(callback) {
    console.log("wrok from 9 to 7 till evening");
     setTimeout(() => {
        callback();
    },2000)
}

function sleep() {
    console.log("sleep at 10 night");
}

wakeUp(() => {
    breakfast(() => {
        work(() => {
            sleep();
        })
    })
})