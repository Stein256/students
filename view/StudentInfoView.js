function StudentInfoView (student) {
  var student = student;
  
  this.showStudentInfo = function (parentElem) {
    var studentInfo = student.getFullForm(),
        table = document.createElement('table');
    
    table.innerHTML = renderTemplate(studentInfoTemplate, studentInfo);
    
    table.classList.add('simple-little-table');
    return parentElem.appendChild(table);
  };
  
  return this;
}