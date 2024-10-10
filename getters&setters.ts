class Abcd {
  constructor(public username: string) {
    this.username = username;
  }

  get name(): string {
    return this.username;
  }

  set name(value: string) {
    this.username = value;
  }
}

let abcd1 = new Abcd("abbas");
abcd1.name = "harshita";
console.log(abcd1.name);
