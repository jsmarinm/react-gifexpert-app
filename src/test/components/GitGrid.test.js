import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GitGrid } from '../../components/GitGrid';
import { useFetchGifts } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Prueba con GitGrid', () => {

    
  

    test('Debe mostrar correctamente el componente', () =>{
        useFetchGifts.mockReturnValue({
            data: [],
            loading: true
        
        });
        const wrap = shallow(<GitGrid category='One punch man' />);
        expect(wrap).toMatchSnapshot();

    });

    test('debe demostrar items cuando se cargan imagenes useFetchGifts', () => { 

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa/cosa.jpg',
            title: 'Cualquier cosa'

        },
        {   
        id: 'ABC',
        url: 'https://localhost/cualquiercosa/cosa.jpg',
        title: 'Cualquier cosa'

        }
    ];
        
        useFetchGifts.mockReturnValue({
            data: gifs,
            loading: false
        
        });
        const wrap = shallow(<GitGrid category='One punch man' />);
        // expect(wrap).toMatchSnapshot();
        expect(wrap.find('p').exists()).toBe(false);
        expect(wrap.find('GitGridItem').length).toBe(gifs.length);

     });

});