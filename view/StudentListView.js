function StudentListView (studentList) {
  var studentList = studentList;
  
  this.showStudentList = function (parentListElem, parentInfoElem) {
    var table = document.createElement('table'),
        tbody;
    
    table.innerHTML = studentListTemplate;
    tbody = table.getElementsByTagName('tbody')[0];
    
    studentList.forEach(student => {
      var studentItemView = new StudentItemView(student);
      studentItemView.showStudent(tbody, parentInfoElem);
    });
    
    table.classList.add('simple-little-table');
    return parentListElem.appendChild(table);
  };
  
  return this;
}