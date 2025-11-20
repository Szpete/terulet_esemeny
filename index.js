
/**
 *  @type {{title:string, title:string, title:string}[]} tableheadarray tomb amely objektumokat tartalmaz a tablazat fejlecehez
 */
const tableheadarray=[ //tableheadarray valtozo deklaralasa, array tipusu tomb
    {//elso objektum
        title:'Szerző', //objektum title tulajdonsaganak string erteket adunk
    },
    {//masodik objektum
        title:'Mű', //objektum title tulajdonsaganak string erteket adunk
    },
    {//harmadik objektum
        title:'Szereplő', //objektum title tulajdonsaganak string erteket adunk
    },
   
]

/**
 * @type {{szerzo:string, remekmu:string, karakter:string, secondkarakter:string}[]} tablebodyarray tomb amely objektumokat tartalmaz a tbody-hez
 */
const tablebodyarray=[ //tablebodyarray valtozo deklaralasa, array tipusu tomb
    {//elso objektum
        szerzo:'Katona József', //objektum szerzo tulajdonsaganak string erteket adunk
        remekmu:'Bánk bán', //objektum remekmu tulajdonsaganak string erteket adunk
        karakter:'Gertrudis királyné' //objektum karakter tulajdonsaganak string erteket adunk

    },
    {//masodik objektum
        szerzo:'Mikszáth Kálmán', //objektum szerzo tulajdonsaganak string erteket adunk
        remekmu:'Beszterce ostroma', //objektum remekmu tulajdonsaganak string erteket adunk
        karakter:"Pongrác István gróf", //objektum karakter tulajdonsaganak string erteket adunk
        secondkarakter:'Estella', //objektum secondkarakter tulajdonsaganak string erteket adunk
        
    },
    {//harmadik objektum
        szerzo:'Arany János', //objektum szerzo tulajdonsaganak string erteket adunk
        remekmu:'Toldi', //objektum remekmu tulajdonsaganak string erteket adunk
        karakter:"Toldi Miklós" //objektum karakter tulajdonsaganak string erteket adunk
       
    }
]




/**
 * @type {HTMLTableElement} tablazat valtozo amiben a tablazat elem van
 */
const table=document.createElement("table") //letrehozok egy tablazat elemet
document.body.appendChild(table) //hozzaadom a tablazatot a body-hoz

/**
 * @type {HTMLTableSectionElement} thead valtozo amiben a thead elem van
 */
const thead=document.createElement("thead") //letrehozok egy thead elemet
table.appendChild(thead) //hozzaadom a thead elemet a tablazathoz

CreateTHCellElement("th", tableheadarray[0].title, thead) //meghivom azt a fuggvenyt ami a th elemet hozza letre 
CreateTHCellElement("th", tableheadarray[1].title, thead) //meghivom azt a fuggvenyt ami a th elemet hozza letre

/**
 * @type {HTMLTableCellElement} thirdth valtozo amiben egy fuggven eredmenye van eltarolva
 */ 
const thirdth=CreateTHCellElement("th", tableheadarray[0].title, thead) //meghivom azt a fuggvenyt ami a th elemet hozza letre, es eltarolom egy valtozoban 

/**
 * @type {HTMLTableSectionElement} tbody valtozo amiben a tbody elem van
 */
const tbody=document.createElement("tbody") //letrehozok egy tbody elemet
table.appendChild(tbody) //hozzaadom a tbody elemet a tablazathoz


for(let i = 0; i<tablebodyarray.length; i++){ //for ciklus amely annyiszor fut le mint ammenyi obkjektum van a tablebodyarrayben

    /**
     * @type {HTMLTableRowElement} letrehozok egy tablerow-t
    */
    const tablerow=document.createElement("tr") //letrehozok egy tr elemet
    tbody.appendChild(tablerow) //hozzaadom a tr elemet a tablazathoz

    CreateCellElement("td", tablebodyarray[i].szerzo, tablerow) //meghivom a fuggvenyt a megfelelo parameterekkel 
    CreateCellElement("td", tablebodyarray[i].remekmu, tablerow) //meghivom a fuggvenyt a megfelelo parameterekkel 

    /**
     * @type {HTMLTableCellElement} letrehozom a td-t
    */
    const thirdtd = CreateCellElement("td", tablebodyarray[i].karakter, tablerow) //meghivom a fuggvenyt a megfelelo parameterekkel es eltarolom a thirdtd valtozoban

    

    if(tablebodyarray[i].secondkarakter != undefined){ // ha defined a secondkarakter akkor letrehoz meg egy td-t

       
        CreateCellElement("td", tablebodyarray[i].secondkarakter, tablerow) //meghivom a fuggvenyt a megfelelo parameterekkel 
    }
    else{ //ha undefined a secondkarakter akkor a 3dik td-re tesz egy colspant
        thirdtd.colSpan="2" //rateszi a tdre a colspant
        thirdth.colSpan="2" //rateszi a th-ra a colSpant 
    }
}



/**
 * 
 * @param {string} celltype  //a fuggveny celltype parameterenek string erteket adunk
 * @param {string} cellcontent //a fuggveny cellcontent parameterenek string erteket adunk
 * @param {HTMLTableRowElement} cellrow //a cellrow valtozo amiben a tablerow van
 * @returns {HTMLTableCellElement} 
 */
function CreateCellElement(celltype, cellcontent, cellrow){ //deklaralom a fuggvenyt amivel a td vagy th-kat letrehozom
    /**
    * @type {HTMLTableCellElement} cellelement valtozo amiben egy td vagy th elem van
    */
    const cellelement=document.createElement(celltype) //letrehozok egy tablazat elemet a celltype alapjan
    cellelement.innerText=cellcontent //beallitom az erteket a cellcontent alapjan
    cellrow.appendChild(cellelement) //hozzaadom a cellelementet a cellrowhoz
    return cellelement //visszateritem a cellelmentet
}



/**
 * 
 * @param {string} celltype  //a fuggveny celltype parameterenek string erteket adunk
 * @param {string} cellcontent //a fuggveny cellcontent parameterenek string erteket adunk
 * @param {HTMLTableRowElement} celltype //a cellrow valtozo amiben a tablerow van
 * @returns {HTMLTableCellElement} 
 */
function CreateTHCellElement(celltype, thcellcontent, celltype){ //deklaralom a fuggvenyt amivel a td vagy th-kat letrehozom
    /**
    * @type {HTMLTableCellElement} cellelement valtozo amiben egy td vagy th elem van
    */
    const cellelement=document.createElement(celltype) //letrehozok egy tablazat elemet a celltype alapjan
    cellelement.innerText=thcellcontent //beallitom az erteket a cellcontent alapjan
    celltype.appendChild(cellelement) //hozzaadom a cellelementet a cellrowhoz
    return cellelement //visszateritem a cellelmentet
}
