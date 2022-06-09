//UC4 using for loop
{
    const numOfWorkingDays = 20;
    const partTimeEmp = 1;
    const fullTimeEmp = 2;
    const partTimeHour = 4;
    const fullTimeHour = 8;
    const wagePerHour = 20;

    let totalEmpHours = 0;

    function empHrsFinder(num) {
        switch (num) {
            case partTimeEmp:
                return partTimeHour;
            case fullTimeEmp:
                return fullTimeHour;
            default:
                return 0;
        }
    }

    for (let day = 0; day <= numOfWorkingDays; day++) {
        let num = Math.floor(Math.random() * 10) % 3;
        totalEmpHours += empHrsFinder(num);;
    }
    let empWage = totalEmpHours * wagePerHour;
    console.log("Total Employee Hours : " + totalEmpHours + " Employee Wage " + empWage);
}

