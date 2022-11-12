interface Character{
    // Objects ids?
    id?:String,
    name:String,
    lastname?:String,
    heigth?:Number,
    images:Array<String>,
    // raza, buscar english
    raze:String,
    // nacimiento, buscar english
    nacimiento:String,
    transformations?:Array<String>
}

export default Character
