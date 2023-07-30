const fu = {
    Key_1 : 1,
    Key_2 : 2,
    Key_3 : 3
}


const bar = function (key, obj) {
    console.log (key in obj);
}

bar('Key_3', fu)
