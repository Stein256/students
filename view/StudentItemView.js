function StudentItemView (student) {
  var student = student,
      studentInfoElem, parentInfoElem;
  
  this.showStudent = function (parentItemElem, _parentInfoElem) {
    var studentInfo = student.getShortForm(),
        tr = document.createElement('tr'),
        button;
    
    tr.innerHTML = renderTemplate(studentItemTemplate, studentInfo);
    
    parentInfoElem = _parentInfoElem;
    button = tr.getElementsByClassName('more-info')[0];
    button.addEventListener('click', showInfo, false);
    
    return parentItemElem.appendChild(tr);
  };
  
  function showInfo () {
    var oldInfoElem, studentInfoView;
    
    if (!studentInfoElem) {
      studentInfoView = new StudentInfoView (student);
      studentInfoElem = studentInfoView.showStudentInfo(parentInfoElem);
    }
    
    oldInfoElem = parentInfoElem.firstChild;
    
    if (oldInfoElem != studentInfoElem) {
      parentInfoElem.replaceChild(studentInfoElem, oldInfoElem);
    }
  }
  
  return this;
}