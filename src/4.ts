/** @format */

class Key {
  private signature: number;
  constructor(signature = Math.random()) {
    // this.signature = Math.random();
  }

  getSignature(this: Key) {
    console.log(this.signature);
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    console.log(this.key);
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[] = [];

  comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
  abstract OpenDoor(key: Key): void;
}

class MyHouse extends House {
  key: Key;
  OpenDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(person.getKey());

house.comeIn(person);

export {};
