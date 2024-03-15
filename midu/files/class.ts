interface Avenger {
    name: string
    powerScore: number
    wonBattles: number
    age: number
    battle: (enemy: Avenger, win: boolean) => Avenger
}

class AvengerHero implements Avenger {
    name: string
    // #powerScore: number => es privada
    powerScore: number
    wonBattles: number = 0
    age: number

    constructor(name: string, powerScore: number, age: number) {
        this.name = name
        this.powerScore = powerScore
        this.age = age
    }

    battle(enemy: Avenger, win: boolean) {
        if (win) {
            this.wonBattles++
            this.powerScore += 5
        } else {
            this.powerScore -= 5
        }

        return enemy
    }

    get fullName() {
        return `${this.name}, de poder ${this.powerScore}`
    }

    set power(newPower: number) {
        if (newPower <= 100) this.powerScore = newPower
        else throw new Error('El poder no puede ser mas de 100')
    }
}

const spidey = new AvengerHero('Spider-Man', 15, 25)
// spidey.name = 'Hulk' => no por readonly