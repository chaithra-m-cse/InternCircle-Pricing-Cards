const billingToggle = document.getElementById("billingToggle");

const priceValues = document.querySelectorAll(".price-value");
const billingPeriods = document.querySelectorAll(".billing-period");

billingToggle.addEventListener("change", () => {

    const isYearly = billingToggle.checked;

    priceValues.forEach((price) => {

        if (isYearly) {
            price.textContent = price.dataset.yearly;
        } else {
            price.textContent = price.dataset.monthly;
        }

    });

    billingPeriods.forEach((period) => {

        if (isYearly) {
            period.textContent = "/year";
        } else {
            period.textContent = "/month";
        }

    });

});