const weeblesTheDog = {
    name: "Weebles",
    species: "pug",
    nicknames: ["Weebs", "Weebles P. Jenkins", "Weeblo", "Peebles"],
    age: 12,
    bark: function (something) {
        window.alert(`Weebles barks woof at the ${something}`)
    },
    pant: function () {
        window.alert("heavy breathing intensifies 🐶🌬")
    },
    eat: function (food) {
        window.alert(`Weebles ate all the ${food}`)
    },
    favoriteToys: [],
    play: function (toy) {
        if (toy.includes("ball"))
        this.favoriteToys.push(toy)
        }
    }


weeblesTheDog.bark("cat🐱")
weeblesTheDog.pant()
weeblesTheDog.eat("hot dogs 🌭")
weeblesTheDog.play("rope")
weeblesTheDog.play("tennis ball")

console.log(weeblesTheDog)