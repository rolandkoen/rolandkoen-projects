class MealsItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   -webkit-box-sizing: border-box;
                   -moz-box-sizing: border-box; 
                   box-sizing: border-box; 
               }

               :host {
                   display: block;
                   margin-bottom: 20px;
                   margin-top: 20px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 20px;
                   overflow: hidden;
                   -moz-box-sizing: padding-box;
                   -webkit-box-sizing: padding-box;
                   box-sizing: padding-box;
                   background: #eee;
                   border: 0.6px solid #01796F;
                   padding: 10px;
               }
              
               .image-meals {
                   width: 300px;
                   height: auto;                 
                   display: block;
                   margin-left: auto;
                   margin-right: auto;
                   border-radius: 20px;                
               }
              
               .meals-info {
                   padding: 10px;
               }
              
               .meals-info > h4 {
                   font-weight: bold;
                   text-align: center;
               }
              
               .meals-info > p {
                   margin-top: 20px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 34;
                   font-size: 13px;
                   text-align:justify;
               }

           </style>
           <img class="image-meals" src="${this._meals.strMealThumb}" alt="Image">
           <div class="meals-info">
               <h4>Name : ${this._meals.strMeal}</h4>
               <h4>Category : ${this._meals.strCategory}</h4>
               <h4>Instructions :</h4>
               <p>${this._meals.strInstructions}</p>
           </div>`;
    }
}

customElements.define("meals-item", MealsItem);