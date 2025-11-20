
/**
 *  @type {{region:string, year:string, event:string}[]} tableheadarray tomb amely objektumokat tartalmaz a tablazat fejlecehez
 */
const tableheadarray=[ //tableheadarray valtozo deklaralasa, array tipusu tomb
    {//elso objektum
        title:'Terület', //objektum region tulajdonsaganak string erteket adunk
    },
    {//masodik objektum
        title:'Évszám', //objektum year tulajdonsaganak string erteket adunk
    },
    {//harmadik objektum
        title:'Esemény', //objektum event tulajdonsaganak string erteket adunk
    }
]

/**
 * @type {{region:string, year:string, event:string, secondyear?:string, secondevent?:string}[]} tablebodyarray tomb amely objektumokat tartalmaz a tbody-hez
 */
const tablebodyarray=[ //tablebodyarray valtozo deklaralasa, array tipusu tomb
    {//elso objektum
        region:'Amerika', //objektum region tulajdonsaganak string erteket adunk

        year:'1860-1865', //objektum year tulajdonsaganak string erteket adunk

        event:'polgárháború' //objektum event tulajdonsaganak string erteket adunk
    },
    {//masodik objektum
        region:'Európa', //objektum region tulajdonsaganak string erteket adunk
        year:'1914 június 28', //objektum year tulajdonsaganak string erteket adunk
        event:'merénylet szarajevóban', //objektum event tulajdonsaganak string erteket adunk
        secondyear:'1914 július 28', //objektum secondyear tulajdonsaganak string erteket adunk
        secondevent:'A mohácsi csata' //objektum secondevent tulajdonsaganak string erteket adunk
    },
    {//harmadik objektum
        region:'Oroszország', //objektum region tulajdonsaganak string erteket adunk
        year:'1917', //objektum year tulajdonsaganak string erteket adunk
        event:'Oroszországi forradalom és bolsevik hatalomátvétel', //objektum event tulajdonsaganak string erteket adunk
        secondyear:'1933', //objektum secondyear tulajdonsaganak string erteket adunk
        secondevent:'Szovjetúnió megalakulása' //objektum secondevent tulajdonsaganak string erteket adunk
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
    
    CreateCellElement("th", tableheadarray[i].title, thead) //meghivom a CreateCellElement fuggvenyem amivel a th-kat letrehozom, es megadom neki a megfelelo parametereket
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
     * @type {HTMLTableCellElement} firsttd valtozo amiben az elso td elem van
    */
    const firsttd = CreateCellElement("td", tablebodyarray[i].region, tablerow) //meghivom a CreateCellElement fuggvenyem amivel a td-ket letrehozom, es megadom neki a megfelelo parametereket
    
    CreateCellElement("td", tablebodyarray[i].year, tablerow) //meghivom a CreateCellElement fuggvenyem amivel a td-ket letrehozom, es megadom neki a megfelelo parametereketz trhez

    CreateCellElement("td", tablebodyarray[i].event, tablerow) //meghivom a CreateCellElement fuggvenyem amivel a td-ket letrehozom, es megadom neki a megfelelo parametereket
    
    if(tablebodyarray[i].secondyear && tablebodyarray[i].secondevent){ //ha az i indexu objektumnak van secondyear es secondevent tulajdonsga akkor ...

        /**
         * @type {HTMLTableRowElement} letrehozok egy tablerow-t
        */
        const secondtablerow=document.createElement("tr") //letrehozok egy tr elemet
        tbody.appendChild(secondtablerow) //hozzaadom a tr elemet a tablazathoz

        CreateCellElement("td", tablebodyarray[i].secondyear, secondtablerow) //meghivom a CreateCellElement fuggvenyem amivel a td-ket letrehozom, es megadom neki a megfelelo parametereket

        CreateCellElement("td", tablebodyarray[i].secondevent, secondtablerow) //meghivom a CreateCellElement fuggvenyem amivel a td-ket letrehozom, es megadom neki a megfelelo parametereket
        
        firsttd.rowSpan=2 //beallitom az elso td rowSpan erteket 2-re
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




