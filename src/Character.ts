import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy | undefined {
    const objCopy = { type_: this._energy.type_, amount: this._energy.amount };
    return objCopy;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
      if (this._lifePoints < 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = this._strength;

    enemy.receiveDamage(damage);
  }

  generateMaxLifePts(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }  
  }

  levelUp(): void {
    this.generateMaxLifePts();
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const d20Bonus = getRandomInt(1, 20);
    const specialDamage = this._strength + d20Bonus;

    enemy.receiveDamage(specialDamage);
  }
}

// const peu = new Character('Peu');
// const felipe = new Character('Felipe');

// // console.log(peu.lifePoints);
// // peu.receiveDamage(10);
// // console.log(peu.lifePoints);

// // console.log(felipe.lifePoints);

// // peu.attack(felipe);

// // console.log(felipe.lifePoints);

// peu.special(felipe);
// console.log(felipe.lifePoints);
