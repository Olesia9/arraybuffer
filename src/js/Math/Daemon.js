import Character, { CharacterTypes } from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name, CharacterTypes.DAEMON);
  }
}
