
const fu = {
    Key_1 : 1,
    Key_2 : 2,
    Key_3 : 3
}

const bar = function () {
    for (let key in fu) {
        if (fu.hasOwnProperty(key)){
            console.log (key);
        }
    }
}

bar()