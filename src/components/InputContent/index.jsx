import React, { useState } from 'react';
import iconDollar from '../../assets/images/icon-dollar.svg'
import iconPerson from '../../assets/images/icon-person.svg'
import { Container } from './style';
import { OutputContent } from '../OutputContent'

export function InputContent() {

    const [ billValue,setBillValue ] = useState(0);
    const [ peopleNumber ,setPeopleNumber ] = useState(0);
    const [ chosenPercentage, setChosenPercentage ] = useState(0);

    const chosenPercentageParsed = parseFloat((billValue/100) * chosenPercentage);
    const billValueParsed = parseFloat(billValue);
    
    const total = ((billValueParsed + chosenPercentageParsed)/peopleNumber).toFixed(2);

    const tipAmount = (((billValueParsed + chosenPercentageParsed) - billValueParsed)/peopleNumber).toFixed(2);

    function resetAll(){
        setBillValue("");
        setPeopleNumber("");
        setChosenPercentage("")
    }

    return(
        <>
            <Container>
                <div className="field">
                    <label htmlFor="bill" className="title">Bill</label>
                    <div>
                        <img src={iconDollar} alt="Icon dollar" />
                        <input 
                            type="number" 
                            id="bill" placeholder='0' 
                            min="1"
                            value={billValue}
                            onChange={e=> setBillValue(e.target.value)}
                        />
                    </div>
                </div>

                <div className="tips">
                    <span className="title">Select Tips %</span>

                    <div className="tipsContent">
                        <span 
                            style={{background: chosenPercentage == 5 ? "hsl(172, 67%, 45%)" : false}} 
                            onClick={()=> setChosenPercentage(5)}
                        >5%</span>

                        <span
                            style={{background: chosenPercentage == 10 ? "hsl(172, 67%, 45%)" : false}} 
                            onClick={()=> setChosenPercentage(10)}
                        >10%</span>

                        <span
                            style={{background: chosenPercentage == 15 ? "hsl(172, 67%, 45%)" : false}} 
                            onClick={()=> setChosenPercentage(15)}
                        >15%</span>

                        <span
                            style={{background: chosenPercentage == 25 ? "hsl(172, 67%, 45%)" : false}} 
                            onClick={()=> setChosenPercentage(25)}
                        >25%</span>

                        <span
                            style={{background: chosenPercentage == 50 ? "hsl(172, 67%, 45%)" : false}} 
                            onClick={()=> setChosenPercentage(50)}
                        >50%</span>

                        <input 
                            type="number" 
                            placeholder='Custom' 
                            min="1"
                            onChange={e=> setChosenPercentage(e.target.value)}
                        />

                    </div>
                </div>

                <div className="field">
                    <label htmlFor="NumberPeople" className="title">Number of People</label>
                    <div>
                        <img src={iconPerson} alt="Icon Person" />  
                        <input 
                            type="number" 
                            id="NumberPeople" 
                            placeholder='0' 
                            min="1"
                            value={peopleNumber}
                            onChange={e=> setPeopleNumber(e.target.value)}
                        />
                    </div>
                </div>
                
            </Container>
            
            <OutputContent total={total} tipAmount={tipAmount} reset={resetAll}/>
        
        </>
    )
}
