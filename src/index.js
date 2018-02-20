
import _ from 'lodash';
import './index.css';
import Susj from './assets/images/susj.jpg';
import print from './print.js';

function component() {
const element = document.createElement('div');
const btn = document.createElement('button');

element.innerHTML = _.join(['Hello', 'Webpack', 'Awesome Tutorials'], ' ');
element.classList.add('hello');

const profile = new Image();
profile.src = Susj;
profile.classList.add('profile');
element.appendChild(profile);

btn.innerHTML = 'Click me!';
btn.onclick = print;

element.appendChild(btn);


return element;
}

document.body.appendChild(component());

const initialState = 0;

export const counter = (state = initialState, action) => {
	return state;
}