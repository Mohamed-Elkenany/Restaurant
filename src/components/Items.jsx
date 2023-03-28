import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
const Items = ({itemData}) => {
  return (
    <Row>
      <Zoom>
      {
        itemData.length >= 1 ? (
          itemData.map((item => {
            return (
            <Col sm="12 mb-3" key={item.id}>
          <Card className='d-flex flex-row'>
          <Card.Img src={item.imgUrl} style={{maxWidth:"200px",height:"100%"}} />
                  <Card.Body>
                    <div className='d-flex align-items-center justify-content-between my-2'>
              <Card.Title>
                <div className=''>
                {item.title}
                </div>
              </Card.Title>
              <Card.Title>
              <div className='fs-6' style={{color:"red"}}>
                {item.price}
                </div>
                      </Card.Title>
                      </div>
              <Card.Text>
                      <div className='my-4' style={{ color:"#3e619b"}}>
                {item.description}
               </div>
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          )
        }))
        ) : <h3 className="text-center">لا يوجد طعام</h3>
        }
        </Zoom>
    </Row>
  );
}

export default Items;
