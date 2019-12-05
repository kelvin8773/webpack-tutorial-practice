import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello! ', 'Webpack is wonderful Tool!!!'], ' ');

  return element;
}

document.body.appendChild(component());

