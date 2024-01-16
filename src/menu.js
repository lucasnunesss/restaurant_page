import {  main2} from "./index.js";
import "./style2.css"
import Icon from "./chocolat1_menu.jpg"
import Icon2 from  "./chocolat2_menu.jpg"
import Icon3 from "./chocolat3_menu.jpg"
import Icon4 from "./chocolat4_menu.jpg"
import Icon5 from "./chocolat5_menu.jpg"
import Icon6 from "./chocolat6_menu.jpg"
import Icon7 from "./chocolat7_menu.jpg"
import Icon8 from "./chocolat8_menu.jpg"
import Icon9 from "./chocolat9_menu.jpg"
import Icon10 from "./chocolat10_menu.jpg"
import Icon11 from "./chocolat11_menu.jpg"
import Icon12 from "./chocolat12_menu.jpg"


  const section = document.createElement('section')
  const article = document.createElement('article')
  section.appendChild(article)
  const h1 = document.createElement('h1')
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  /*
  const div = document.createElement('div')
  const article = document.createElement('article')
  section.appendChild(article)
  const h2 = document.createElement('h2')
  const h3 = document.createElement('h3')
  */



function navBar(){
  

  const li = document.querySelectorAll('li')
  li.forEach((item) => {
    console.log(item)
      item.addEventListener('click', e => {
        if(item.innerText === 'Menu'){
          section.classList.remove('esconder')
          article.classList.remove('esconder')
        }
        if(item.innerText === 'Contact'){
          section.classList.add('esconder')
          article.classList.add('esconder')
        }
        if (item.innerText === 'Home'){
       
          section.classList.add('esconder')
          article.classList.add('esconder')
        }
     
    })
  })
}

function head(){ 
  
  section.classList.add()
  main2.appendChild(section)
  main2.appendChild(article)
  section.appendChild(h1)
    h1.innerText = 'Menu'
    h1.classList.add('head-h1')
   section.appendChild(h2)
   h2.classList.add('head-h2')
    h2.innerText = 'Beverages'
    
    
}

class Itens{
  constructor(name,desc, img, price){
    this.name = name,
    this.desc = desc
    this.img = img
    this.price = price
  }

  mostrarItens = () => {
    const article2 = document.createElement('article')
    article.appendChild(article2)
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const h4 = document.createElement('h4')
    article2.classList.add('art1')
    article2.appendChild(h3)
   h3.innerText = this.name
  article2.appendChild(p)
  p.innerText = this.desc
    article2.appendChild(h4)
   h4.innerText = this.price
    article2.appendChild(this.img)


  
  }
}

class bebidas extends Itens{

  static addBebidas = () =>{
    const text = 'Savor the rich, velvety goodness of our artisanal hot chocolate. Crafted from the finest cocoa beans, each sip offers a luxurious and comforting experience.'
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add('img')

    const hotChocolate = new Itens('Hot Chocolat', text, myIcon, '2 R$')
    hotChocolate.mostrarItens()
  
    const text2 = 'Indulge in pure delight with our rich and creamy gourmet ice cream, a perfect blend of luxurious flavors that will tantalize your taste buds. Treat yourself to a moment of pure indulgence.'
    const myIcon2 = new Image();
    myIcon2.src = Icon2
    myIcon2.classList.add('img')
    const icecream = new Itens('Ice cream', text2, myIcon2, '2 R$')
 
    icecream.mostrarItens()
  }

}

class Sides extends Itens{
  
  static addSides = () => {
    const h2 = document.createElement('h2')
 
    article.appendChild(h2)
    h2.classList.add('head-h2')
    h2.innerText = 'Sides'
    

    const myIcon = new Image();
    const text = 'Discover bliss in every bite with our collection of fine, bite-sized chocolates. Indulge in a world of rich flavors, perfect for sweet moments of pure delight.'
    myIcon.src = Icon3;
    myIcon.classList.add('img')
    const smallChocolat = new Itens('Small Chocolat',text, myIcon, '1 R$')
    smallChocolat.mostrarItens()

    const myIcon2 = new Image();
    const text2 = 'Our chocolate with fruit selection offers a delightful fusion of rich, velvety chocolate and vibrant, juicy fruits. Experience the exquisite balance of sweetness that will transport your taste buds to a realm of pure decadence.'
    myIcon2.src = Icon4;
    myIcon2.classList.add('img')
    const withFruit = new Itens('Chocolate with fruit',text2, myIcon2, '1 R$')
    withFruit.mostrarItens()

  }
}


class PratosPrincipais extends Itens {
  static addPratos = () => {
    const h2 = document.createElement('h2')
    article.appendChild(h2)
    h2.classList.add('head-h2')
    h2.innerText = 'Main Dishes'

    const myIcon = new Image();
    const text = 'Satisfy your sweet cravings with our luscious chocolate pancakes. Each fluffy bite is a heavenly combination of rich cocoa flavor and indulgent pancake perfection, creating a delightful breakfast or dessert experience.'
    myIcon.src = Icon5;
    myIcon.classList.add('img')
    const chocolatePancake = new Itens('Chocolat Pancake',text, myIcon, '4 R$')
    chocolatePancake.mostrarItens()

    const myIcon2 = new Image();
    const text2 = 'Experience pure indulgence with our decadent chocolate cake. Each moist layer promises a symphony of rich cocoa goodness, creating a heavenly treat for your senses.'
    myIcon2.src = Icon6;
    myIcon2.classList.add('img')
    const chocolatToast = new Itens('Chocolat Toast',text2, myIcon2, '5 R$')
    chocolatToast.mostrarItens()

    const myIcon3 = new Image();
    const text3 = 'Savor the delightful fusion of smooth chocolate spread between layers of soft bread, creating a delectable treat for your sweet cravings. Indulgence, perfectly wrapped in every bite.'
    myIcon3.src = Icon7;
    myIcon3.classList.add('img')
    const chocolatSandwich = new Itens('Chocolat Sandwich (30 UNITS)',text3, myIcon3, '6 R$')
    chocolatSandwich.mostrarItens()

    const myIcon4 = new Image();
    const text4 = 'Indulge in a unique delight as rich chocolate melds with a crisp, golden crust, creating a dessert pizza thats both decadent and satisfying. A sweet twist on a classic favorite.'
    myIcon4.src = Icon8;
    myIcon4.classList.add('img')
    const chocolatPizza = new Itens('Chocolat Pizza',text4, myIcon4, '8 R$')
    chocolatPizza.mostrarItens()

    const myIcon5 = new Image();
    const text5 = 'Treat yourself to the perfect blend of moist vanilla cake and decadent chocolate layers, creating a heavenly confection that captivates the senses with each sumptuous bite.'
    myIcon5.src = Icon9;
    myIcon5.classList.add('img')
    const cakeWhite = new Itens('Cake with white and dark chocolate',text5, myIcon5, '8 R$')
    cakeWhite.mostrarItens()


    const myIcon6 = new Image();
    const text6 = 'Experience the epitome of luxury as our velvety chocolate truffles melt in your mouth, revealing a symphony of rich flavors and a delightful, indulgent center. A treat that transcends ordinary sweetness.'
    myIcon6.src = Icon10;
    myIcon6.classList.add('img')
    const chocolatTruffles = new Itens('Chocolat Truffles',text6, myIcon6, '6 R$')
    chocolatTruffles.mostrarItens()

    const myIcon7 = new Image();
    const text7 = 'Experience a perfect fusion of luscious fruits and decadent chocolate in every moist and flavorful bite. Our cake is a celebration of sweet harmony, combining the richness of chocolate with the freshness of vibrant fruits for an indulgent treat that captivates the senses.'
    myIcon7.src = Icon11;
    myIcon7.classList.add('img')
    const cakeWithFruits = new Itens('Cake with Fruits and Chocolat',text7, myIcon7, '7 R$')
    cakeWithFruits.mostrarItens()

    const myIcon8 = new Image();
    const text8 = 'Indulge in the ultimate dessert experience with our delectable cake paired perfectly with velvety ice cream. Each bite is a symphony of flavors and textures, creating a heavenly treat that satisfies your sweet cravings.'
    myIcon8.src = Icon12;
    myIcon8.classList.add('img')
    const cakeWithIcecream = new Itens('Cake with Ice cream',text8, myIcon8, '6 R$')
    cakeWithIcecream.mostrarItens()
    
  }
}



navBar()
bebidas.addBebidas()
Sides.addSides()
PratosPrincipais.addPratos()


export {head, navBar}



