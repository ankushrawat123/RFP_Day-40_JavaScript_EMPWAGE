//UC1 using if else
{
    const isAbsent = 0;
    let num = Math.floor(Math.random() * 10) % 2;
    if (num == isAbsent) {
        console.log("Employee is Absent");
    }
    else {
        console.log("Employee is Present");
    }
}

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

//UC5 using While loop
{

    const maxEmpHrs = 160;
    const numOfWorkingDays=20;
    const partTimeEmp =1;
    const fullTimeEmp =2;
    const partTimeHour=4;
    const fullTimeHour=8;
    const wagePerHour=20;
    
    let totalEmpHours=0;
    let totalEmpDays=0;

    function empHrsFinder(num)
    {

        switch(num)
        {
        case partTimeEmp:
            return partTimeHour;
            case fullTimeEmp:
                return fullTimeHour;
                default:
                    return 0;
        }

    }
    
    while(totalEmpHours<=maxEmpHrs && totalEmpDays<numOfWorkingDays)
    {
        let num = Math.floor(Math.random()*10)%3;
        let empHrs = empHrsFinder(num);
        totalEmpHours += empHrs;
        totalEmpDays++;
    }
    let empWage = wagePerHour*totalEmpHours;
    console.log("Working Hours " + totalEmpHours + " Total Employee Wage " + empWage);
}