// Если у тебя есть деньги >1000 или есть скидка true → можно купить новый телефон
// let money = 1000;
// let sale = false;

// if (money >= 1000 || sale === true) {
//     console.log(true)
// } else (
//     console.log(false)
// )

// function canRentCar(age, hasLicense, isDrunk, country) {
//     if (country === "RU") {
//         if (age >= 20 && hasLicense && !isDrunk) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     } else if (country === "DE") {
//         if (age >= 21 && hasLicense && !isDrunk && age >= 23) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     } else if (country === "US") {
//         if (age >= 25 || age >= 18 && hasLicense && !isDrunk) {
//             console.log(true);
//         } else (
//             console.log(false)
//         )
//     } else {
//         console.log("другие страны не подерживаются")
//     }
// }

// console.log(canRentCar(20, true, false, "RU"));
// console.log(canRentCar(21, true, false, "DE"));
// console.log(canRentCar(25, false, true, "US"));

function canEnterClub(age, hasVIPPass, isDrunk, dayOfWeek) {
const weekends = (dayOfWeek === "Friday" || dayOfWeek === "Saturday" || dayOfWeek === "Sunday");

    if (weekends) {
        if (!isDrunk) {
            if (hasVIPPass && age >= 18) {
                console.log(true)
            } else if (!hasVIPPass && age >= 21) {
                console.log(true)
            } else (
                console.log(false)
            )
        } else (
            console.log(false)
        )
    } else {
        if (!isDrunk) {
            if (hasVIPPass) {
                console.log(true)
            } else if (age >= 18) {
                console.log(true)
            } else {
                console.log(false)
            }
        } else {
            console.log(false)
        }
    }
}

console.log(canEnterClub(18, false, false));
