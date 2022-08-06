import { useState } from 'react';
import './index.css';
import { Container, Row, Col } from 'react-grid-system';
const AreaSize = () =>{
    const [area, setArea] = useState(1)

    return(
    <div>
        <h2>Size of area you wanna play</h2>
<Container>
  <Row>
    <Col sm={4}>
    <input 
        className='area_size'
        type="number" 
        min="1" 
        max="3"
        onChange={eve => setArea(eve.target.value)}
        value={area}
        ></input>
    </Col>
    <Col sm={4}>
        <h3>Km</h3>
    </Col>

  </Row>
</Container>
    </div>
    )
}
export default AreaSize