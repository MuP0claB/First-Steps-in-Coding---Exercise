function converterUsdToBgn (input) {
    let usd = Number (input[0]);
    let usd1 = Number (input[1]);
    let usd2 = Number (input[2]);
    let bgn = usd * 1.79549;
    let bgn1 = usd1 * 1.79549;
    let bgn2 = usd2 * 1.79549;
    console.log(bgn);
    console.log(bgn1);
    console.log(bgn2);
}
converterUsdToBgn(["22","100","12.5"]);
