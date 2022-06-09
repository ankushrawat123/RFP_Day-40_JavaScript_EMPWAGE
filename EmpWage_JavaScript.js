//UC2 using switch case
{
    const isAbsent = 0;
    const partTimeEmp = 1;
    const fullTimeEmp = 2;
    const partTimeHour = 4;
    const fullTimeHour = 8;
    const wagePerHour = 20;

    let empHrs = 0;
    let num = Math.floor(Math.random() * 10) % 3;
    switch (num) {

        case partTimeEmp:
            empHrs = partTimeHour;
            break;
        case fullTimeEmp:
            empHrs = fullTimeHour;
            break;
        default:
            empHrs = 0;

    }
    let empWage = wagePerHour * empHrs;
    console.log("Employee wage is " + empWage);
}
