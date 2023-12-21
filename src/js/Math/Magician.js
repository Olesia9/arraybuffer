import Character, { CharacterTypes } from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name, CharacterTypes.MAGICIAN);
  }
}
