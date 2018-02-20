
import _ from 'lodash';
import './index.css';
import Susj from './assets/images/susj.jpg';

function component() {
const element = document.createElement('div');

element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.classList.add('hello');

const profile = new Image();
profile.src = Susj;
profile.classList.add('profile');
element.appendChild(profile);

return element;
}

document.body.appendChild(component());

const initialState = 0;

export const counter = (state = initialState, action) => {
	return state;
}