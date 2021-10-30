import { useState } from 'react';
import PropTypes from 'prop-types';
import { PlusIcon } from "@heroicons/react/outline";

const noImageUrl = 'https://via.placeholder.com/400x600.png?text=No+poster';

const MovieCard = ({ imageUrl, title, id, onClickAddToPlaylist }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div data-testid="movie-card" className="rounded shadow-lg my-2 bg-gray-900 flex flex-col relative" style={{ maxHeight: 600 }}>
      {showConfirmation && (
        <div className="w-full h-full absolute bg-gray-900 rounded flex justify-center items-center flex-col">
          <p className="font-bold text-lg">Confirm add movie to playlist?</p>
          <button
            data-testid="add-to-playlist-confirm"
            onClick={() => {
              onClickAddToPlaylist({ title, imageUrl, id })
              setShowConfirmation(false);
            }}
            className="mt-4 bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add to playlist
          </button>
          <button
            data-testid="add-to-playlist-cancel"
            onClick={() => setShowConfirmation(false)}
            className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            Cancel
          </button>
          <div className="bg-purple-300 p-2 w-full absolute bottom-0 rounded-b">My favorite color is Purple</div>
        </div>
        )}
      <img className="w-full h-96 object-cover rounded" src={imageUrl === 'N/A' ? noImageUrl : imageUrl} alt={title} />
      <div className="p-4 flex flex-col flex-1 justify-between">
        <span className="text-xl mb-2">{title}</span>
        <button
          data-testid="add-to-playlist"
          onClick={() => setShowConfirmation(true)}
          className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add to playlist
        </button>
      </div>
    </div>
    );
};

MovieCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickAddToPlaylist: PropTypes.func.isRequired,
};

export default MovieCard;
