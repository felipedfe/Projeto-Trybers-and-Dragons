import Character from '../Character';
import { SimpleFighter } from '../Fighter';
import Battle from './Battle';
import getRandomInt from '../utils';

export default class PVP extends Battle {
  private _char1: SimpleFighter;
  private _char2: SimpleFighter;

  constructor(char1: SimpleFighter, char2: SimpleFighter) {
    super(char1);
    this._char1 = char1;
    this._char2 = char2;
  }

  fight(): number {
    let fightRound = true;
    let diceRoll = 0;

    while (fightRound) {
      diceRoll = getRandomInt(1, 10);
      this.player.attack(this._char2);
      this.player.lifePoints -= diceRoll;
      console.log(`life pts: ${this._char2.lifePoints}`);
  
      diceRoll = getRandomInt(1, 10);
      this._char2.attack(this.player);
      this._char2.lifePoints -= diceRoll;
      console.log(`life pts: ${this.player.lifePoints}`);

      console.log('--------------');
      if (this.player.lifePoints <= 0 || this._char2.lifePoints <= 0) {
        fightRound = false;
      }
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }

  fightResult(): void {
    const result = this.fight();
    if (result === 1) {
      console.log('Player venceu!'); 
    } else {
      console.log('Player perdeu!');
    }
  }
}

/// ////////////

const p1 = new Character('Virginia');
const p2 = new Character('Felipe');

const briga = new PVP(p1, p2);

briga.fightResult();
