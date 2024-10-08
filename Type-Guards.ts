// Type Guards and Typescript utilities Types
// Using typeof and instanceof
// partial, required, Readonly

// type guards -> type narrowing
function TypeGuard(arg: string | number | any) {
    if (typeof arg === 'number') {
        return 'number';
    } else if (typeof arg === 'string') {
        return 'string';
    } else {
        throw new Error('Invalid Argument');
    }
}

console.log(TypeGuard(10)); // number
console.log(TypeGuard('Hello')); // string
console.log(TypeGuard(true)); // Error


// instanceof -> instance narrowing
class TVremote{
    switchTVoff() {
        console.log('Switched off tv');
    }
}

class CarRemote{
    switchCaroff() {
        console.log('Switched off car');
    }
}

const tv = new TVremote();
const car = new CarRemote();

function switchoff(device: TVremote | CarRemote) {
    if (device instanceof TVremote) {
        device.switchTVoff();
    } else {
        device.switchCaroff();
    }
}
