let Personne = function (nom, prenom, age, sex) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sex = sex;

    this.getIdentity = function () {
        return this.nom + " " + this.prenom + " a " + this.age + " et est un/une " + this.sex;
    }

    this.getChange = function (nom, prenom) {
        return (this.nom = nom) && (this.prenom = prenom);
    }

}

let dada = new Personne("Olivier", "DaDa", "21 ans", "male");
let geralt = new Personne("DeRiv", "Geralt", "72 ans", "male");
let yennefer = new Personne("DeVegenberg", "Yennefer", "36 ans", "femelle");
let jaskier = new Personne("Barde", "Jaskier", "35 ans", "male");
let triss = new Personne("Merigold", "Triss", "35 ans", "femelle");

let array = [dada, geralt, yennefer, jaskier, triss];

let classe = {
    perso: [dada, geralt, yennefer, jaskier, triss],
}

for(let x = 0; x < classe.perso.length; x++) {
    let div = document.createElement("div");
    document.body.append(div);
    div.innerHTML = classe.perso[x].getIdentity();
}