import { usePokemon } from './hooks/usePokemon';
import { PokemonCard } from './components/PokemonCard';
import './styles/pokemon.css';

function App() {
  const { pokemons, loading, error, searchTerm, setSearchTerm } = usePokemon();

  return (
    <div className="pokemon-container">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <div className="loading">Loading Pokemon...</div>}
      {error && <div className="error">{error}</div>}
      
      <div className="pokemon-grid">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
