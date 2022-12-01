import React from 'react';
import { createRoot } from 'react-dom/client';
// import { render } from 'react-dom';
import { Remove, Choice } from './helpers';
import foods from './foods';

const randomFruit = Choice(foods);
const Index = () => {
	console.log(`I'd like one ${randomFruit}, please`);
	console.log(`Here you go: ${randomFruit}`);
	console.log(`Delicious! May I have another?`);
};

let remaining = Remove(randomFruit, foods);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);

createRoot(document.getElementById('root')).render(<Index />)

