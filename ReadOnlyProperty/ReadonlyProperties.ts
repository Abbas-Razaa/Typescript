class Class1 {
    constructor(public readonly name: string){
        this.name = name;
    }
    getName() { console.log(this.name); }

    setName(name: string){
        this.name = name; // here name cannot be changed because it is readonly
    }
}

let Class2 = new Class1('abbas');
abcd1.getName();
