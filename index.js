
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
    }
    
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

for(let i = 0; i< tableheadarray.length; i++){ //for ciklus amely annyiszor fut le mint ammenyi obkjektum van a tableheadarrayben
    /**
     * @type {HTMLTableCellElement} letrehozom a th-t
    */
    const firstth = document.createElement("th") //letrehozok egy th elemet
    firstth.innerText=tableheadarray[i].title //megadom a th szoveget a tableheadarray tombbol
    thead.appendChild(firstth) //hozzaadom a th elemet a tablazathoz
}

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

    /**
     * @type {HTMLTableCellElement} letrehozom a td-t
    */
    const firsttd=document.createElement("td") //letrehozok egy td elemet
    firsttd.innerText=tablebodyarray[i].szerzo //megadom a td szooveget a tombol
    tablerow.appendChild(firsttd) //hozzaadom  a td elemet a tr-hez 

    /**
     * @type {HTMLTableCellElement} letrehozom a td-t
    */
    const secondtd=document.createElement("td") //letrehozok egy td elemet
    secondtd.innerText=tablebodyarray[i].remekmu //megadom a td szooveget a tombol
    tablerow.appendChild(secondtd) //hozzaadom  a td elemet a tr-hez 

    /**
     * @type {HTMLTableCellElement} letrehozom a td-t
    */
    const thirdtd=document.createElement("td") //letrehozok egy td elemet
    thirdtd.innerText=tablebodyarray[i].karakter //megadom a td szooveget a tombol
    tablerow.appendChild(thirdtd) //hozzaadom  a td elemet a tr-hez 

    /**
     * @type {HTMLTableCellElement} letrehozom a td-t
    */
    const fourthtd=document.createElement("td") //letrehozok egy td elemet
    fourthtd.innerText=tablebodyarray[i].secondkarakter //megadom a td szooveget a tombol
    tablerow.appendChild(fourthtd) //hozzaadom  a td elemet a tr-hez 

    
}







