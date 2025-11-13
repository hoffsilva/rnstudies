// import * as calc from "./calc.js";

// // console.log(calc.sum(4,6))
// // console.log(calc.multiply(4,6))

// // setTimeout(() => {
// //     console.log("Oi!")
// // }, 5000)


// // let value = 10

// // const interval = setInterval(() => {
// //     console.log(value)

// //     if (value === 0) {
// //         console.log("acabou!")
// //         clearInterval(interval)
// //     }

// //     value--
// // }, 1000)  

// /*
// pode ter o await

// funcao async retorna uma promise

// quando essa promise recebe um valor, ela é resolvida. resolve()

// quando essa promise recebe um erro, ela é rejeitada. reject()
// */

// function asyncFunction() {
//     return new Promise ((resolve, reject) => {
//         setTimeout( () => {
//             const isSuccess = true

//             if (isSuccess) {
//                 resolve("deu certo!")
//             } else {
//                 reject("deu errado!")
//             }
//         }, 3000)
//     })
// }

// // console.log(asyncFunction())

// // asyncFunction()
// // .then((deuCerto) => {
// //     console.log(deuCerto)
// // })
// // .catch((deuErrado) => {
// //     console.log(deuErrado)
// // })
// // .finally(() => {
// //     console.log("Fim da promise")
// // })


// // async await

// const fetchConst = async () => {
//     console.log(await asyncFunction())
// }

// async function fetch() {
//     const response = await asyncFunction()
//     console.log(response)

//     try {
//         const response = await asyncFunction()
//         console.log(response)
//     } catch (erro) {
//         console.log(erro)
//     } finally {
//         console.log("fim do try catch")
//     }

// }

// fetchConst()

// fetch()

// /* event loop

// single thread

// nao trava o ccontexto da execucao, - no blocking

// async

// as tarefas assincronas sao concorrentes pelo processamento.

// o event loop é um modelo de concorrencia baseado em um event loop que é responsavel pela execuvao das funcoes assincronas.

// event loop ta sempre olhando a call stack e a callback queue

//     microtasks: alta prioridade, antes das macrotests, temporizadores e promises

//     macrotasks: callbacks, set timeout, setInterval

// */

// console.log(1)

// queueMicrotask( () => {
//     // executa logo apos as funcoes sincronas
//     console.log(2)
// })

// // macrotask
// setTimeout(() => {
//     // executa por ultimo
//     console.log(3, "setTimeOut")
// })

// console.log(4)

// Promise.resolve(true).then(() => {
//     // executa como uma microtask
//     console.log(5, "promise")
// })

// /*
// Pacotes

// libs

// exemplo day.js pra lidar com data e hora

// <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>

// */

// const now = dayjs()
// console.log(now.format("DD/MM/YYYY"))

// /*
// Gerenciador de pacotes

// npm - Node Package Manager

// dependencias de producao(somente para producao) e desenvolvimento(somente para desenvolvimento)

// pra usar o npm precisa ter o node instalado
// */


// fetch('http://localhost:3000/products')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })

async function fetchProducts() {
    const response = await fetch('http://localhost:3000/products')
    const data = await response.json()

    console.log(data)
}

// // fetchProducts()

// async function fetchProductById(id) {
//     const response = await fetch(`http://localhost:3000/products/${id}`)
//     const data = await response.json()

//     console.log(data)
// }

// fetchProductById("1")

const productName = document.getElementById("name")
const productPrice = document.getElementById("price")

addEventListener("submit", async (event) => {
    event.preventDefault()

    const product = {
        id: new Date().getTime().toString(),
        name: "sasasa",
        price: 1235
    }

    console.log(product)

    await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
})