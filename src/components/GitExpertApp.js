//Functional component

import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GitGrid } from "./GitGrid";

const GitExpertApp = ({ defaultCategories = [] }) => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(defaultCategories);

    // const handleAdd = () => {

    //     // setCategories ([...categories, 'Splider Man']);
    //     setCategories ( cats => [...cats, 'Splider Man']);
    // };

    return(
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories= {setCategories} />
            <hr />
            {/* <button onClick={handleAdd} >Agregar </button> */}

            <ol>
                {
                    // categories.map(category => {
                    //     return <li key={ category }>{ category }</li>
                    // })
                    categories.map(category => (
                    <GitGrid 
                    key={category}
                    category={category} />
                    ))
                    
                 }
               
            </ol>
         
        </>
    );

};


export default GitExpertApp;