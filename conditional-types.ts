type TypeIsNumber<T> = T extends number ? 'yes' : 'no'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>


type TypeBrand = 'BMW' | 'Mercedes' | 'Porsche'
type TypePrice = '$100000' | '$105000' | '$200000'

type TypeCar = `${TypeBrand}, ${TypePrice}`

const car1:TypeCar = 'Porsche, $200000'