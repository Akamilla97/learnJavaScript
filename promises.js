// ▷Реализуйте функцию, которая выполняет несколько асинхронных операций последовательно,
// используя цепочку промисов

function asyncOp1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result 1"), 1000);
  });
}
function asyncOp2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result 2"), 2000);
  });
}
function asyncOp3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Result 3"), 3000);
  });
}
// Напишите функцию, которая выполняет asyncOp1, затем asyncOp2, затем asyncOp3,
// и возвращает массив результатов [result1, result2, result3].




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

asyncPromis().then((arrPromises) => console.log(arrPromises))