/** @format */

class MineSweeper {
  qutular = document.querySelectorAll(".box");
  minalar = [];
  oyunBitib = false;
  count = 0;

  constructor() {
    this.minalariDuz();
    this.minalarinSayiniGoster();
    this.qutulaClickleriYapishdir();
  }

  minalariDuz() {
    for (let i = 0; i < this.qutular.length; i++) {
      const tesadufiMina = Math.round(Math.random()) === 1;
      this.minalar.push(tesadufiMina);
    }
  }

  minalarinSayiniGoster() {
    document.querySelector("#say").innerHTML = this.minalar.filter(
      (x) => x
    ).length;

    document.querySelector("#temiz-say").innerHTML = this.minalar.filter(
      (x) => !x
    ).length;
  }

  qutulaClickleriYapishdir() {
    for (let i = 0; i < this.qutular.length; i++) {
      const qutu = this.qutular[i];

      qutu.addEventListener("click", (e) => {
        if (this.oyunBitib) {
          alert(`Game Over:score ${this.count}`);
          return;
        }
        if (this.minalar[i]) {
          e.target.classList.add("qirmizi");
          this.oyunBitib = true;
        } else if (!e.target.classList.contains("yashil")) {
          e.target.classList.add("yashil");
          this.count++;
        }
      });
    }
  }
}

let game = new MineSweeper();
