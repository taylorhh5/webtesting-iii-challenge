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
        const  {getByText}  = render(<Display closed={false} />);
        getByText (/Unlocked/i);
        toHaveClass(/green-led/i);
    })