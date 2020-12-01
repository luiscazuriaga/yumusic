import React from 'react'

interface Props {
    item: any
}

const ShowcaseCard = ({ item }: Props) => {


    return (
        <div>
            {item.name}
        </div>
    )
}

export default ShowcaseCard