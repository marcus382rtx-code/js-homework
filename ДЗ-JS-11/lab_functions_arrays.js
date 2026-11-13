const grades = [10, 8, 12, 7, 9, 11];

for (let i = 0; i < grades.length; i++) {
    console.log("Оцінка " + (i + 1) + ": " + grades[i]);
}
console.log("Кількість оцінок: " + grades.length);

function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length;
}

function findMaxGrade(grades) {
    let max = grades[0];
    for (let i = 1; i < grades.length; i++) {
        if (grades[i] > max) {
            max = grades[i];
        }
    }
    return max;
}

function countHighGrades(grades) {
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 10) {
            count++;
        }
    }
    return count;
}

function showResults(grades) {
    let list = "";
    for (let i = 0; i < grades.length; i++) {
        list += grades[i];
        if (i < grades.length - 1) {
            list += ", ";
        }
    }

    console.log("");
    console.log("===== АНАЛІЗ ОЦІНОК =====");
    console.log("");
    console.log("Оцінки студента: " + list);
    console.log("");
    console.log("Кількість оцінок: " + grades.length);
    console.log("Середній бал: " + calculateAverage(grades));
    console.log("Найвища оцінка: " + findMaxGrade(grades));
    console.log("Кількість високих оцінок: " + countHighGrades(grades));
    console.log("");
    console.log("=========================");
}

showResults(grades);
