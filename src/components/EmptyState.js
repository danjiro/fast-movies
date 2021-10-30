import PropTypes from 'prop-types';

const EmptyState = ({ icon, heading }) => {
  return (
    <div className="flex flex-col justify-center items-center flex-1 opacity-25">
      {icon}
      <p className="mt-4">{heading}</p>
    </div>
    );
};

EmptyState.propTypes = {
  icon: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default EmptyState;
