function showInfo(person) {
    return "Hello " + person.name + " " + person.age;
}
var user = {
    name: 'abc',
    age: 22
};
document.body.innerHTML = showInfo(user);
