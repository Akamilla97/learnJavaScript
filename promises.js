//===============================     task 28        =========================

// ▷ Реализуйте функцию, которая выполняет несколько асинхронных операций последовательно,
// используя цепочку промисов

// function asyncOp1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Result 1"), 1000);
//   });
// }
// function asyncOp2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Result 2"), 2000);
//   });
// }
// function asyncOp3() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Result 3"), 3000);
//   });
// }
// Напишите функцию, которая выполняет asyncOp1, затем asyncOp2, затем asyncOp3,
// и возвращает массив результатов [result1, result2, result3].

// Решение

function asyncPromis(){
    const arrPromises = []

    return asyncOp1()
        .then(result1 => {
            arrPromises.push(result1)
            return asyncOp2()
        })
        .then(result2 => {
            arrPromises.push(result2)
            return asyncOp3()
        })
        .then(result3 => {
            arrPromises.push(result3)
            return arrPromises
        })
}

// asyncPromis().then((arrPromises) => console.log(arrPromises))


//===============================     task 29        =========================

// ▷ Перепишите предыдущую задачу с использованием async/await, чтобы сделать код более читаемым




async function asyncPromises() {
    const results = []

    const res1 = await asyncOp1()
    results.push(res1)

    const res2 = await asyncOp2()
    results.push(res2)

    const res3 = await asyncOp3()
    results.push(res3)

    return results
}

//asyncPromises().then((arrPromises) => console.log(arrPromises))



//===============================     task 30        =========================

// ▷ Реализуйте функцию, которая выполняет несколько асинхронных операций параллельно и возвращает их результаты

function asyncOpA() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('A'), 1000);
    });
}
function asyncOpB() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('B'), 2000);
    });
}
function asyncOpC() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('C'), 3000);
    });
}

// Напишите функцию, которая выполняет asyncOpA, asyncOpB, asyncOpC параллельно
// и возвращает массив результатов ['A', 'B', 'C'].


function parallelFunc(){
    return Promise.all([asyncOpA(), asyncOpB(), asyncOpC()])
}

// parallelFunc().then(res => console.log(res))





//===============================     task 31        =========================


// ▷ Реализуйте функцию, которая выполняет несколько асинхронных операций последовательно, 
// но при возникновении ошибки на любой стадии, останавливает выполнение и возвращает ошибку


function asyncOp1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('A'), 1000);
    });
}
function asyncOp2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('B'), 2000);
    });
}
function asyncOp3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('C'), 3000);
    });
}
function asyncOpWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Something went wrong')), 1000);
    });
}
// Напишите функцию, которая выполняет asyncOp1, затем asyncOpWithError, затем asyncOp3,
// и возвращает результат или ошибку, если что-то пошло не так.


async function funcAsyncPar() {
    try {
        const res1 = await asyncOp1()
        console.log(res1)

        const res2 = await asyncOp2()
        console.log(res2)

        const res3 = await asyncOp3()
        console.log(res3)

        const error1 = await asyncOpWithError()
        console.log(error1)

        return [res1, res2, res3, error1]
        
    } catch (error) {
        console.log("Error:", error.message)
        return error
    }
}

// funcAsyncPar()


//===============================     task 32        =========================

// ▷ У вас есть функция fetchData, которая принимает URL и колбэк, 
// который вызывается с данными после получения ответа. Промисифицируйте эту функцию, чтобы она возвращала промис


function fetchData(url, callback) {
    setTimeout(() => {
        callback(`Data from ${url}`);
    }, 2000);
}
// Промисифицируйте функцию fetchData так, чтобы она возвращала промис.
// Пример вызова: fetchDataPromise('https://api.example.com').then(data => console.log(data));

function fetchDataPromise(url) {
    return new Promise((resolve) => {
        fetchData(url, (data) => {
            resolve(data);
        });
    });
}

//fetchDataPromise('https://api.example.com').then(data => console.log(data));   //непонятная задача


