 let grade='';
    // Write your code here
    var score = 11;
    switch (true) {
        case (score > 25 && score <= 30): grade = 'A'; break;
        case (score > 20  ): grade = 'B'; break;
        case (score > 15  ): grade = 'C'; break;
        case (score > 10   ): grade = 'D'; break;
        case (score > 5  ): grade = 'E'; break;
        case (score > 0  ): grade = 'F'; break;
    }
    console.log(grade)