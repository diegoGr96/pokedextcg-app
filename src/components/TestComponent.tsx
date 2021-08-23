import React from 'react'

interface TestProps{
    id: number;
    name: string;
    active?: boolean;
}


const TestComponent: React.FC<TestProps> = ( {id, name, active} ) => {
    return (
        <ul className="list-group col-md-5 animate__animated animate__fadeInRight">
            <li className="list-group-item">{id}</li>
            <li className="list-group-item">{name}</li>
            <li className="list-group-item">{active ? `Active` : `Inactive`}</li>
        </ul>
    )
}

export default TestComponent
