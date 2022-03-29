import React from 'react';
import { shallow } from 'enzyme';
import GitExpertApp from '../../components/GitExpertApp';


describe('Pruebas en componente GitExpertApp',() => {

 

    test('Mostrar componente', () => { 
        const wrap = shallow(<GitExpertApp />);
        expect(wrap).toMatchSnapshot();

     });

     test('debe mostrar una lista de categorias', () => { 

        const categories = ['Dragon ball', 'One punch'];
        const wrap = shallow(<GitExpertApp defaultCategories={categories} />);

        console.log(categories.length);
        expect(wrap).toMatchSnapshot();

        expect(wrap.find('GitGrid').length).toBe(categories.length);

      });

});



