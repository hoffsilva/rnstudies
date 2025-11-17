class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sendMessage(message) {
        console.log(`${this.name} says: ${message}`);
    }
}


let user = new User("John Doe", 30);

user.sendMessage("Hello World! As");

/*
Configuracao base babel:

no terminal: node_modules/.bin/babel main.js --out-dir dist

arquivo.js: é o arquivo que o babel irá transpilar, e dist é a pasta onde ele irá gerar o código transpilado.

lembrando que o arquivo de saida vai ter o mesmo nome do arquivo de entrada, mas com extensão.js.


*/
