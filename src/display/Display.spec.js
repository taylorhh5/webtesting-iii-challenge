// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display.js'


test("Render the Dashboard", () => {
    render (<Display/>);
    
    })
    test ('should match snapshot',() =>{
        expect (render (<Display/>)).toMatchSnapshot();
     });
           
    
    test('defaults to unlocked and open', () => {
        const { getByText } = render(<Display />);
        getByText(/unlocked/i);
        getByText(/open/i);
      });

  

    test('when unlocked or open use the green-led class', () => {
        const  {getByText}  = render(<Display locked={false} />);
        const notLocked = getByText (/Unlocked/i);
        expect (notLocked).toBeTruthy;
    })



    
    test('displays Locked if the locked prop is true', () => {
        const  {getByText}  = render(<Display locked={true} />);
        const isLocked = getByText (/locked/i);
        expect (isLocked).toBeTruthy;
    })


    test('when closed use the red-led class', () => {
        const  {getByText}  = render(<Display closed={false} />);
        const isClosed = getByText (/open/i);
        expect(isClosed.classList.contains('green-led '))
    })