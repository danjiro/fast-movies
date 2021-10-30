import PropTypes from "prop-types";
import { CollectionIcon } from "@heroicons/react/outline";

import PlaylistCard from "components/PlaylistCard";
import EmptyState from "components/EmptyState";

const Playlist = ({ playlist, onClickRemoveFromPlaylist }) => {
  return playlist.length === 0 ? (
    <EmptyState
      icon={<CollectionIcon className="w-24 h-24" />}
      heading="Your playlist is empty"
    />
  ) : (
    <div className="flex flex-col md:flex-1">
      <h3 className="font-bold text-lg text-gray-400 mb-4">Your playlist</h3>
      <div className="flex md:flex-col">
        {playlist.map((movie) => (
          <PlaylistCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            imageUrl={movie.imageUrl}
            onClickRemoveFromPlaylist={onClickRemoveFromPlaylist}
          />
        ))}
      </div>
    </div>
  );
};

Playlist.propTypes = {
  onClickRemoveFromPlaylist: PropTypes.func.isRequired,
  playlist: PropTypes.instanceOf(Array).isRequired,
};

export default Playlist;
