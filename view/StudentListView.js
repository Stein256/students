function StudentListView (studentList) {
  this.studentList = studentList;
  return this;
}

StudentListView.prototype.showTable = function (parentElem) {
  var firstStudent = this.studentList.list[0],
      table, tBody, tr, cell, studentInfo, studentInfoDiv, currentInfoView;
  
  table = document.createElement('table');
  tBody = table.appendChild( document.createElement('tbody') );
  
  tr = tBody.appendChild( document.createElement('tr') );
  studentInfo = firstStudent.getShortForm();
  for (let name in studentInfo) {
    cell = document.createElement('th');
    cell.innerHTML = name;
    tr.appendChild(cell);
  }
  
  cell = document.createElement('th');
  cell.innerHTML = 'more info';
  tr.appendChild(cell);
  
  this.studentList.list.forEach(student => {
    tr = tBody.appendChild( document.createElement('tr') );
    
    studentInfo = student.getShortForm();
    for (let name in studentInfo) {
      cell = document.createElement('td');
      cell.innerHTML = studentInfo[name];
      tr.appendChild(cell);
    }
    
    cell = document.createElement('td');
    cell.innerHTML = 'click';
    cell.classList.add('more-info');
    cell.studentView = new StudentInfoView (student);
    tr.appendChild(cell);
  });
  
  studentInfoDiv = document.getElementById('student-info');
  
  table.addEventListener("click", function (event) {
    var studentView = event.target.studentView;
    if (studentView && studentView != currentInfoView) {
      studentInfoDiv.innerHTML = '';
      studentView.showInfo(studentInfoDiv);
      currentInfoView = studentView;
    }
  });
  
  table.classList.add('simple-little-table')
  parentElem.appendChild(table);
}