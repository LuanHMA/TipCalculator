import React from 'react';

import { Container } from './style';

export function OutputContent({total, tipAmount, reset}) {

  return(
    <Container>
        <div className="section">
            <div className="info">
                <p>Tip Amount</p>
                <span>/ person</span>
            </div>

            <span className="result">${Number(tipAmount) || 0 }</span>
        </div>

        <div className="section">
            <div className="info">
                <p>Total</p>
                <span>/ person</span>
            </div>

            <span className="result">${Number(total) || 0}</span>

        </div>

        <button onClick={()=> reset()}>Reset</button>
    </Container>
  )
}
