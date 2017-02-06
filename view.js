function createList (objList) {
  var ul = document.createElement('ul'), li, moreInfo, fullInfo;
  
  objList.list.forEach(student => {
    li = document.createElement('li');
    li.innerHTML = student.name + ' ' + student.surname;
    ul.appendChild(li);
    
    moreInfo = document.createElement('span');
    moreInfo.innerHTML = ' ▶';
    moreInfo.style.cursor = 'pointer';
    moreInfo.student = student;
    li.appendChild(moreInfo);
  });
  
  fullInfo = document.createElement('div');
  
  ul.addEventListener("click", function (event) {
    var student = event.target.student;
    if (student && student != fullInfo.student) {
      fullInfo.innerHTML = '';
      
      for (let key in student) {
        fullInfo.innerHTML += key + ': ' + student[key] + '<br>';
      }
      
      fullInfo.student = student;
      event.target.parentElement.appendChild(fullInfo);
    }
  });
  
  return ul;
}