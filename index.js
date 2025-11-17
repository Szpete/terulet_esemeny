/**
 * @type {string} string valtozo amiben a tablazat fejlecenek elso eleme van
 */
const thfirstitem="Terület"; //th elso eleme
/**
 * @type {string} string valtozo amiben a tablazat fejlecenek masdik eleme van
 */
const thseconditem="Évszám"; //th masodik eleme
/**
 * @type {string} string valtozo amiben a tablazat fejlecenek harmadik eleme van
 */
const ththirditem="Esemény"; //th harmadik eleme

/**
 * @type {string} string valtozo amiben a tablazat elso soranak elso eleme van
 */
const firsttrfirstitem="Amerika"; //elso sor elso eleme
/**
 * @type {string} string valtozo amiben a tablazat elso soranak masodik eleme van
 */
const firsttrseconditem="1860-1865"; //elso sor masodik eleme
/**
 * @type {string} string valtozo amiben a tablazat elso soranak harmadik eleme van
 */
const firsttrthirditem="polgárháború"; //elso sor harmadik eleme

/**
 * @type {string} string valtozo amiben a tablazat masodik soranak elso eleme van
 */
const secondtrfirstitem="Európa"; //masodik sor elso eleme
/**
 * @type {string} string valtozo amiben a tablazat masodik soranak masodik eleme van
 */
const secondtrseconditem="1914 június 28"; //masodik sor masodik eleme
/**
 * @type {string} string valtozo amiben a tablazat masodik soranak harmadik eleme van
 */
const secondtrthirditem="merénylet szarajevóban"; //masodik sor harmadik eleme
/**
 * @type {string} string valtozo amiben a tablazat masodik soranak negyedik eleme van
 */
const secondtrfourthitem="1526 július 29"; //masodik sor negyedik eleme
/**
 * @type {string} string valtozo amiben a tablazat masodik soranak otodik eleme van
 */
const secondtrfifthitem="A mohácsi csata"; //masodik sor otodik eleme

/**
 * @type {string} string valtozo amiben a tablazat harmadik soranak elso eleme van
 */
const thirdtrfirstitem="Oroszország"; //harmadik sor elso eleme
/**
 * @type {string} string valtozo amiben a tablazat harmadik soranak masodik eleme van
 */
const thirdtrseconditem="1917"; //harmadik sor masodik eleme
/**
 * @type {string} string valtozo amiben a tablazat harmadik soranak harmadik eleme van
 */
const thirdtrthirditem="Oroszországi forradalom és bolsevik hatalomátvétel"; //harmadik sor harmadik eleme
/**
 * @type {string} string valtozo amiben a tablazat harmadik soranak negyedik eleme van
 */
const thirdtrfourthitem="1933"; //harmadik sor negyedik eleme 
/**
 * @type {string} string valtozo amiben a tablazat harmadik soranak otodik eleme van
 */
const thirdtrfifthitem="Szovjetúnió megalakulása"; //harmadik sor otodik eleme

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

/**
 * @type {HTMLTableCellElement} firstth valtozo amiben a th elso elem van
 */
const firstth=document.createElement("th") //letrehozok egy th elemet
firstth.textContent=thfirstitem //beallitom a th elso elem szoveget a megfelelo valtozora
thead.appendChild(firstth) //hozzaadom a th elso elemet a thead-hoz

/**
 * @type {HTMLTableCellElement} secondth valtozo amiben a th masodik elem van
 */
const secondth=document.createElement("th") //letrehozok egy th elemet
secondth.textContent=thseconditem //beallitom a th masodik elem szoveget a megfelelo valtozora
thead.appendChild(secondth) //hozzaadom a th masodik elemet a thead-hoz

/**
 * @type {HTMLTableCellElement} thirdth valtozo amiben a th harmadik elem van
 */
const thirdth=document.createElement("th") //letrehozok egy th elemet
thirdth.textContent=ththirditem //beallitom a th harmadik elem szoveget a megfelelo valtozora
thead.appendChild(thirdth) //hozzaadom a th harmadik elemet a thead-hoz

/**
 * @type {HTMLTableRowElement} firsttr valtozo amiben a tr elso sor van
 */
const firsttr=document.createElement("tr") //letrehozok egy tr elemet
table.appendChild(firsttr) //hozzaadom a tr elemet a tablazathoz

/**
 * @type {HTMLTableCellElement} firsttd valtozo amiben a tr elso soranak elso eleme van
 */
const firsttd=document.createElement("td") //letrehozok egy td elemet
firsttd.textContent=firsttrfirstitem //beallitom a tr elso soranak elso elem szoveget a megfelelo valtozora
firsttr.appendChild(firsttd) //hozzaadom a tr elso soranak elso elemét a tr-hez

/**
 * @type {HTMLTableCellElement} secondtd valtozo amiben a tr elso soranak masodik eleme van
 */
const secondtd=document.createElement("td") //letrehozok egy td elemet
secondtd.textContent=firsttrseconditem //beallitom a tr elso soranak masodik elem szoveget a megfelelo valtozora
firsttr.appendChild(secondtd) //hozzaadom a tr elso soranak masodik elemét a tr-hez

/**
 * @type {HTMLTableCellElement} thirdtd valtozo amiben a tr elso soranak harmadik eleme van
 */
const thirdtd=document.createElement("td") //letrehozok egy td elemet
thirdtd.textContent=firsttrthirditem //beallitom a tr elso soranak harmadik elem szoveget a megfelelo valtozora
firsttr.appendChild(thirdtd) //hozzaadom a tr elso soranak harmadik elemét a tr-hez

/**
 * @type {HTMLTableRowElement} secondtr valtozo amiben a tr masodik sor van
 */
const secondtr=document.createElement("tr") //letrehozok egy tr elemet

table.appendChild(secondtr) //hozzaadom a tr elemet a tablazathoz

/**
 * @type {HTMLTableCellElement} secondtrfirsttd valtozo amiben a tr masodik soranak elso eleme van
 */
const secondtrfirsttd=document.createElement("td") //letrehozok egy td elemet
secondtrfirsttd.textContent=secondtrfirstitem //beallitom a tr masodik soranak elso elem szoveget a megfelelo valtozora
secondtr.appendChild(secondtrfirsttd) //hozzaadom a tr masodik soranak elso elemét a tr-hez

/**
 * @type {HTMLTableCellElement} secondtrsecondtd valtozo amiben a tr masodik soranak masodik eleme van
 */
const secondtrsecondtd=document.createElement("td") //letrehozok egy td elemet
secondtrsecondtd.textContent=secondtrseconditem //beallitom a tr masodik soranak masodik elem szoveget a megfelelo valtozora
secondtr.appendChild(secondtrsecondtd) //hozzaadom a tr masodik soranak masodik elemét a tr-hez

/**
 * @type {HTMLTableCellElement} secondtrthirdtd valtozo amiben a tr masodik soranak harmadik eleme van
 */
const secondtrthirdtd=document.createElement("td") //letrehozok egy td elemet
secondtrthirdtd.textContent=secondtrthirditem //beallitom a tr masodik soranak harmadik elem szoveget a megfelelo valtozora
secondtr.appendChild(secondtrthirdtd) //hozzaadom a tr masodik soranak harmadik elemét a tr-hez

/**
 * @type {HTMLTableCellElement} secondtrfourthtd valtozo amiben a tr masodik soranak negyedik eleme van
 */
const secondtrfourthtd=document.createElement("td") //letrehozok egy td elemet
secondtrfourthtd.textContent=secondtrfourthitem //beallitom a tr masodik soranak negyedik elem szoveget a megfelelo valtozora
secondtr.appendChild(secondtrfourthtd) //hozzaadom a tr masodik soranak negyedik elemét a tr-hez

/**
 * @type {HTMLTableCellElement} secondtrfifthtd valtozo amiben a tr masodik soranak otodik eleme van
 */
const secondtrfifthtd=document.createElement("td") //letrehozok egy td elemet
secondtrfifthtd.textContent=secondtrfifthitem //beallitom a tr masodik soranak otodik elem szoveget a megfelelo valtozora
secondtr.appendChild(secondtrfifthtd) //hozzaadom a tr masodik soranak otodik elemét a tr-hez

/**
 * @type {HTMLTableRowElement} thirdtr valtozo amiben a tr harmadik sor van
 */
const thirdtr=document.createElement("tr") //letrehozok egy tr elemet
table.appendChild(thirdtr) //hozzaadom a tr elemet a tablazathoz

/**
 * @type {HTMLTableCellElement} thirdtrfirsttd valtozo amiben a tr harmadik soranak elso eleme van
 */
const thirdtrfirsttd=document.createElement("td") //letrehozok egy td elemet
thirdtrfirsttd.textContent=thirdtrfirstitem //beallitom a tr harmadik soranak elso elem szoveget a megfelelo valtozora
thirdtr.appendChild(thirdtrfirsttd) //hozzaadom a tr harmadik soranak elso elemét a tr-hez

/**
 * @type {HTMLTableCellElement} thirdtrsecondtd valtozo amiben a tr harmadik soranak masodik eleme van
 */
const thirdtrsecondtd=document.createElement("td") //letrehozok egy td elemet
thirdtrsecondtd.textContent=thirdtrseconditem //beallitom a tr harmadik soranak masodik elem szoveget a megfelelo valtozora
thirdtr.appendChild(thirdtrsecondtd) //hozzaadom a tr harmadik soranak masodik elemét a tr-hez

/**
 * @type {HTMLTableCellElement} thirdtrthirdtd valtozo amiben a tr harmadik soranak harmadik eleme van
 */
const thirdtrthirdtd=document.createElement("td") //letrehozok egy td elemet
thirdtrthirdtd.textContent=thirdtrthirditem //beallitom a tr harmadik soranak harmadik elem szoveget a megfelelo valtozora
thirdtr.appendChild(thirdtrthirdtd) //hozzaadom a tr harmadik soranak harmadik elemét a tr-hez

/**
 * @type {HTMLTableCellElement} thirdtrfourthtd valtozo amiben a tr harmadik soranak negyedik eleme van
 */
const thirdtrfourthtd=document.createElement("td") //letrehozok egy td elemet
thirdtrfourthtd.textContent=thirdtrfourthitem //beallitom a tr harmadik soranak negyedik elem szoveget a megfelelo valtozora
thirdtr.appendChild(thirdtrfourthtd) //hozzaadom a tr harmadik soranak negyedik elemét a tr-hez

/**
 * @type {HTMLTableCellElement} thirdtrfifthtd valtozo amiben a tr harmadik soranak otodik eleme van
 */
const thirdtrfifthtd=document.createElement("td") //letrehozok egy td elemet
thirdtrfifthtd.textContent=thirdtrfifthitem //beallitom a tr harmadik soranak otodik elem szoveget a megfelelo valtozora
thirdtr.appendChild(thirdtrfifthtd) //hozzaadom a tr harmadik soranak otodik elemét a tr-hez

