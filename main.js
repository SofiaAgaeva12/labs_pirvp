function makeSchoolchild(name, age, gender, weight, growth) {
    return {
        name,
        age,
        gender,
        weight,
        growth
    };
}

let schoolchildren = [];

function createObjects(func) {
    alert('Введите значения')
    let name = prompt('Имя');
    let age = prompt('Возраст');
    let gender = prompt('Пол');
    let weight = prompt('Вес');
    let growth = prompt('Рост');
    let schoolchild = [
        name,
        age,
        gender,
        weight,
        growth
    ]

    schoolchildren += [JSON.stringify(schoolchild.join(', '))]
    return schoolchildren
}

function viewSchoolchild(...item) {
    let isTrue = confirm('Посмотреть данные')
    if (isTrue) {
        let schoolchild = schoolchildren.slice(0, schoolchildren.length)
        alert(schoolchild)
    }
}

function methods() {
    createObjects(makeSchoolchild)
    viewSchoolchild()
}

methods()