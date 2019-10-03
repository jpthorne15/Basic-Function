function add(dumb,dumber) {
    return dumb+dumber
}


function saySpeak (obj){
    obj.speak()
}

function callback(f1) {
    f1()
    let fvalue=f1()

    console.log(fvalue)
    return "callback"
}

module.exports={add,saySpeak,callback}