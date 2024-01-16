import './style.css'
import {head, navBar as menuNavBar} from './menu.js'
import { title, navBar as contactNavBat } from './contact.js';
const main = document.querySelector('#content')
const main2 = document.querySelector('main')
main2.appendChild(main)

const section = document.querySelector('section')
function headMenu(){
  const header = document.querySelector('header')
    const ul = document.createElement('ul')
    header.appendChild(ul)
    const section = ['Home', 'Menu', 'Contact']
    for(let i = 0; i < 3; i++){
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerText = section[i]
    li.classList.add('pointer')
  }
}

function navBar(){
  let li = document.querySelectorAll('li');
  li.forEach((item) => {
    item.addEventListener('click', e => {
      if(item.innerText === 'Home'){
        main.classList.remove('esconder')
      }
    if (item.innerText === 'Menu'){
        main.classList.add('esconder')
        menuNavBar()
        head()
    }

    if (item.innerText === 'Contact'){
      main.classList.add('esconder')
      title()
      contactNavBat()
    }
        
   
      })
  
    })
  }



function selectLi(){
  let li = document.querySelectorAll('li')
 
  return li
}


function artigo1(){

  const section = document.querySelector('section')
  const h1 = document.createElement('h1')
  main.appendChild(section)
  section.appendChild(h1)
  h1.textContent = 'Chocolat Factory'
  const article1 = document.createElement('article')
  const blockQuote = document.createElement('blockquote')
  const cite = document.createElement('cite')
  section.appendChild(article1)
  article1.classList.add('art1')
  article1.appendChild(blockQuote)
  blockQuote.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda ratione quod, ipsam aliquid autem fugiat repudiandae necessitatibus aut consequatur! ';
  article1.appendChild(cite)
  cite.textContent = ' Albert Einstein'
}

function artigo2() {
  const article = document.createElement('article')
  const h2 = document.createElement('h2')
  

  const tdTbody =  ['Sunday: 8am - 8pm', 'Monday: 6am - 6pm',

  'Tuesday: 6am - 6pm',
  
  'Wednesday: 6am - 6pm',
  
  'Thursday: 6am - 10pm',
  
  'Friday: 6am - 10pm',
  
  'Saturday: 8am - 10pm']

  const ul = document.createElement('ul')
  article.classList.add('art1')
  main.appendChild(article)
  article.appendChild(h2)
  article.appendChild(ul)
  h2.textContent = 'Schedule'
  for(let i = 0; i < 7; i++){
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerText = tdTbody[i]
  } 
}

function artigo3(){
  const article = document.createElement('article')
  const h2 = document.createElement('h2')
  const p = document.createElement('p')
  main.appendChild(article)
  article.classList.add('art1')
  article.appendChild(h2)
  h2.innerText = 'Location';
  article.appendChild(p)
  p.textContent = 'Netuno, Avenida Luiz Dias Harserhoff'
}

function foot(){
  const footer = document.createElement('footer')
  document.body.appendChild(footer)
  footer.innerText = 'https://github.com/lucasnunesss'



}

artigo1()
artigo2()
artigo3()
foot()

headMenu()
selectLi()
navBar()
export {selectLi, main2, foot}