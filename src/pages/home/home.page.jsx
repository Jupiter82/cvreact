import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Career from "../../component/career.component";
import Introduction from "../../component/introduction.component";
import Qualification from "../../component/qualification.component";
import Skill from "../../component/skill.component";
import Internship from "../../component/internship.component";

const HomePage = () => {
  return (
    <Container className="mt-2 mb-2">
      <Row className="border border-danger">
        <Col md={12}>
          <h4 className="text-center">
            <u>CIRRICULUM VITE</u>
          </h4>
        </Col>
        <Introduction></Introduction>
        <Routes>
          <Route path="/" element={<Career/>}></Route>
        </Routes>
        <Qualification></Qualification>
        <Skill></Skill>
        <Internship></Internship>
      </Row>
    </Container>
  );
};
export default HomePage;
