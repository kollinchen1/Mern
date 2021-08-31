
class Ninja{
    constructor(name,health){
        this.health = health;
        this.name = name;
        this.speed = 3;
        this.strengh = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Name:",this.name)
        console.log("Strength:",this.strengh)
        console.log("Speed:",this.speed)
        console.log("Health:",this.health)
    }
    drinkSake(){
        console.log("DRINK UP!!")
        this.health+=10;
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strengh = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    

}


// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();

// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// const ninja1 = new Ninja("Hyabusa",100);
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();
// ninja1.drinkSake();
// ninja1.showStats();