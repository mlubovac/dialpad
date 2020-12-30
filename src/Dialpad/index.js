import React, { useCallback, useState } from 'react';
import CallIcon from './CallIcon'
import EndCallIcon from './EndCallIcon'
import BackspaceIcon from './BackspaceIcon'
import './dial-pad.css'

const DialPad = (props) => {

  const {
    onCallClick,
    onHangUpClick
  } = props;

  const [phoneNumber, setPhoneNumber] = useState('')

  const handleDigitClick =useCallback((value) => (event) => {
    setPhoneNumber(phoneNumber => phoneNumber.concat(value))
  }, []);

  const handleDialClick = () => {
    onCallClick(phoneNumber)
  }

  const handleHangUpClick = () => {
    onHangUpClick()
  }

  const handleBackspaceClick = () => {
    setPhoneNumber(phoneNumber => phoneNumber.slice(0, -1))
  }

  return (
    <div className="dial-pad" data-testid="dial-pad">
      <div className="phone-number">
        {phoneNumber}
      </div>
      <div className="digits">
        <div className="digit" onClick={handleDigitClick('1')}>
          1
          <div className="subset"></div>
        </div>
        <div className="digit" onClick={handleDigitClick('2')}>
          2
          <div className="subset">ABC</div>
        </div>
        <div className="digit" onClick={handleDigitClick('3')}>
          3
          <div className="subset">DEF</div>
        </div>
        <div className="digit" onClick={handleDigitClick('4')}>
          4
          <div className="subset">GHI</div>
        </div>
        <div className="digit" onClick={handleDigitClick('5')}>
          5
          <div className="subset">JKL</div>
        </div>
        <div className="digit" onClick={handleDigitClick('6')}>
          6
          <div className="subset">MNO</div>
        </div>
        <div className="digit" onClick={handleDigitClick('7')}>
          7
          <div className="subset">PQRS</div>
        </div>
        <div className="digit" onClick={handleDigitClick('8')}>
          8
          <div className="subset">TUV</div>
        </div>
        <div className="digit" onClick={handleDigitClick('9')}>
          9
          <div className="subset">WXYZ</div>
        </div>
        <div className="digit" onClick={handleDigitClick('*')}>
          *
        </div>
        <div className="digit" onClick={handleDigitClick('0')}>
          0
          <div className="subset">+</div>
        </div>
        <div className="digit" onClick={handleDigitClick('#')}>
          #
        </div>
      </div>
      <div className="controls">
        <div className="call" onClick={handleDialClick}>
          <CallIcon />
        </div>
        <div className="backspace" onClick={handleBackspaceClick}>
          <BackspaceIcon />
        </div>
        {/* <div className="digit" onClick={handleHangUpClick}>Hang Up</button> */}
      </div>
    </div>
  );
}

export default DialPad;