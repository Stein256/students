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
  view.showTable( document.getElementById('students') );
}, false);