import { SearchIcon } from "@heroicons/react/outline";
import { FilmIcon } from "@heroicons/react/outline";

import "./index.css";
import { useEffect, useState } from "react";
import { searchMovieTitle } from "api/movieApi";
import EmptyState from "components/EmptyState";
import MovieCard from "components/MovieCard";
import Playlist from "components/Playlist";
import Spinner from "components/Spinner";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (event) => {
    const title = event.target.value;

    try {
      if (title.length > 3) {
        setIsSearching(true);

        const results = await searchMovieTitle(title);

        setIsSearching(false);

        if (results.Search?.length) {
          setSearchResults(results.Search);
        } else {
          setSearchResults([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToPlaylist = (movie) => {
    setPlaylist((prevPlaylist) => {
      const newPlaylist = [...prevPlaylist, movie];

      localStorage.setItem("playlist", JSON.stringify(newPlaylist));

      return newPlaylist;
    });
  };

  const handleRemoveFromPlaylist = (id) => {
    setPlaylist((prevPlaylist) => {
      const newPlaylist = prevPlaylist.filter((movie) => movie.id !== id);

      localStorage.setItem("playlist", JSON.stringify(newPlaylist));

      return newPlaylist;
    });
  };

  useEffect(() => {
    if (localStorage.getItem("playlist")) {
      setPlaylist(JSON.parse(localStorage.getItem("playlist")));
    }
  }, []);

  return (
    <>
      <div className="flex">
        <label
          htmlFor="search-input"
          className="flex items-center bg-gray-900 pl-4"
        >
          <SearchIcon className="h-5 w-5" />
        </label>
        <input
          id="search-input"
          data-testid="search-input"
          className="appearance-none block w-full bg-gray-900 text-gray-100 py-6 px-4 leading-tight focus:outline-none focus:border-gray-500"
          placeholder="Type to search..."
          autoFocus
          onChange={handleSearch}
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-9/12 h-screen p-8 flex">
          {searchResults.length === 0 ? (
            <EmptyState
              icon={
                isSearching ? <Spinner /> : <FilmIcon className="w-24 h-24" />
              }
              heading={isSearching ? "Searching..." : "No movies found"}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {searchResults.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  id={movie.imdbID}
                  title={movie.Title}
                  imageUrl={movie.Poster}
                  onClickAddToPlaylist={handleAddToPlaylist}
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-full p-4 overflow-hidden overflow-x-scroll md:w-3/12 bg-secondary md:min-h-screen flex-1 md:p-8 flex pb-6">
          <Playlist
            onClickRemoveFromPlaylist={handleRemoveFromPlaylist}
            playlist={playlist}
          />
        </div>
      </div>
    </>
  );
}

export default App;
