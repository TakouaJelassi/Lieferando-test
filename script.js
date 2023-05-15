let menus = [

    {
        'Pizza': ['Pizza Tonno', 'Pizza Margherita', 'Pizza Hawaii', 'Pizza Hot Dog', 'Pizza Chicago', 'Pizza Kentucky'],
        'Pasta': ['Bolognese', 'Pasta Quattro Formaggi', 'Pasta Napoli', 'Pasta al Pesto', 'Pasta al Funghi'],
        'Salate': ['Gurken Salat ', 'Tomaten Salat ', 'karotten Salat'],
        'Desserts': ['Tiramisu', 'creme brülee', 'käsekuchen']
    }
];
let prices = [
    {
        'pizza-prices': [12.5, 14.95, 11.95, 16.20, 15.95, 12.45],
        'pasta-prices': [11.95, 16.20, 15.95, 13.20, 17.45],
        'salate-prices': [8.90, 7.95, 11.20],
        'dessert-prices': [8.99, 6.75, 5.45],
    }
]



function render() {
    generateContentHTML('pizza', 'Pizza', 'pizza-prices');
    generateContentHTML('pasta', 'Pasta', 'pasta-prices');
    generateContentHTML('salat', 'Salate', 'salate-prices');
    generateContentHTML('dessert', 'Desserts', 'dessert-prices');
}



function generateBasketHTML() {
    let basket = document.getElementById('basket');
    let x = 1;
    for (let i = 0; i < menus[0]['Pizza'].length; i++) {
        let menu = menus[0]['Pizza'][i];
        let sum = prices[0]['pizza-prices'][i];
        basket.innerHTML += /*html*/ `
                                <div class="summe">
                                    <div> <b>${x} ${menu}</b></div> 
                                    <div>${sum} €</div>
                                 </div>
                                 <div class="add-remove">
                                 <img src="icons/minus.png"  width="30px" style="padding-right: 10px;" ><img src="icons/hinzufügen.png"  width="30px">
                                </div> 
                                <hr>`;
    }



    // basket.innerHTML = /*html*/ `<img src="icons/warenkorb.png" width="50px" style=" align-self: center;">
    //                          <div class="warenkorb"><h2>Fülle deinen Warenkorb</h2> 
    //                          <p style="text-align: center; padding-top: 20px;">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</p></div> `;


    // let menu = 'PIZZA';
    // let sum = '20 euro';
    // korb.innerHTML = /*html*/ `<img src="icons/warenkorb.png" width="50px" style=" align-self: center;">
    //                             <div class="summe">
    //                                 <div>${x} ${menu}</div> 
    //                                 <div>${sum}</div>
    //                              </div>
    //                              <div class="add-remove">
    //                                 <img src="icons/hinzufügen.png"  style="padding-right: 10px;" width="30px"><img src="icons/minus.png"  width="30px">
    //                             </div> `;
}


function generateContentHTML(id, name, price) {
    let content = document.getElementById(id);
    content.innerHTML = '';
    for (let i = 0; i < menus[0][name].length; i++) {
        let menu = menus[0][name][i];
        let kosten = prices[0][price][i];
        content.innerHTML += /*html*/ `
                            <div class="pizza">
                            <div class="addfood" onclick="btnAdd(menu, price)"><h3>${menu}</h3><img  src="icons/hinzufügen.png"  style="padding-right: 10px; cursor: pointer;" width="30px"></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eos, dolores 
                                corrupti nesciunt velit nihil officiis recusandae hic provident. Eos</p> <div class="price">${kosten} €</div></div>
                          
                           `;
    }
}




