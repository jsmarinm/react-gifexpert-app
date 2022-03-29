
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';



describe('Pruebas en el componente AddCategory', () => {
    
    const setCategories = jest.fn();

    let wrap = shallow(<AddCategory setCategories = { setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrap = shallow(<AddCategory setCategories = { setCategories } />);
    
    });

    test('debe mostrarse correctamente', () => { 

        expect(wrap).toMatchSnapshot();

    });

    test('debe cambiar la caja de texto', () => { 

        const input = wrap.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', {target: { value }});

        expect(wrap.find('p').text().trim()).toBe(value);

    });

    test('No debe postear la información OnSubmit', () => { 

        wrap.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => { 

        //1. simular el input
        const value = 'Hola Mundo';
        const input = wrap.find('input');
        input.simulate('change', {target: { value }});

        //2. simular submit
        wrap.find('form').simulate('submit', {
            preventDefault(){}
        });

        //3.setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        //4.el valor del input debe estar ''
        expect(input.prop('value')).toBe('');

     })


});