import PropTypes from "prop-types";

const noImageUrl = "https://via.placeholder.com/400x600.png?text=No+poster";

const PlaylistCard = ({ imageUrl, title, id, onClickRemoveFromPlaylist }) => {
  return (
    <div
      data-testid="playlist-card"
      className="md:w-full w-80 h-24 bg-gray-900 rounded-lg flex flex-row md:mb-8 shadow mr-4 md:mr-0"
    >
      <div className="w-full md:w-20 h-full">
        <img
          className="object-center object-cover w-full h-full rounded"
          src={imageUrl === "N/A" ? noImageUrl : imageUrl}
          alt={title}
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-4 space-y-2 flex justify-center flex-col">
        <p className="text-sm text-gray-100">{title}</p>
        <a
          data-testid="remove-from-playlist"
          onClick={() => onClickRemoveFromPlaylist(id)}
          className="cursor-pointer text-xs text-red-300 no-underline hover:underline"
        >
          Remove from playlist
        </a>
      </div>
    </div>
  );
};

PlaylistCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClickRemoveFromPlaylist: PropTypes.func.isRequired,
};

export default PlaylistCard;
