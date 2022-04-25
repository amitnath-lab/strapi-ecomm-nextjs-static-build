import React from "react";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
} from "../../../services/script";
import { Container, Row, Col } from "reactstrap";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "free shipping",
    service: "free shipping world wide",
  },
  {
    link: svgservice,
    title: "24 X 7 service",
    service: "online service for new customer",
  },
  {
    link: svgoffer,
    title: "festival offer",
    service: "new online special festival offer",
  },
];

const ServiceContent = ({ link, title, service }) => {
  return (
    <Col md="4" className="service-block">
      <div className="media">
        <div dangerouslySetInnerHTML={{ __html: link }} />
        <div className="media-body">
          <h4>{title}</h4>
          <p>{service}</p>
        </div>
      </div>
    </Col>
  );
};

const ServiceLayout = ({ sectionClass }) => {
  return (
    <Container>
      <section className={sectionClass}>
        <Row>
          {Data.map((data) => {
            return (
              <Col md="4" className="service-block">
                <MasterServiceContent
                  link={data.link}
                  title={data.title}
                  service={data.service}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

export default ServiceLayout;
