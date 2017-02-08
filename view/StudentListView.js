function StudentListView (studentList) {
  this.studentList = studentList;
  return this;
}

StudentListView.prototype.showTable = function (parentListElem, parentInfoElem) {
  var firstStudent = this.studentList.list[0],
      table, tBody, tr, cell, studentInfo;
  
  table = document.createElement('table');
  tBody = table.appendChild( document.createElement('tbody') );
  
  tr = tBody.appendChild( document.createElement('tr') );
  studentInfo = firstStudent.getShortForm();
  for (let name in studentInfo) {
    addElement('th', name, tr);
  }
  addElement('th', 'more info', tr);
  
  this.studentList.list.forEach(student => {
    var studentView = new StudentInfoView (student);
    tr = tBody.appendChild( document.createElement('tr') );
    
    studentInfo = student.getShortForm();
    for (let name in studentInfo) {
      addElement('td', studentInfo[name], tr);
    }
    cell = addElement('td', 'click', tr);
    cell.classList.add('more-info');
    
    cell.addEventListener("click", function () {
      parentInfoElem.innerHTML = '';
      studentView.showInfo(parentInfoElem);
      currentInfoView = studentView;
    });
  });
  
  table.classList.add('simple-little-table')
  parentListElem.appendChild(table);
}