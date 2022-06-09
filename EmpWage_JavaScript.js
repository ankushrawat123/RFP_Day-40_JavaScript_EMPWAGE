//UC3 using Function
{

    const isPartTime = 1;
    const isFullTime = 2;
    const partTimeHour = 4;
    const fullTimeHour = 8;
    const wagePerHour = 20;
    function empHrsFinder(num) {
        switch (num) {
            case isPartTime:
                return partTimeHour;
            case isFullTime:
                return fullTimeHour;
            default:
                return 0;
        }
    }
    let num = Math.floor(Math.random() * 10) % 3;
    let empHrs = empHrsFinder(num);
    let empWage = empHrs * wagePerHour;
    console.log("Employee Wage : " + empWage + " Employee Hours : " + empHrs);
}

