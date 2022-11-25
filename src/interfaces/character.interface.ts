interface Character{
    // Objects ids?
    id?:String,
    name:String,
    lastname?:String,
    heigth?:Number,
    images:Array<String>,
    // raza, buscar english
    race:String,
    // nacimiento, buscar english
    birth:String,
    transformations?:Array<String>
}
interface CharacterOptional{
    // Objects ids?
    id?:String,
    name?:String,
    lastname?:String,
    heigth?:Number,
    images?:Array<String>,
    // raza, buscar english
    race?:String,
    // nacimiento, buscar english
    birth?:String,
    transformations?:Array<String>
}
export default Character
export {CharacterOptional}
