import { useState } from 'react';
import './Сell.css';
import Pawn from './Figure/Pawn'

interface CellProps {
    lineNumber: number
    cellNubmer: number
}

function Сell({ lineNumber, cellNubmer }: CellProps) {
    
    // const [qwe, setQwe] = useState(true)
    function clickOnClell() {
        console.log(lineNumber, cellNubmer)
    }

    

    return (
        <div className={(lineNumber + cellNubmer) % 2 == 0 ? 'Cell__black' : 'Cell__white'}
            onClick={clickOnClell}
        >
            {lineNumber === 2 || lineNumber === 7 ? <Pawn/>  : ''}
            {/* { ? <div>П</div>  : ''} */}
        </div>
    );
}

export default Сell;