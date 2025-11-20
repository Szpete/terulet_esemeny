
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
    
    /**
    * @type {HTMLTableCellElement} letrehozom a thelement valtozot
    */
    const thelement=document.createElement("th") //letrehozok egy th elemet
    thelement.innerText=tableheadarray[i].title //beallitom a th szoveget a megfelelo stringre  a tableheaderray tombbol az i indexu objektum title alapjan
    thead.appendChild(thelement) //hozzaadom a th-t a thead-hez
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
    * @type {HTMLTableCellElement}  valtozo amiben egy td elem van
    */
    const firsttd=document.createElement("td") //letrehozok egy td elemet
    firsttd.innerText=tablebodyarray[i].region //beallitom a td szoveget a megfelelo stringre  a tablebodyerray tombbol az i indexu objektum title alapjan
    tablerow.appendChild(firsttd) //hozzaadom az elso td-t az trhez
    
    /**
    * @type {HTMLTableCellElement} valtozo amiben egy td elem van
    */
    const secondtd=document.createElement("td") //letrehozok egy td elemet
    secondtd.innerText=tablebodyarray[i].year //beallitom a td szoveget a megfelelo stringre  a tablebodyerray tombbol az i indexu objektum title alapjan
    tablerow.appendChild(secondtd) //hozzaadom az masdik td-t az trhez

    /**
    * @type {HTMLTableCellElement}  valtozo amiben egy td elem van
    */
    const thirdtd=document.createElement("td") //letrehozok egy td elemet
    thirdtd.innerText=tablebodyarray[i].event //beallitom a td szoveget a megfelelo stringre  a tablebodyerray tombbol az i indexu objektum title alapjan
    tablerow.appendChild(thirdtd) //hozzaadom az harmadik td-t az trhez

    if(tablebodyarray[i].secondyear && tablebodyarray[i].secondevent){ //ha az i indexu objektumnak van secondyear es secondevent tulajdonsga akkor ...

        /**
         * @type {HTMLTableRowElement} letrehozok egy tablerow-t
        */
        const secondtablerow=document.createElement("tr") //letrehozok egy tr elemet
        tbody.appendChild(secondtablerow) //hozzaadom a tr elemet a tablazathoz

        /**
        * @type {HTMLTableCellElement} valtozo amiben egy td elem van
        */
        const fourthtd=document.createElement("td") //letrehozok egy td elemet
        fourthtd.innerText=tablebodyarray[i].secondyear //beallitom a td szoveget a megfelelo stringre  a tablebodyerray tombbol az i indexu objektum title alapjan
        secondtablerow.appendChild(fourthtd) //hozzaadom az elso td-t az trhez

        /**
        * @type {HTMLTableCellElement}  valtozo amiben egy td elem van
        */
        const fifthtd=document.createElement("td") //letrehozok egy td elemet
        fifthtd.innerText=tablebodyarray[i].secondevent //beallitom a td szoveget a megfelelo stringre  a tablebodyerray tombbol az i indexu objektum title alapjan
        secondtablerow.appendChild(fifthtd) //hozzaadom az elso td-t az trhez

        firsttd.rowSpan=2 //beallitom az elso td rowSpan erteket 2-re
    }










}








