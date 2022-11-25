import Character_db from "../db/character.db";
import Error_throws from "../helpers/error.throws";
import CharacterInterface,{CharacterOptional} from '../interfaces/character.interface'

class CharacterService{
    async getMany(){
        return await Character_db.getMany()
    }
    async create(character:CharacterInterface){
        this.validator_fields(character)
        this.validator_types(character)
        const chaAlready = await this.getOne({name: character.name } as CharacterOptional)
        if(chaAlready){
         Error_throws.validation("Invalid Character: Character Already Exist")
        }
        return await Character_db.create(character)
    }
    async getOne(characterFilter:CharacterOptional){
        return await Character_db.getOne(characterFilter)
    }
    
    validator_fields(character:CharacterInterface){
        if(!character.name || !character.lastname || !character.birth || !character.race || !character.images ){
         Error_throws.validation("Invalid Character: Fields: name, lastname,birth,race and images must be provided")
        }
    }
    validator_types(character:CharacterInterface){
        let validate = true
        if(typeof character.name!=="string") validate = false
        if(typeof character.lastname!=="string") validate = false
        if(typeof character.birth!=="string") validate = false
        if(typeof character.race!=="string") validate = false
        if(typeof character.heigth!=="number") validate = false

        if(!Array.isArray(character.images)) validate = false
        else if(character.images.length>1 ){
            character.images.forEach(url => {
                if(typeof url !=="string") validate  = false
            });
        }
        if( character.transformations !==undefined ) {
            if(Array.isArray(character.transformations)){
                if(character.transformations.length>1 ){
                    character.transformations.forEach(url => {
                        if(typeof url !=="string") validate  = false
                    });
                }
            }
        }
        if(!validate){
         Error_throws.validation("Invalid Character: Invalid Types : name:String, lastname:?String, birth:String, race:String, images:String[], transformations:?String[], height:?number")
        }
    }
}

export default CharacterService