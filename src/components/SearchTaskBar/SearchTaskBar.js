import PropTypes from 'prop-types';
import './styles.scss';

function SearchTaskBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      className="searchBar"
      placeholder="Recherchez une tâche..."
      value={searchQuery}
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
}

SearchTaskBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default SearchTaskBar;
