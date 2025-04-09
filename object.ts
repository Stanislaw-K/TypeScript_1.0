type TypeUser = {
    name: string
    age: number
}

type TypeAddress = {
city: string
country: string
}

const user:TypeUser = {
    age: 22,
    name: 'St'
}

const address: TypeAddress = {
    city: 'WRO',
    country: 'Pl'
}

let common: TypeUser & TypeAddress

common = {
    ...user,
    ...address
}


type TypePerson = { 
    age: number
}

type TypeUserPerson = {
    name: string
    email: string
} & TypePerson

const userPerson: TypeUserPerson = {
    email: 'example@gmail.com',
    name: 'Joe',
    age: 21
}