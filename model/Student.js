function Student (name, surname, gender, birthday, skype) {
  var name = name,
      surname = surname,
      gender = gender,
      birthday = birthday,
      skype = skype;
      
  this.getShortForm = function () {
    return {
      fullName: name + ' ' + surname,
      age: getAge(birthday),
      gender: gender
    };
  };
  
  this.getFullForm = function () {
    return {
      name: name,
      surname: surname,
      age: getAge(birthday),
      birthday: birthday.toDateString(),
      gender: gender,
      skype: skype
    };
  };
  
  function getAge (birthday) {
    return new Date(Date.now() - birthday).getFullYear() - 1970;
  }
  
  return this;
}