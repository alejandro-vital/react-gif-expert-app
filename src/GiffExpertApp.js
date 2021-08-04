import React, { useState } from 'react'


import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GiffExpertApp = props => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Given'] );
    //     setCategories( cats => [...cats, 'Given'] );
    // }

    return (
        <>
            <h2>GiffExpertApp!</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category= { category } 
                        />
                    ))
                }
            </ol>
                    
        </>
    )
}



export default GiffExpertApp
