import Character_db from "../db/character.db";
import Error_throws from "../helpers/error.throws";
import { Response_Format } from "../helpers/response.forms";
import CharacterInterface from '../interfaces/character.interface'

class CharacterService{
    async getMany(){
        return await Character_db.getMany()
    }
    async create(character:CharacterInterface){
        this.validator_fields(character)
        return await Character_db.create(character)
    }
    validator_fields(character:CharacterInterface){
        if(!character.name || !character.lastname || !character.birth || !character.race || !character.images ){
         Error_throws.validation("Invalid Character: Fields: name, lastname,birth,race and images must be provided")
        }
        // TODO Validate Types
    }
}

export default CharacterService