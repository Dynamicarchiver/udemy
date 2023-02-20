const name = "Boluwatife Adeyemi"
function utme(...scores) {
    let aggScore = 0;
    for (score in scores) {
        aggScore = aggScore + scores[score];
    }
    return aggScore;
}

const utmeScore = utme(50, 50, 50, 36);
const age = 18;

if (utmeScore >= 180 && age >= 16) {
    // console.log(`${name}, your utme result is ${utmeScore} and you can now proceed for LASU screening`);
    const utmePoint = utmeScore / 8;

function lasuScreening(...subjects) {
    let oLevelResult = 0;
    for(subject in subjects) {
        let point;
        if (subjects[subject] >= 80) {
            point = 10;
        }
        else if (subjects[subject] < 80 && subjects[subject] >= 70) {
            point = 9;
        }
        else if(subjects[subject] < 70 && subjects[subject] >= 60) {
            point = 8;
        }
        else {
            point = 7;
        }

        oLevelResult = oLevelResult + point;
    }
    return oLevelResult;
}
const oLevelPoint = lasuScreening(80,68,75,87,73);
const total = utmePoint + oLevelPoint;

console.log(`Hi ${name}, your utme result is: ${utmeScore} and your utme point is: ${utmePoint} and your o-level point is: ${oLevelPoint}`);
console.log(`${name}, your total admission screening piont is: ${total}`)


}
else {
    console.log(`${name} sorry but you dont meet the requirement for LASU`)
}


