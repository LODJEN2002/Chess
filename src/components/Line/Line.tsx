import './Line.css'
import Cell from '../Сell/Сell'

interface LineProps {
    number: number;
}

let arr: any = []

for (let i = 0; i < 8; i++) {
    arr.push(i)
}

function Line({ number }: LineProps) {
    return (
        <div className='Line'>
            <div className='Line'>{number}
            </div>
            {arr.map((el: number) => (
                <Cell
                    lineNumber={number}
                    cellNubmer = {el}
                    key={el}
                />
            ))}
        </div>

    );
};

export default Line;