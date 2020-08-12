import { Sysinfo } from '../model/sysinfo';

export class Forecast{
  public coord!: object;
  public weather!: object[];
  public temp!: object;
  public wind!: object;
  public cloud!: object;
  public sys!: Sysinfo;
  public id!: number;
  public name!: string;
  public dt_text!: string;

  constructor(){}
}
