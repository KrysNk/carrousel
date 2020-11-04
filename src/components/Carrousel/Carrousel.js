import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { withStyles } from "@material-ui/core";
import styles from "./CarrouselStyles";

const Carrousel = ({ loadData, classes }) => {
  return <div>test</div>;
};

Carrousel.prototype = {
  loadData: PropTypes.shape({}),
};

Carrousel.defaultProps = {
  loadData: [],
};

export default compose(withStyles(styles))(Carrousel);