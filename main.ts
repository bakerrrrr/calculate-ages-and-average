let totalAge = 0
scene.setBackgroundColor(3)
let ages = [
15,
15,
15,
16,
16,
18,
20,
20
]
ages.forEach(age => {
    totalAge += age;
});
game.splash("Total age:", totalAge)
game.splash("Average age (rounded):", Math.round(totalAge / ages.length))
game.reset()
