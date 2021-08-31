class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;

    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        console.log(target.name,"resilience before:",target.res)
        target.res -=this.power;
        console.log(target.name,"resilience after:",target.res)
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.stat = stat;
        this.text = text;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            switch(this.stat){
                case "power":
                    console.log(target.name,"power before:",target.power)
                    target.power += this.magnitude;
                    console.log(this.text,"on",target.name);
                    console.log(target.name,"power after:",target.power)
                    break;
                case "resilience":
                    console.log(target.name,"resilience before:",target.res)
                    target.res += this.magnitude;
                    console.log(this.text,"on",target.name);
                    console.log(target.name,"resilience after:",target.res)
                    break;
            }
            // implement card text here
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const Rbn = new Unit("Red Belt Ninja",3,3,4);
const Bbn = new Unit("Black Belt Ninja",4,5,4);
const HardAlgo = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
const UnhandledPromise = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const PairProgramming = new Effect("Pair Programming",3,"increase target's power by 2","power",2);
console.log("Round 1")
HardAlgo.play(Rbn);
console.log("Round 2")
UnhandledPromise.play(Rbn);
console.log("Round 3")
PairProgramming.play(Rbn);
Rbn.attack(Bbn);