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
