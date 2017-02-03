var students = [
  ['Alex', 'male', 'izaya256'],
  ['Vladimir', 'male', 'vovanium'],
  ['Ira', 'female', 'princess_rina88'],
  ['Svetlana', 'female', 'ami-caty'],
  ['Lena', 'female', 'dn100980rev'],
  ['Polina', 'female', 'polina_volna']
].map(row => new Student(...row));

students = new StudentsList(students);

function showStudentsTable () {
  var table = students.getTable();
  table.className = 'students_table';
  document.getElementById('students').appendChild(table);
}

document.addEventListener("DOMContentLoaded", showStudentsTable);