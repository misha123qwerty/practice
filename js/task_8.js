function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function() { self._enabled = true; };
    this.disable = function() { self._enabled = false; };
}

class Fridge extends Machine {
    #food = [];
    #freePlace = this._power / 100;


    addFood() {
        if (this._enabled && this.#freePlace >= arguments.length) {
            for (let i = 0; i < arguments.length; i++) {
                this.#food.push(arguments[i]);
                this.#freePlace--;
                alert("Added " + arguments[i]);
            }

        } else {
            alert("Impossible to add!");
        }
    }

    getFood() {
        return this.#food.slice();
    }

}

var m = new Fridge(500);
m.addFood("asdnajsn");
m.enable();
m.addFood("12");
m.addFood("13");
m.addFood("14", "15");
m.addFood("3221", "abcd");
alert(m.getFood());
