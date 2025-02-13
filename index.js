/* Your Code Here */

// create an employee record arr
    function createEmployeeRecord(array) {
        return {
            firstName: array[0],
            familyName: array[1],
            title: array[2],
            payPerHour: array[3],
            timeInEvents: [],
            timeOutEvents: []
        };
    }

    // create an array of employee records from an array of arrays 
    function createEmployeeRecords(array) {
        return array.map(createEmployeeRecord);
    }

    // add a timeIn event to the employee's record 
    function createTimeInEvent(dateStamp) {
        let [date, hour] = dateStamp.split(' ');
        this.timeInEvents.push({
            type: "TimeIn",
            hour: parseInt(hour),
            date: date
        });
        return this
    }

    // add a timeOut event to the employee's record
    function createTimeOutEvent(dateStamp) {
        let [date, hour] = dateStamp.split(' ');
        this.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour),
            date: date
        });
        return this
    }

    // calculate hours worked on a given day
    function hoursWorkedOnDate(date) {
        let timeInEvent = this.timeInEvents.find(e => e.date === date);
        let timeOutEvent = this.timeOutEvents.find(e => e.date === date);
        return (timeOutEvent.hour - timeInEvent.hour) / 100;
    }

    // wages earned calculation
    function wagesEarnedOnDate(date) {
        return hoursWorkedOnDate.call(this, date) * this.payPerHour;
    }

    // total wages for all days worked (per employee)
    // const allWagesFor = function () {
    //     const eligibleDates = this.timeInEvents.map(e => e.date);
    //     const payable = eligibleDates.reduce((memo, date) => memo + wagesEarnedOnDate.call(this, date), 0);
    //     return payable;
    // }

    // find an employee by first name 
    function findEmployeeByFirstName(srcArray, firstName) {
        return srcArray.find(employee => employee.firstName === firstName);
    }

    // calculate total wages for ALL employees 
    function calculatePayroll(records) {
        return records.reduce((memo, employee) => memo + allWagesFor.call(employee), 0);
    }


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

