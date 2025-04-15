import { Pokemon } from '../types/pokemon';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="pokemon-card">
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="pokemon-image"
      />
      <div className="pokemon-info">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <div className="pokemon-types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={`type-badge ${type.type.name}`}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};