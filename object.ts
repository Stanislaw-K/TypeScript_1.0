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