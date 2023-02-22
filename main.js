// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser (firstName, lastName) {
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}

function setAge(user, num) {
    user.age = num
    return user
}

function incrementAge(user) {
    user.age = user.age + 1
    return user
}

function fixCar(car) {
    car.needsMaintenance = false
    return car
}

function addGrades(student, newGrades) {
    for (let i = 0; i < newGrades.length; i++) {
        student.grades.push(newGrades[i])
    }
    return student
}

function getDataType(car, x) {
    return typeof car[x]
}

function addTodo(todos, newTodo) {
    todos.push(newTodo)
    return todos
}

function addSong(playlist, newSong) {
    playlist.duration += newSong.duration
    playlist.songs.push(newSong)
    return playlist
}

function updateReportCard(reportCard, grade) {
    if (grade > reportCard.highestGrade) {
        reportCard.highestGrade = grade
    } 
    if (grade < reportCard.lowestGrade) {
        reportCard.lowestGrade = grade
    }
    reportCard.grades.push(grade)

    let sum = 0

    for (let i = 0; i < reportCard.grades.length; i++) {
        sum += reportCard.grades[i]
    }
    
    reportCard.averageGrade = sum / reportCard.grades.length

    return reportCard
}

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
