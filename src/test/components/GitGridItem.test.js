import React from 'react';

import {shallow} from 'enzyme';

import { GitGridItem } from '../../components/GitGridItem';

describe('Pruebas en GitGridItem', () => {
   
    const id= 'A11231a';
    const title = 'un titulo';
    const url = 'https://localhost.algo.jpg';
    const wrap = shallow(<GitGridItem id = {id} title = {title} url = {url} />);

    test('Mostrar el componente correctamente', () => {
        
         expect(wrap).toMatchSnapshot();

    });

    test('Debe tener un parrafo con el titulo', () => {
       
         const p = wrap.find('p');
         expect(p.text().trim()).toBe(title);

    });

    test('Debe tener la imagen igual al url y alt de los props', () => {
       
        const img = wrap.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

   });

   test('Debe tener animate__fadeIn', () => {
       
    const div = wrap.find('div');

    const split = div.prop('className').split(' ');
    const fade = split[split.length - 1];

    expect(fade).toBe('animate__fadeIn');
    
    // const className = div.prop('className');
    // expect(className.includes('animate__fadeIn')).toBe(true);

});

});