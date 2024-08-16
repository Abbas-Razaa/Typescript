class User {
    constructor(public name: string, public email: string, public password: string, public image: string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.image = image;
    }
}

// constructor will be called first when class is called.