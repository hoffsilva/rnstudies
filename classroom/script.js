console.log("Hello World!")

// one line comment
/* 
    multiline comment
*/

// ; é opcional 

var user;

console.log(user + 5);

number = 10;

console.log(number);

if (true) {
  var mensagemVar = "Olá";
}

console.log(mensagemVar); // O que aparece aqui?


const minhaFuncao = () => {
  return 'Olá';
};

console.log(minhaFuncao()); // ReferenceError

let x = 5;

console.log(5 - "2")

{ 
function test(text = null) {
  try {
    if (text == null) {
      throw Error("paramentro obrigatorio")
    } else {
      console.log(text)
    }
  } catch (error) {
    console.log(error)
  }
}
}

test("")
test(4)

const frase = "Estudo na Rocketseat"

console.log(frase.includes("Rocketseat"))

const list = ["a"]
list.push("b")

console.log(list)

list.pop()

console.log(list)

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

const date = new Date()
date.setMonth(0)
console.log(date.toLocaleDateString())

class Student {
  get point() {
    return 7
  }
}



let student = new Student()
student.point = 19
console.log(student.point)

"use strict";

function sum(a, a, c) {
  return a + a + c
}

console.log(sum(1, 3, 2))

const data = ["hoff", "email"]

const [name, email] = data

console.log("Nome: ", name)
console.log("email: ", email)

const [_, , position] = data

console.log(position)

const product = {
  description: "desc",
  price: "price"
}

const { description, price } = product

console.log("Desc: ", description)
console.log("Preco: ", price)