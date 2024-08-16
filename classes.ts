// extends

class food {
    price: 1200;

    eat(){
        console.log('eating');
    }
}

class Mithaai extends food {
    name = 'Mitha';
}

let mitha1 = new Mithaai();
mitha1.eat();

