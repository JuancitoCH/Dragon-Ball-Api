import {Request,Response,Router, NextFunction} from 'express'
import { Response_Format } from '../helpers/response.forms'
import Character from  '../interfaces/character.interface'
import CharacterService from '../services/character'
const characterService = new CharacterService()

const Characters_Controller={
    async getAll(req:Request,res:Response,next:NextFunction){
        try{
            const object: Character[] = await characterService.getMany()
            Response_Format.OK(res,object)
        }catch(e){ next(e) }
    },
    async createCharacter(req:Request,res:Response,next:NextFunction){
        try{
            const object: Character = await characterService.create(req.body)
            Response_Format.Create(res,object)
        }catch(e){ next(e) }
    },
}

export default Characters_Controller