interface Person {
	name: string;
	age: number
}

function showInfo(person: Person) {
	return "Hello " + person.name + " " + person.age;
}

let user = {
	name: 'abc',
	age: 22
}

document.body.innerHTML = showInfo(user);