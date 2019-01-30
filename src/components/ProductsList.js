import React, { Component } from "react";
import products from "../products/MOCK_DATA.json";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Spinner from "./Spinner";
// import Carousel from "./Carousel";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "30px",
    minHeight: "80vh"
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ products: products }), 1000);
    // fetch("https://my.api.mockaroo.com/products.json?key=88a360a0")
    //   .then(res => res.json())
    //   .then(data => this.setState({ products: data }));
  }

  renderProducts() {
    const { classes } = this.props;
    if (this.state.products == null) {
      return <Spinner />;
    } else {
      return this.state.products.map(product => {
        return (
          <Grid item xs={12} sm={6} md={3} lg={3} key={product.id}>
            <Card className={classes.card}>
              <CardActionArea component={Link} to={`/product/${product.id}`}>
                <CardMedia
                  className={classes.media}
                  image={product.img}
                  title={product.name}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.author}
                </Typography>
                <Typography component="p">{product.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="container">
        {/* <Carousel /> */}
        <h1 className="ml-5">Products</h1>
        <div className={classes.root}>
          <Grid container spacing={24}>
            {this.renderProducts()}
          </Grid>
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductsList);
