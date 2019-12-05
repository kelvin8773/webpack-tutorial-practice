import _ from 'lodash';
import './style.css';
import Icon from './icon-check.png';
import Data from './dataset.xml';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello! ', 'Webpack is wonderful Tool!!!'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  const myImage = new Image();
  myImage.src = Icon;

  element.appendChild(myImage);

  console.log(Data);

  return element;
}

document.body.appendChild(component());

