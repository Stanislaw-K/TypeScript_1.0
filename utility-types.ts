// Вспомагательные типы (Utility types)

// Pick<T, K> – создаёт тип, выбирая из T только указанные свойства K.
// Omit<T, K> – создаёт тип, исключая из T указанные свойства K.
// Partial<T> – делает все свойства T необязательными (?).

// Required<T> – делает все свойства обязательными.
// Readonly<T> – делает все свойства доступными только для чтения.
// Record<K, T> – создаёт тип с ключами K и значениями T.
// Exclude<T, U> и Extract<T, U> – работают с объединениями (union types).

interface ICar {
    id: number
    name: string
    price: number
    yearBuild: number
}

interface ICarCreate extends Omit<ICar, 'id'> {}
// const car: ICarCreate = {
    
// }

interface ICarId extends Pick<ICar, 'id'> {}
// const car: ICarId = {
    
// }

interface IOptionalCar extends Partial<ICar> {}
// const car: IOptionalCar = {
    
// }

interface IReadOnlyCar extends Readonly<ICar> {}
// const car: IReadOnlyCar = {
    
// }

type TypeCarRecord = Record<'name' | 'price', string | number>
// const car: TypeCarRecord = {
    
// }

interface ICar1 {
    id?: number
    name?: string
    price?: number
    yearBuild?: number
}

interface IRequiredCar extends Required<ICar1> {}
// const car: IRequiredCar = {
    
// }

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>


type Any = Extract<'anna' | 'katty', 'katty' | 'scarlett'>
type Any1 = Exclude<'anna' | 'katty', 'katty' | 'scarlett'>
type NotNull = NonNullable<string | number | null | undefined> // deleted all null and undefined
