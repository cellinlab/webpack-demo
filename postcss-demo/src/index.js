import './style.css';

const content = document.createElement('div');
content.classList.add('content');

const brand = document.createElement('input');
brand.setAttribute('type', 'text');
brand.setAttribute('placeholder', 'Brand');
brand.classList.add('brand');

content.appendChild(brand);

document.body.appendChild(content);