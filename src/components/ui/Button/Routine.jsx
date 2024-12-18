import PropTypes from "prop-types";

BoutonRoutine.propTypes = {
    couleur: PropTypes.string,
    children: PropTypes.node.isRequired,
    gereClique: PropTypes.func.isRequired
}

export  function BoutonRoutine({ couleur, children, gereClique }) {

    return (
        <button
            onClick={gereClique}
            className="b-none p-2 rounded hover:opacity-75 transition"
            style={{backgroundColor: couleur ? couleur : "black"}}
        >
            {children}
        </button>
    )
}