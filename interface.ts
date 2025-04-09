interface IUserAge {
    age: number
}

interface IUser extends IUserAge {
    name: string
    email: string
}

const userTwo: IUser = {
    email: 'example@gmail.com',
    name: 'Joe',
    age: 21
}

// const users: IUser[] = [user, {
//     age: 21,
// }]