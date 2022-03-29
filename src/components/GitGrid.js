import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

import { GitGridItem } from './GitGridItem';

export const GitGrid = ({category}) => {

    const { data:images, loading } = useFetchGifts(category);

  return (
    <>
        <h3 className="animate__animated animate__fadeIn">{ category }</h3>
        { loading && <p className="animate__animated animate__flash">Loading...</p> }
        <div className="card-grid">
              
            { 
                images.map(img => (
                    <GitGridItem 
                    key = {img.id} 
                    {...img} />
                ))
               
            }
        </div>    
    </>
  )
};

GitGrid.propTypes = {
    category: PropTypes.string.isRequired
}
