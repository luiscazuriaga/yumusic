import React, { Dispatch } from 'react'

interface Props {
    options: string[];
    setcurrentShowcase: Dispatch<React.SetStateAction<string>>;
}


const ShowcaseOptions = ({ options, setcurrentShowcase }: Props) => {

    return (
        <div>
            {options.map((option, key) => <button onClick={() => setcurrentShowcase(option)} key={key}>{option}</button>)}
        </div>
    )
}

export default ShowcaseOptions