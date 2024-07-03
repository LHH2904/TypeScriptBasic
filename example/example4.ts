class Animal {
    constructor(public species: string, public sound: string) {}

    makeSound(): void {
        console.log(`${this.species} makes sound: ${this.sound}`);
    }
}

class Dog extends Animal {
    constructor() {
        super("Dog", "Gâu Gâu");
    }

    wagTail(): void {
        console.log("Chó vẫy đuôi.");
    }
}

class Cat extends Animal {
    constructor() {
        super("Cat", "meo meo");
    }

    purr(): void {
        console.log("Cat cào.");
    }
}

class Bird extends Animal {
    constructor() {
        super("Bird", "hót líu lo");
    }

    fly(): void {
        console.log("Bird bay trên trời.");
    }
}

// Sử dụng các lớp đã định nghĩa
const dog = new Dog();
dog.makeSound();
dog.wagTail();

const cat = new Cat();
cat.makeSound();
cat.purr();

const bird = new Bird();
bird.makeSound();
bird.fly();