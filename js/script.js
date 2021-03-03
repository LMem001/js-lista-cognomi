/* Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */

var surname_list = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// ask user's surname
var surname_user = "Malpiedi";
surname_list.push(surname_user);
// sort list
surname_list.sort();
// print list
console.log(surname_list);
// print user position
console.log(surname_list.indexOf(surname_user));
