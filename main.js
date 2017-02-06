var students = new StudentList([
  new Student('Alex', 'Hryhoriev', 'male', 'izaya256', '0961572355'),
  new Student('Vladimir', 'Timofeev', 'male', 'vovanium', '0687412356'),
  new Student('Ira', 'someSurname', 'female', 'princess_rina88', '0568758123'),
  new Student('Svetlana', 'Ovcharenko', 'female', 'ami-caty', '0651234583'),
  new Student('Lena', 'Ryndina', 'female', 'dn100980rev', '0544561235'),
  new Student('Polina', 'Zhilyaeva', 'female', 'polina_volna', '0462134257')
]);

function showStudentList () {
  var list = createList (students)
  list.className = 'student_list';
  document.getElementById('students').appendChild(list);
}

document.addEventListener("DOMContentLoaded", showStudentList);