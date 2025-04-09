export {} // сделали файл модулем чтоб не было ошибок с другими глобальними названиями.

// var 1
// enum EnumRoles {
//     ADMIN, GUEST, USER
// }

// interface IUserRole {
//     role: EnumRoles
// }

// const user: IUserRole = {
//     role: EnumRoles.ADMIN
// }


// var 2
enum EnumRoles {
    ADMIN = 1 , GUEST = 2, USER = 3
}

const enum EnumColors {
    black, pink, green
}

interface IUserColor {
    role: EnumRoles
    color: EnumColors
}

const user: IUserColor = {
    role: EnumRoles.ADMIN,
    color: EnumColors.black
}

console.log(EnumRoles[EnumRoles.ADMIN]);
