import { Table, Col } from "react-bootstrap";
const Qualification = () => {
  return (
    <>
      <Col md={12}>
        <h4>
          <u>CAREER QUALIFICATION</u>
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
    </>
  );
};
export default Qualification;
