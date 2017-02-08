function StudentInfoView (student) {
  this.student = student;
  return this;
}

StudentInfoView.prototype.showInfo = function (parentElem) {
  var studentInfo = this.student.getFullForm(),
      table, tBody, tr, cell;
  
  table = document.createElement('table');
  tBody = table.appendChild( document.createElement('tbody') );
  
  for (let name in studentInfo) {
    tr = tBody.appendChild( document.createElement('tr') );
    addElement('th', name, tr);
    addElement('td', studentInfo[name], tr);
  }
  
  table.classList.add('simple-little-table')
  parentElem.appendChild(table);
}