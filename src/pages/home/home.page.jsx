import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Container, Row, Col, Table } from "react-bootstrap";
const HomePage = () => {
  return (
    <Container className="mt-2 mb-2">
      <Row className="border border-danger">
        <Col md={12}>
          <h4 className="text-center">
            <u>CIRRICULUM VITE</u>
          </h4>
        </Col>
        <Col md={6}>
          <p>Name: Jupiter Bade</p>
          <p>Address: Madhyapur thimi, Bhaktapur</p>
          <p>Father’s Name: Hari Krishna Bade</p>
          <p>Mother’s Name: Siddhi Maya Bade</p>
        </Col>
        <Col md={6}>
          <p>Date of Birth:2052/11/26</p>
          <p>Contact no: 9847806968</p>
          <p>Email: jupiterbade@gmail.com</p>
        </Col>
        <Col md={12}>
          <h4>
            <u>CAREER OBJECTIVES</u>
          </h4>
          <p>
            <i>
              Self-motivated and hardworking fresher seeking for an opportunity
              to work in a challenging environment to prove my skill and use my
              knowledge and intelligence in the growth of organization.
            </i>
          </p>
        </Col>
        <Col md={12}>
          <h4>
            <u>CAREER OBJECTIVES</u>
          </h4>
          <Table bordered>
            <thead>
              <tr>
                <th>Degree</th>
                <th>Board/University</th>
                <th>Year</th>
                <th>Division</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>S.L.C </td>
                <td>Government of Nepal</td>
                <td>2068 </td>
                <td>1st</td>
              </tr>
              <tr>
                <td>+2 </td>
                <td>National Examinations Board</td>
                <td>2074 </td>
                <td>2nd</td>
              </tr>
              <tr>
                <td>BCA </td>
                <td>Purbanchal University(Nepal)</td>
                <td>running </td>
                <td>-</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={12}>
          <h4>
            <u>SKILL AND CERTIFICATES</u>
          </h4>
          <ul>
            <li>Microsoft Office applications(Word, Excel, PowerPoint)</li>
            <li>Graphic designing using (Canva,PhotoShope)</li>
            <li>Frontend Developer using botstrap</li>
          </ul>
        </Col>
        <Col>
          <h4>
            <u>Internship and Work experience</u>
          </h4>
          <ul>
            <li> 3 month frontend developer at Freelancer Unit Pvt.Ltd</li>
            <li> 3 month Frontend developer at Nepdriod innovations Pvt Ltd</li>
            <li> 2 years Frontend developer at Softech foundation</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
