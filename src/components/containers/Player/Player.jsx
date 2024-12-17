const score1 = 15;
const score2 = 35;

export function Player() {
    return (
        <div>
            <h2>Joueur 1</h2>
            <p>{score1 > 20 ? `Vainqueur avec un score de ${score1}` : `Perdant avec un score de ${score1}`}</p>
            <h2>Joueur 2</h2>
            <p>{score2 > 20 ? `Vainqueur avec un score de ${score2}` : `Perdant avec un score de ${score2}`}</p>
        </div>
    );
}
