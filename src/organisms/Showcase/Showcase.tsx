import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ShowcaseCard from '../../molecules/ShowcaseCard/ShowcaseCard'
import ShowcaseOptions from '../../molecules/ShowcaseOptions/ShowcaseOptions'


const Showcase = () => {
    const SearchItems = useSelector((state: any) => state.setSearchItems.searchItems)
    const [currentShowcase, setcurrentShowcase] = useState("tracks")

    return (
        <>
            <ShowcaseOptions options={Object.keys(SearchItems)} setcurrentShowcase={setcurrentShowcase} />
            <div>
                {currentShowcase === "tracks" ?
                    <div>
                        {SearchItems.hasOwnProperty("tracks") &&
                            SearchItems.tracks.items.map((item: any, key: any) => <ShowcaseCard item={item} key={key} />)
                        }
                    </div>
                    :
                    <div>
                        {SearchItems.hasOwnProperty("tracks") &&
                            SearchItems.artists.items.map((item: any, key: any) => <ShowcaseCard item={item} key={key} />)
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default Showcase