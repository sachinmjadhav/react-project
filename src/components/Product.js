import React, { Component } from "react";
import products from "../products/MOCK_DATA.json";

import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 500,
    margin: "auto",
    marginTop: "30px"
  },
  media: {
    height: 300
  }
};

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products
    };
    this.renderProduct = this.renderProduct.bind(this);
  }

  renderProduct(id) {
    const { classes } = this.props;
    const item = this.state.products.filter(i => i.id === id);
    console.log("item", item);
    return (
      <div style={{ minHeight: "100vh" }}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={item[0].img}
            title={item[0].name}
          />
          <CardHeader title={item[0].name} subheader={item[0].author} />
        </Card>
      </div>
    );
  }

  render() {
    const id = parseInt(this.props.match.params.id);
    return <div className="container d-block">{this.renderProduct(id)}</div>;
  }
}

export default withStyles(styles)(Product);
