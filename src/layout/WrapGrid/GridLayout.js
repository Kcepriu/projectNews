const { GridLayoutStyle } = require('./GridLayout.styled');

const GridLayout = ({ children }) => {
  return <GridLayoutStyle>{children}</GridLayoutStyle>;
};

export default GridLayout;
