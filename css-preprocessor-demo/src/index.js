import './style.less';

const content = document.createElement('div');
content.classList.add('content');

const brand = document.createElement('h1');
brand.classList.add('brand');
brand.textContent = 'Cellinlab';

content.appendChild(brand);

document.body.appendChild(content);