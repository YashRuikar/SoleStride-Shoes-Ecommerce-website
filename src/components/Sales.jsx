import Title from "./utils/Title";
import Item from "./utils/Item";
import PropTypes from "prop-types";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint);
  return (
    <div className="nike-container">
      <Title title={title} />
      <div className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
        {items?.map((item, i) => (
          <Item {...item} key={i} ifExists={ifExists} />
        ))}
      </div>
    </div>
  );
};


Sales.propTypes = {
  ifExists: PropTypes.bool.isRequired,
  endpoint: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Sales;
