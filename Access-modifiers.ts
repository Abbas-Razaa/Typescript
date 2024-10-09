// private

// class User1 {
//     private balance = 1200;

//     getBalance() {
//         console.log(this.balance);
//     }
// }

// let u1 = new User1;

// protected
// can be used in its class and its extended class

class user2 {
  protected balance = 1200;
}

class Admin extends user2 {
  private isAdmin = true;
  getBalance() {
    this.balance;
  }
}

let a1 = new Admin();
