class Car {
    name: string
    price: number

    constructor(name: string, price: number) {
        this.name = name
        this.price = price
    }

    getInfo(): string {
        return `${this.name} - ${this.price}`
    }
}

new Car('BMW', 100000).getInfo()


class Bus extends Car{
    constructor(name: string, price: number) {
        super(name, price)
    }

    test() {
        return this.getInfo()
    }
}

// public   - доступен всем
// private || #   - работает внутри класса
// protected   - работает как и private но еще его можно вызывать в другом классе который экстендится в от текущего класса