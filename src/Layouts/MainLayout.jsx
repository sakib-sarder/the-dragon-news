import React from "react";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RightNav from "../Pages/Shared/RightNav/RightNav";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container className="my-4">
        <Row>
          <Col lg={3}><LeftNav></LeftNav></Col>
          <Col lg={6}><h1>Main Content</h1></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
