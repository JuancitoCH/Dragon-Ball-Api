import { Prisma } from "@prisma/client";
import PrismaCL from "../config/db";
import CharacterInterface,{CharacterOptional} from '../interfaces/character.interface'

// Abstraction layer of the ORM
const Character_db = {
    async getMany(filter:Prisma.CharacterWhereInput ={}){
        const response = await PrismaCL.character.findMany({
            where:{
                ...filter
            }
        })
        return response as Array<CharacterInterface>
    },
    async getOne(filter:CharacterOptional){
        const response = await PrismaCL.character.findFirst({
            where:{
                ...filter as Prisma.CharacterWhereInput
            }
        })
        return response as CharacterInterface
    },
    async create(character:CharacterInterface){
        const response = await PrismaCL.character.create({
            data:{
               ...character as Prisma.CharacterCreateInput
            }
        })
        return response as CharacterInterface
    },
    async delete(id:string){
        const response = await PrismaCL.character.delete({
            where:{
                id
            }
        })
        return response as CharacterInterface
    },
}

export default Character_db