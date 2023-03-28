import React from 'react';
import { Row, Col } from 'react-bootstrap';
const Category = ({ myFilter, allCategory }) => {
    const filter = (cat) => {
        myFilter(cat);
    }
  return (
      <Row className='my-4'>
          <Col className="justify-content-center d-flex">
              <div>
                  {
                      allCategory.length ? (
                          allCategory.map((cate) => {
                              return (
                                  <button key={cate} onClick={() => filter(`${cate}`)} className="myBtn mx-2">{cate}</button>
                              )
                      })
                          ) : <h2>لا يوجد عناصر</h2>
                  }
              </div>
          </Col>    
      </Row>
  );
}

export default Category;
