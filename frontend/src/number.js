import { useState } from 'react';
import './index.css';

const AreaSize = () =>{
    const [area, setArea] = useState(1)

    return(
    <div>
        <input 
        className='area_size'
        type="number" 
        min="1" 
        max="3"
        onChange={eve => setArea(eve.target.value)}
        value={area}
        ></input>
    </div>
    )
}

export default AreaSize 