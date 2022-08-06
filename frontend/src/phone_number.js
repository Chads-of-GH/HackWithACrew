import { useState } from 'react';
import './index.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

const PhoneNumber = () =>{
    const [phone_number, setPhone] = useState()

    return(
    <div>
    <PhoneInput
      defaultCountry="US"
      placeholder="Enter phone number"
      value={phone_number}
      onChange={setPhone}
      className="phone_number"
      />

      <h2>{phone_number}</h2>
    </div>
    )
}

export default PhoneNumber