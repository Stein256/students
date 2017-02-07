function Student (name, surname, gender, age, skype) {
  this.name = name;
  this.surname = surname;
  this.gender = gender;
  this.age = age;
  this.skype = skype;
  
  return this;
}

Student.prototype.getShortForm = function () {
  return {
    fullName: this.name + ' ' + this.surname,
    age: this.age,
    gender: this.gender
  };
}

Student.prototype.getFullForm = function () {
  return {
    name: this.name,
    surname: this.surname,
    age: this.age,
    gender: this.gender,
    skype: this.skype
  };
}