const PRODUCT_BOX_HEIGHT = 250;
const PRODUCT_BOX_WIDTH = 150;

export default (theme) => ({
  root: {
    height: PRODUCT_BOX_HEIGHT,
    width: PRODUCT_BOX_WIDTH,
    padding: 10,
    border: '1px solid #e6e6e6',
    backgroundColor: '#fff',
    boxShadow: "0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12)",
    "&:hover":{
      boxShadow: "0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16)"
    },
    marginBottom: 10
  },
  productLabelSpacing: {
    marginTop: theme.spacing.unit * 3
  },
  priceSpacing: {
    marginTop: theme.spacing.unit * 3
  },
  price: {
    fontWeight: 'bold'
  },
  quantityInputSpacing: {
    marginTop: theme.spacing.unit * 2
  }
});