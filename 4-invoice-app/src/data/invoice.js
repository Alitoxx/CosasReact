export const invoice = {
    id:10,
    name:'Componentes PC',
    client: {
        name: 'Pepe',
        lastName: 'Doe',
        address:{
            country: 'Chile',
            city: 'Talca',
            street: 'Calle 23 Norte 4116 Casa 2',
            number: 12
        },
    },
    company: {
        name: 'ClaudHolden',
        fiscalNumber: 1234567
    },
    items: [
        {
            id:1,
            product: 'CPU AMD',
            price : 499,
            quantity:1,    
        },
        {
            id:2,
            product: 'Corsair Keyboard Mecanico',
            price : 150,
            quantity:1,
        },
        {
            id:3,
            product: 'Monitor Asus',
            price : 350,
            quantity:1,
        },
    ]
}