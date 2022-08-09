import { EnergyType } from '../Energy';
import Archetype from './Archetypes';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _numberOfInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer.addInstance();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static addInstance(): void {
    this._numberOfInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._numberOfInstances;
  }
}