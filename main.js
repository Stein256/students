var students = new StudentList([
  new Student('Alex', 'Hryhoriev', 'male', '20', 'izaya256'),
  new Student('Vladimir', 'Timofeev', 'male', '20', 'vovanium'),
  new Student('Ira', 'someSurname', 'female', '20', 'princess_rina88'),
  new Student('Svetlana', 'Ovcharenko', 'female', '20', 'ami-caty'),
  new Student('Lena', 'Ryndina', 'female', '20', 'dn100980rev'),
  new Student('Polina', 'Zhilyaeva', 'female', '20', 'polina_volna')
]);

var view = new StudentListView(students);

document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('students'),
      listDiv = container.appendChild( document.createElement('div') ),
      infoDiv = container.appendChild( document.createElement('div') );
  view.showTable( listDiv, infoDiv );
}, false);

function addElement (tag, html, parent) {
  var elem = document.createElement(tag);
  elem.innerHTML = html;
  return parent.appendChild(elem);
}