class AppBar extends HTMLElement {
     
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            :host {
                display: flex;
                width: 100%;
                background-color: #01796F;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                position: fixed;
                top: 0;
                letter-spacing: 4px;
               
            }
            
            h2 {
                padding: 16px;
            }
            
        </style>
        <h2>Meals Recipes</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);