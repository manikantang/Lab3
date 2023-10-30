document.addEventListener("DOMContentLoaded", function () {
    const tipForm = document.getElementById("tipForm");
    const bill = document.getElementById("bill");
    const percent = document.getElementById("percent");
    const range = document.getElementById("range");
    const amt = document.getElementById("amt");
    const total = document.getElementById("total");

    tipForm.addEventListener("input", updateTip);

    function updateTip() {
        const billValue = parseFloat(bill.value);
        const tipPercent = parseFloat(range.value);
        if (isNaN(billValue) || isNaN(tipPercent)) {
            amt.value = "";
            total.value = "";
            alert("please enter a valid bill total");
        } else {
            const tipValue = (billValue * tipPercent) / 100;
            const totalValue = billValue + tipValue;
            amt.value = tipValue.toFixed(2);
            total.value = totalValue.toFixed(2);
            percent.value = tipPercent;
        }
    }
});