const PRODUCT_BOX_HEIGHT = 250;
const PRODUCT_BOX_WIDTH = 180;

export default (theme) => ({
  root: {
    height: PRODUCT_BOX_HEIGHT,
    width: PRODUCT_BOX_WIDTH,
    padding: 15,
    border: '1px solid #e6e6e6',
    backgroundColor: '#fff'
  },
  productLabelSpacing: {
    marginTop: theme.spacing.unit * 3
  },
  priceSpacing: {
    marginTop: theme.spacing.unit * 3
  }
});