import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// reactstrap components
import { Card, CardFooter, CardHeader, Container, Pagination, PaginationItem, PaginationLink, Row, Table } from "reactstrap";
function PredictionFucntion() {
  const { t } = useTranslation();
  return <Container className="mb-xl" fluid>
  {/* Table */}
  <Row>
    <div className="col">
      <Card className="shadow">
        <CardHeader className="border-0 text-center">
          <h3 className="mb-0 ">{t("Card tables")}</h3>
        </CardHeader>
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">{t("Project")}</th>
              <th class="text-center" scope="col">{t("Budget")}</th>
              <th scope="col">{t("Status")}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="w-25">
                <img
                  alt="tomato"
                  className="img-fluid img-thumbnail"
                  src={require("assets/img/theme/CropTomato.jpg")}
                />
              </td>
              <td>
                {t("table row1 description")}
    </td>
              <td>
                <tr><Link to='/crops-page/irudra'><button type="button" class="btn btn-primary">Details</button></Link></tr>
                <tr> <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></tr>
                <tr> <button type="button" class="btn btn-primary"><i class="fas fa-edit"></i></button></tr>
                <tr> <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button></tr>
              </td>
            </tr>
            <tr>
              <td class="w-25">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" class="img-fluid img-thumbnail" alt="Sheep" />
              </td>
              <td>{t("table row2 description")}</td>
              <td>Cristina</td>
            </tr>
            <tr>
              <td class="w-25">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" class="img-fluid img-thumbnail" alt="Sheep" />
              </td>
              <td>{t("table row3 description")}</td>
              <td>Cristina</td>
            </tr>
          </tbody>
        </Table>
        <CardFooter className="py-4">
          <nav aria-label="...">
            <Pagination
              className="pagination justify-content-end mb-0"
              listClassName="justify-content-end mb-0"
            >
              <PaginationItem className="disabled">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                  tabIndex="-1"
                >
                  <i className="fas fa-angle-left" />
                  <span className="sr-only">Previous</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  2 <span className="sr-only">(current)</span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fas fa-angle-right" />
                  <span className="sr-only">{t("Next")}</span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </nav>
        </CardFooter>
      </Card>
    </div>
  </Row>

</Container>
  }


class Prediction extends React.Component {
  state = {
    name: "name"
  };

  render() {
    return (
      <>
        <PredictionFucntion/>

      </>
    );
  }
}

export default Prediction;
