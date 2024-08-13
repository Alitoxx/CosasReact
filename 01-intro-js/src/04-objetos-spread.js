
//la funcion se puede declar como function o =>
/*
const sayHello =  (name = 'Angel', age = 0 ) => {
    const greeting = (`Hola Mundo Function!!! ${name} edad ${age} `);
    //console.log ('Hola Mundo Function!!!');

    return greeting;

}
*/
 
// es mas simple es lo mismo que se hace arriba
const sayHello =  (name = 'Angel', age = 0 ) => (`Hola Mundo Function!!! ${name} edad ${age} `);
const add =  (a = 0, b=0) => a + b;
 
const resultado = sayHello('Alexis', 38);
console.log(resultado);

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 2,
        name: 'Jhon',
        lastName: 'Angel',
        age: 20, 
    },
    items: [
        {
            producto: 'keyboard',
            price: 400,
            quantity: 1,
        },
        {
            producto: 'mouse',
            price: 10000,
            quantity: 1,
        },
        {
            producto: 'paper',
            price: 399,
            quantity: 2,
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach( item => {
            total = total + item.price * item.quantity
        });

        return total;

    },
    greeting: function(){
        return `Hola ${this.client.name}`;
    }
};


//const invoice2 = invoice;
const invoice2 = { ...invoice};
const result = invoice === invoice2;

if (result) {
    console.log(result);
}else{
    console.log ('no son iguales');  
} 
console.log(result);
