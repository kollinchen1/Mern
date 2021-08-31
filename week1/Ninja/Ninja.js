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

const ninja1 = new Ninja("Hyabusa",100);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();