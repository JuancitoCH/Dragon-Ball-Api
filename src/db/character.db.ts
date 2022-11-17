import { Prisma } from "@prisma/client";
import PrismaCL from "../config/db";
import Character from "../interfaces/character.interface";


const Character_db = {
    async getMany(filter:Prisma.CharacterWhereInput ={}){
        const response = await PrismaCL.character.findMany({
            where:{
                ...filter
            }
        })
        return response as Array<Character>
    },
}

export default Character_db