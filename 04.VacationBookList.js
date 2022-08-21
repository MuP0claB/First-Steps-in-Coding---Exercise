function vacationBookList (input) {
    const bookPages = Number (input[0]);
    const pagesPerHour = Number (input[1]);
    const numOfDays = Number(input[2]);
    const totalHoursPerDay = bookPages / pagesPerHour / numOfDays;
    console.log(totalHoursPerDay);
 } 

    vacationBookList(["212","20","2"]);