import Character_db from "../db/character.db";

class CharacterService{
    async getMany(){
        return await Character_db.getMany()
    }
}

export default CharacterService