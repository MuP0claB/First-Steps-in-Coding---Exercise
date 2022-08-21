function radiansToDegree(input) {
    let radian = Number (input[0]);
    let radian1 = Number (input[1]);
    let degree = radian * 180 / Math.PI;
    let degree1 = radian1 * 180 / Math.PI;
    console.log(degree);
    console.log(degree1);
}

radiansToDegree(["3.1416","6.2832"]);