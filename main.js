var students = new StudentList([
  new Student('Alex', 'Hryhoriev', 'male', new Date(1996, 2, 14), 'izaya256'),
  new Student('Vladimir', 'Timofeev', 'male', new Date(1988, 5, 6), 'vovanium'),
  new Student('Ira', 'Ruban', 'female', new Date(1995, 1, 4), 'princess_rina88'),
  new Student('Svetlana', 'Ovcharenko', 'female', new Date(1996, 0, 1), 'ami-caty'),
  new Student('Lena', 'Ryndina', 'female', new Date(1987, 5, 17), 'dn100980rev'),
  new Student('Polina', 'Zhilyaeva', 'female', new Date(1987, 8, 10), 'polina_volna')
]);

var studentListView = new StudentListView(students);

document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('students'),
      listDiv = container.appendChild( document.createElement('div') ),
      infoDiv = container.appendChild( document.createElement('div') );
  studentListView.showStudentList( listDiv, infoDiv );
}, false);