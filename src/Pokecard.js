import React, {Component} from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num); // 3 => 3 <= 999 ? `003`.slice(-3) 003

class Pokecard extends React.Component {
    render() {
        let img = `${POKE_API}${padToThree(this.props.id)}.png`
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={img} alt={this.props.name} />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">>Exp: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;