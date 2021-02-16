export class Armor {
  public id!: number;
  public slug!: string;
  public name!: string;
  public type!: string;
  public rank!: string;
  public rarity!: number;
  public defense!: object;
  public resistances!: object;
  public slots!: object[];
  public attrib!: object;
  public skills!: object[];
  public armorSet!: object;
  public assets!: object;
  public crafting!: object;

  constructor() {}
}

export class Armorsets {
  public id!: number;
  public name!: string;
  public rank!: string;
  public pieces!: object[];
  public bonus!: object;

  constructor() {}
}

export class Monster {
  public id!: number;
  public name!: string;
  public type!: string;
  public species!: string;
  public descrip!: string;
  public elements!: [];
  public ailments!: object[];
  public locations!: object[];
  public resis!: object[];
  public weak!: object[];
  public rewards!: object[];

  constructor() {}
}

export class Weapons {
  public id!: number;
  public name!: string;
  public type!: string;
  public rarity!: number;
  public attack!: object;
  public elderseal!: any;
  public attributes!: object;
  public damageType!: string;
  public durability!: object[];
  public slots!: object[];
  public crafting!: object;
  public craftingMat!: object[];
  public upgradeMat!: object[];
  public assets!: object;

  constructor() {}
}
