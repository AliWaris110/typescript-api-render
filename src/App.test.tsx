import React from 'react';
import { configure,shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
configure({adapter:new Adapter()})

describe('checking h1 tag',()=>{
    test('render the text inside of h1',()=>{
        const wrapper=shallow(<App />)
       expect(wrapper.find('h1').text()).toContain('Github Users');
    })

    test('render the button text inside of App component',()=>{
        const wrapper=shallow(<App/>)
        expect(wrapper.find('button').text()).toBe('Show Users');
    })
})















