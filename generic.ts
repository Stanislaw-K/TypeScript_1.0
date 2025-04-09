function entity <T>(args: T): T {
    return args
}

entity<number>(1)
entity<string>('1')

// стрелочная функция
const entity2 = <T>(args: T): T => {
    return args
}

entity2<number>(1)
entity2<string>('1')

// generic class
class Channel<T> {
    private name: T

    constructor(name: T){
        this.name = name
    }

    getName():T {
        return this.name
    }
}

new Channel<string>('Hello World')
new Channel<number>(1)


// generic interface
interface IPair <K, V> {
    key: K
    value: V
}

const pair1: IPair<string, number> = {
    key: '1',
    value: 1
}

const pair2: IPair<string, string> = {
    key: '1',
    value: '1'
}


type TypeLength = {
    length: number
    // name: string
}

function getNameLength<T extends TypeLength>(entity: T): number {
    return entity.length
}

getNameLength('qwerty')
getNameLength([0, 1, 2])