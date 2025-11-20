function coverageCalcV2() {
  $(".fs-rangeslider_input.w-input").on("input", function () {
    var coverageValue = parseInt($(this).val());

    if (coverageValue == 10000) {
      $("#tooltip-value").text("< 10,000");
    } else if (coverageValue == 500000) {
      $("#tooltip-value").text("500,000 +");
    } else {
      // Additional conditions can be added here if needed
    }

    let sliderMin = 10000;
    let sliderMax = 500000;
    let priceAtMin = 1748; // $799 for 10,000 coverage
    let priceAtMax = 8000; // $8000 for 250,000 coverage
    let coverageAtMaxPrice = 250000; // Coverage at which price becomes $8000

    let calcPrice2, test_pp;

    if (coverageValue <= coverageAtMaxPrice) {
      // Calculate the price using linear interpolation
      calcPrice2 =
        priceAtMin +
        ((coverageValue - sliderMin) * (priceAtMax - priceAtMin)) /
          (coverageAtMaxPrice - sliderMin);
      // Calculate test_pp (cents per person)
      test_pp = (calcPrice2 / coverageValue) * 100;
    } else {
      // If coverage is more than 250,000, price is capped at $8000
      calcPrice2 = priceAtMax;
      // Calculate test_pp (cents per person) for coverage above 250,000
      test_pp = (calcPrice2 / coverageValue) * 100;
    }

    // Round test_pp to 2 decimal places and format it
    test_pp = (Math.round(test_pp * 100) / 100).toFixed(2);

    // Formatting calcPrice2 with comma separators
    calcPrice2 = Math.round(calcPrice2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let calcOldPrice2 = (calcPrice2 * 2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // This can be adjusted based on old price logic
    calcOldPrice2 = "$" + calcOldPrice2;
    let perPrice2 = "~" + test_pp;

    $("#calc-price2").text(calcPrice2);
    $("#calc-old-price2").text(calcOldPrice2);
    $("#per-price2").text(perPrice2);
  });
}
coverageCalcV2();

if (window.innerWidth < 768) {
  $("#calc-note-1").outerWidth($("#calc-bg-1").outerWidth());
  $("#calc-note-2").outerWidth($("#calc-bg-1").outerWidth());
  console.log($("#calc-bg-1").outerWidth());
}
