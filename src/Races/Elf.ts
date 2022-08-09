import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _numberOfInstances = 0;

  constructor(nam: string, dex: number) {
    super(nam, dex);
    this._name = nam;
    this._dexterity = dex;
    this._maxLifePoints = 99;
    Elf.addInstance();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addInstance(): void {
    this._numberOfInstances += 1;
  }

  static createdRacesInstances():number {
    return this._numberOfInstances;
  }
}