export class Skills {
  public description!: string;
  public id!: number;
  public level!: number;
  public modifiers!: object;
  public skill!: number;
  public skillName!: string;

  constructor() {}
}
export class weaponElements {
  public type!: string;
  public damage!: number;
  public hidden!: boolean;
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
  public elements!: weaponElements[];
  constructor() {}
}

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
  public skills!: Skills[];
  public armorSet!: object;
  public crafting!: object;

  constructor() {}
}

export class Armorsets {
  public id!: number;
  public name!: string;
  public rank!: string;
  public pieces!: Armor[];
  public bonus!: object;

  constructor() {}
}

export class Monster {
  public id!: number;
  public name!: string;
  public type!: string;
  public species!: string;
  public descrip!: string;
  public elements!: string[];
  public ailments!: Ailments[];
  public locations!: Locations[];
  public resis!: MonsterResis[];
  public weak!: MonsterWeak[];
  public rewards!: object[];

  constructor() {}
}

export class Ailments {
  public id!: number;
  public name!: string;
  public descrip!: string;
  public protection!: object;
  public recovery!: object;

  constructor() {}
}

export class Locations {
  public id!: number;
  public name!: string;
  public zones!: number;

  constructor() {}
}

export class MonsterResis {
  public condition!: string;
  public element!: string;

  constructor() {}
}

export class MonsterWeak {
  public condition!: string;
  public element!: string;
  public stars!: number;

  constructor() {}
}
