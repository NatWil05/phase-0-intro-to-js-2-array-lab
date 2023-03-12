const cats = ["Milo", "Otis", "Garfield",]
    function destructivelyAppendCat(name) {
        cats.push("Ralph")
    }
    function destructivelyPrependCat(name) {
        cats.unshift("Bob")
    }
    function destructivelyRemoveLastCat(name) {
        cats.pop("Ralph")
    }
    function destructivelyRemoveFirstCat(name) {
        cats.shift("Bob")
    }

    function appendCat(name) {
        const newCats = [...cats]
        newCats.push("Broom")
        return newCats
    }
    function prependCat(name) {
        const newCats = [...cats]
        newCats.unshift("Arnold")
        return newCats
    }

    function removeLastCat() {
        const copyOfCats = cats.slice()
        copyOfCats.pop()
        return copyOfCats
    }

    function removeFirstCat() {
        const copyOfCats = cats.slice()
        copyOfCats.shift()
        return copyOfCats
    }