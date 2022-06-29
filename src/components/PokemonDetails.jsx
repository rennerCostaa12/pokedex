import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { getPokemon } from "../config/configApi";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/PokemonDetails.css';

export default function PokemonDetails() {
    const { pokemon_name } = useParams();
    const dataPokemon = getPokemon(pokemon_name);

    const [namePokemon, setNamePokemon] = useState('');
    const [imageSource, setImageSource] = useState('');
    const [idPokemon, setIdPokemon] = useState(0);
    const [heightPokemon, setHeightPokemon] = useState(0);
    const [weightPokemon, setWeightPokemon] = useState(0);
    const [typesPokemon, setTypesPokemon] = useState([]);
    const [attributesPokemon, setAttributesPokemon] = useState([]);
    const [abilitiesPokemon, setAbililitesPokemon] = useState([]);

    dataPokemon.then(response => {
        setNamePokemon(response.name);
        setImageSource(response.sprites.other["official-artwork"].front_default);
        setWeightPokemon(response.weight);
        setHeightPokemon(response.height);
        setIdPokemon(response.id);
        setTypesPokemon(response.types);
        setAbililitesPokemon(response.abilities);
        setAttributesPokemon(response.stats);
    })

    return (
        <div className="container-pokemon-details">
            <div className="content-pokemon">
                <h1 style={{ textAlign: "center", fontSize: "40px" }}>
                    {namePokemon.toUpperCase()}
                </h1>

                <div className="header-detail">
                    <Link className="link-back" to="/">Voltar</Link>
                </div>

                <div className="container-content-pokemon">
                    <div className="content-pokemon-details">
                        <div className="content-img-pokemon">
                            <img src={imageSource} alt={`Image ${namePokemon}`} />
                        </div>

                        <div className="content-informations-pokemon">
                            <div>
                                <h1 style={{ textAlign: "center" }}>ID: {idPokemon}</h1>

                                <div className="content-informations">
                                    <div className="height-pokemon">
                                        <h4>Altura:</h4>
                                        <div>
                                            <span>{heightPokemon}</span>
                                        </div>
                                    </div>
                                    <div className="weight-pokemon">
                                        <h4>Peso:</h4>
                                        <div>
                                            <span>{weightPokemon}</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="content-types">
                                    <div className="types-pokemon">
                                        <h4>Tipos:</h4>
                                        {typesPokemon.map((value, key) => {
                                            return (
                                                <div key={key} style={{ display: "inline-block" }}>
                                                    <span>{value.type.name}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="content-abilities">
                                    <h3>Habilidades</h3>
                                    <div>
                                        {abilitiesPokemon.map((value, key) => {
                                            return (
                                                <div className="abilities" key={key}>{value.ability.name}</div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-attributes">
                    {attributesPokemon.map((value, key) => {
                        return (
                            <>
                                <div key={key} style={{ width: 150, height: 150 }}>
                                    <CircularProgressbar
                                        value={value.base_stat}
                                        text={value.base_stat}
                                        styles={buildStyles({
                                            textSize: '18px',
                                            textColor: '#EA580B',
                                            trailColor: '#a5a5a5',
                                            pathColor: '#EA580B',
                                        })}
                                    />
                                    <h3>
                                        {value.stat.name}
                                    </h3>
                                </div>
                            </>
                        )
                    })}
                </div>

            </div>
        </div >
    )
}