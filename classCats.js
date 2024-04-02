function classCats(input) {
class Cat {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sound(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
for(let i=0; i<input.length; i++){
    let catData=input[i].split(` `);
    let [name, age]=[catData[0],catData[1]];
    let cat= new Cat(name, age);
    cat.sound()
}
    console.log();
}
classCats(['Candy 1', 'Poppy 3', 'Nyx 2']);