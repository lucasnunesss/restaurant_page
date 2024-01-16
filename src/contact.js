import { main2 } from "./index.js";
const h1 = document.createElement('h1')
const article = document.createElement('article')
const section = document.createElement('section')
import Icon from "./chocolat12_menu.jpg"
import Icon2 from "./chocolat5_menu.jpg"
import Icon3 from "./chocolat10_menu.jpg"

function navBar(){
  

  const li = document.querySelectorAll('li')
  li.forEach((item) => {
    console.log(item)
      item.addEventListener('click', e => {
        if(item.innerText === 'Menu'){
          section.classList.add('esconder')
          article.classList.add('esconder')
        }
        if(item.innerText === 'Contact'){
          section.classList.remove('esconder')
          article.classList.remove('esconder')
        }
        if (item.innerText === 'Home'){
          section.classList.add('esconder')
          article.classList.add('esconder')
        }
     
    })
  })
}
function title(){
 
  main2.appendChild(section)
  main2.appendChild(article)
  section.appendChild(h1)
  h1.innerText = 'Contact Us'
  h1
}

function Contact(name, title, tel, email, img){
  this.name = name,
  
  this.title = title,
  this.tel = tel,
  this.email = email,
  this.img = img

  this.mostrar = function (){
    const article2 = document.createElement('article')
    article.appendChild(article2)
    const h2 = document.createElement('h2')
    
    const h3 = document.createElement('h3')
    const h4 = document.createElement('h4')
    const h5 = document.createElement('h5')
   article2.classList.add('addGrid')
   article2.classList.add('art1')
 
   article2.appendChild(h2)
   article2.appendChild(h3)
   article2.appendChild(h4)
   article2.appendChild(h5)
   
    article2.appendChild(this.img)
    h2.classList.add('gridItem')
    h3.classList.add('gridItem')

    h4.classList.add('gridItem')
    h5.classList.add('gridItem')

    h2.innerText = this.name
    h3.innerText = this.title
    h4.innerText = this.tel
    h5.innerText = this.email

    
  };
}

function tel1(){
  const name = 'SP'
  const loc = 'We are in all regions of São Paulo'
  const tel = '555-555-5554'
  const email = 'totallyRealEmail@notFake.com'
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('img1')
  const contact = new Contact(name, loc, tel, email, myIcon)
  contact.mostrar()
}

function tel2(){

  const name = 'RJ'
  const loc = 'We are in center of Rio de Janeiro'
  const tel = '555-555-5555'
  const email = 'perfectlyRealEmail@notFake.com'
  const myIcon = new Image();
  myIcon.src = Icon2;
  myIcon.classList.add('img1')
  const contact = new Contact(name, loc, tel, email, myIcon)
  contact.mostrar()
}

function tel3(){
  const name = 'MG'
  const loc = 'We are in all regions of Minas Gerais'
  const tel = '555-555-5556'
  const email = 'totallyRealEmail@notFake.com'
  const myIcon = new Image();
  myIcon.src = Icon3;
  myIcon.classList.add('img1')
  const contact = new Contact(name, loc, tel, email, myIcon)
  contact.mostrar()

}



navBar()
tel1()
tel2()
tel3()
export {title, navBar}