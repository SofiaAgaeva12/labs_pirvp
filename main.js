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

function createObjects() {
    if(confirm('Введите значения')){
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

        schoolchildren += [schoolchild.join(', ') + ', ']
        viewSchoolchild()
        return schoolchildren
    }
    else searchOutputValues()
}

function viewSchoolchild() {
    if (confirm('Посмотреть данные')) {
        alert(schoolchildren)
        addSchoolchild()
    }
    else addSchoolchild()
}

function addSchoolchild() {
   if (confirm('Добавить объект школьника')) createObjects()
    else searchOutputValues()
}

function searchOutputValues() {
    if(confirm('Поиск данных школьника')) {
        let indexName = schoolchildren.indexOf(prompt('Имя'))
        alert(schoolchildren.slice(indexName, indexName+15))
    }
}

createObjects()