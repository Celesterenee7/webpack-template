import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){

  const boardSetup = [5,3,'','',7,'','','','',6,'','',1,9,5,'','','','',9,8,'','','','',6,'',8,'','','',6,'','','',3,4,'','',8,'',3,'','',1,7,'','','',2,'','','',6,'',6,'','','','',2,8,'','','','',4,1,9,'','',5,'','','','',8,'','',7,9];
  console.log(boardSetup.length);

  const allBlanks = $(':input');
  for (var i = 0; i < boardSetup.length; i++) {
    if (boardSetup[i]) {
      $(allBlanks[i]).val(boardSetup[i]);
    }
  }

  $('button').click(function() {
    const thisBoard = [];
    let thisRow = [];
    const allNumberInputs = $(':input');
    for (var i = 0; i < allNumberInputs.length; i++) {
      const thisNumber = parseInt($(allNumberInputs[i]).val());
      thisRow.push(thisNumber);
      if (thisRow.length === 9) {
        thisBoard.push(thisRow);
        thisRow = [];
      }
    }
    console.log(thisBoard);

  });
});
