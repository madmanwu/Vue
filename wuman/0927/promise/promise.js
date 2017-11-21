/* function fn () {
    console.log(2);
};
function main () {
    console.log(1);
    fn();
    console.log(3);
};
main(); */

/* function fn () {
    setTimeout(function () {
        console.log(2);
    }, 0);
};
function main () {
    console.log(1);
    fn();
    console.log(3);
};
main(); */

/* function fn () {
    setTimeout(function () {
        console.log(2);
    }, 0);
};
function main () {
    console.log(1);
    fn();
    setTimeout(function () {
        console.log(3);
    });
};
main(); */

/* function fn (cd) {
    setTimeout(function () {
        console.log(2);
        cd();
    }, 0);
};
function main () {
    console.log(1);
    fn(function () {
        console.log(3);
    });
};
main(); */

/* let a = 10;
let promise = new Promise(function (resolve, reject) {
    if (a === 10) {
        resolve('success');
    } else {
        reject();
    }
});
console.log(promise); */

/* let a = 10;
let promise = new Promise(function (resolve, reject) {
    if (a === 10) {
        resolve('success');
    } else {
        reject();
    }
});
promise.then(function (res) {
    console.log(res);
}); */

/* let a = 11;
let promise = new Promise(function (resolve, reject) {
    if (a === 10) {
        resolve('success');
    } else {
        reject([500, {code:0, message:'error'}]);
    }
});
promise.then(function (res) {
    console.log(res);
});
promise.catch(function (err) {
    console.log(err);
}); */

/* function fn () {
    return new Promise (function (resolve, reject) {
        setTimeout(function () {
            console.log(2);
            resolve('success');
        }, 0);
    });
};
function main () {
    console.log(1);
    fn().then(function () {
        console.log(3);
    });
};
main(); */

/* function fn () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2);
            resolve('success');
        }, 2000);
    });
};

async function main () {
    console.log(1);
    await fn();
    console.log(3);
}
main(); */

function fn () {
    console.log(2);
};

function main () {
    console.log(1);
    fn();
    console.log(3);
}
main();
