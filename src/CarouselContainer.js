import React, { useState } from "react";
import axios from "axios";
import { Row, Col, Carousel } from "antd";

const CarouselContainer = () => {
  const [dataResult, setDataResult] = useState(null);
  axios
    .get("https://cors-anywhere.herokuapp.com/http://62.210.247.201:9000/test")
    .then((resp) => {
      if (dataResult === null) {
        setDataResult(resp.data);
      }
    });

  return (
    <Row style={{ width: "1000px", height: "1000px" }}>
      <Col style={{ width: "900px", height: "900px" }}>
        <Carousel style={{ width: "700px", height: "700px" }} autoplay>
          {dataResult &&
            dataResult.map((item) => {
              <div style={{ width: "550px", height: "550px" }}>
                {item.name}
              </div>;
            })}
        </Carousel>
      </Col>
    </Row>
  );
};

export default CarouselContainer;
