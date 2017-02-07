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
    cell = document.createElement('th');
    cell.innerHTML = name;
    tr.appendChild(cell);
    
    cell = document.createElement('td');
    cell.innerHTML = studentInfo[name];
    tr.appendChild(cell);
  }
  
  table.classList.add('simple-little-table')
  parentElem.appendChild(table);
}