class RootComponent extends HTMLElement {
    name ='root'
    constructor( ) {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        // shadow.innerHTML = `TGESHH`
    }

    static get observedAttributes(){
        return ['info']
    }

}

// class HiddenInfo extends RootComponent{
// constructor(){
//     super()
// }




// connectedCallback(){
//     this.shadow.innerHTML = `
//     <div class="pluswrapper">
//     <button class="plus">+</button>
//     <p class="info hidden"></p>
//   </div>
//     `
// }
// }

class Pluswrapper extends RootComponent {
name ='plus'
constructor(){
    super()
    this.shadow = this.attachShadow({mode: 'open'})
   
}

connectedCallback(){
    const info = this.getAttribute('info')
    this.shadow.innerHTML =`
    <div class="pluswrapper">
 <hidden-info title=${info}></hidden-info>
  </div>
    `
}
}

customElements.define('hidden-info', HiddenInfo)
customElements.define('plus-component', Pluswrapper)