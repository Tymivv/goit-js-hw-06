class Hero {
  #exp = 0;
  #name;
  #level = 1;
  #baseHP;
  #baseMP;
  #HP;
  #MP;
  constructor({ name, HP, MP, attack }) {
    this.#name = name;
    this.HP = HP;
    this.MP = MP;
    this.#baseHP = HP;
    this.#baseMP = MP;
    this.attack = attack;
  }
  get HP() {
    return this.#HP;
  }
  set HP(value) {
    this.#HP = value;
  }
  get MP() {
    return this.#MP;
  }
  set MP(value) {
    this.#MP = value;
  }
  get name() {
    return this.#name;
  }
}
class Orc extends Hero {
  constructor(name) {
    super({
      name,
      HP: 3000,
      MP: 1200,
      attack: new Attack({ dmg: 55, manaCost: 70 }),
    });
  }
}
class Elf extends Hero {
  constructor(name) {
    super({
      name,
      HP: 1500,
      MP: 3000,
      attack: new Attack({ dmg: 100, manaCost: 200 }),
    });
  }
}
class Human extends Hero {
  constructor(name) {
    super({
      name,
      HP: 2000,
      MP: 1700,
      attack: new Attack({ dmg: 70, manaCost: 100 }),
    });
  }
}
class Attack {
  constructor({ dmg, manaCost }) {
    this.dmg = dmg;
    this.manaCost = manaCost;
  }
}
const orc = new Orc("Rexar");
console.log(orc);
const elf = new Elf("Galandriel");
console.log(elf);
const human = new Human("Bill");
console.log(human);













