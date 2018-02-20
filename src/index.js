const initialState = 0;

import _ from 'lodash';
function component() {
var element = document.createElement('div');

element.innerHTML = _.join(['Hello', 'webpack'], ' ');

return element;
}

document.body.appendChild(component());

export const counter = (state = initialState, action) => {
	return state;
}