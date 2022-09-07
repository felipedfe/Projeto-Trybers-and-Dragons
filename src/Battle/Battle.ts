import { SimpleFighter } from '../Fighter';

abstract class Battle {
  constructor(protected player: SimpleFighter) { }

  fight(): number {
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default Battle;
