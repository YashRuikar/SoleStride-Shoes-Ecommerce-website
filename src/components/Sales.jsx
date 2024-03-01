
import Title from "./utils/Title";
import Item from "./utils/Item";
import PropTypes from "prop-types";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // Check if items is defined and has length
  if (!items || items.length === 0) {
    return null; // Or handle the case when there are no items
  }

  return (
    <div className="nike-container">
      <Title title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items.map((item, i) => (
          <Item key={i} {...item} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};

Sales.propTypes = {
  ifExists: PropTypes.bool,
  endpoint: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired, // Ensure id is a number
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        btn: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        shadow: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Sales;
