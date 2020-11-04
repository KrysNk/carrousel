import React, { useEffect } from "react";
import Carrousel from "./Carrousel";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { carrouselsSelector } from "../../store/Carrousel/CarrouselSelectors";
import { loadData } from "../../store/Carrousel/CarrouselActions";

const CarrouselContainer = ({ loadData, handleGetLoadData }) => {
  useEffect(() => {
    handleGetLoadData();
  }, [handleGetLoadData]);

  return <Carrousel loadData={loadData} />;
};

CarrouselContainer.prototype = {
  handleGetLoadData: PropTypes.func.isRequired,
  loadData: PropTypes.shape({}),
};

CarrouselContainer.defaultProps = {
  loadData: [],
};

const mapStateToProps = (state) => ({
  loadData: carrouselsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleGetLoadData: () => dispatch(loadData.request()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  CarrouselContainer
);
