
import _ from 'lodash';
import './index.css';

function component() {
var element = document.createElement('div');

element.innerHTML = _.join(['Hello', 'webpack'], ' ');
element.classList.add('hello');

return element;
}

document.body.appendChild(component());

const initialState = 0;

export const counter = (state = initialState, action) => {
	return state;
}