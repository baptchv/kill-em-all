class GoodGuy {
  constructor(name, pos) {
    this.name = name || 'BarMan'; // En vrai on s'en bat un peu les couilles
    this.pos = pos || 'Dans ton cul';
    // Verifier que c'est une pos valide ?
    // Pos aléatoire ?
    this.point = 0;
  }
}

//Getters

// request dans la base ?

//Setters

//GoodGuy(foo1,foo2);
//TODO Reqête vers la base ?
// Ecriture dans la base

module.exports = {GoodGuy};
