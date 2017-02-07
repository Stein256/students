function StudentList (students) {
  this.list = [];
  for (let student of students) {
    this.list.push(student);
  }
  
  return this;
}

/*StudentList.prototype.getTable = function() {
  var colNames = Object.keys(this.list[0]),
      table, tBody, tr, cell;
  
  table = document.createElement('table');
  tBody = table.appendChild( document.createElement('tbody') );
  
  tr = tBody.appendChild( document.createElement('tr') );
  colNames.forEach(val => {
    cell = document.createElement('th');
    cell.innerHTML = val;
    tr.appendChild(cell);
  });
  
  this.list.forEach(student => {
    tr = tBody.appendChild( document.createElement('tr') );
    colNames.forEach(val => {
      cell = document.createElement('td');
      cell.innerHTML = student[val];
      tr.appendChild(cell);
    });
  });
  
  return table;
}*/