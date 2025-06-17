function calculateTip() {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('tip').value);

    if (isNaN(bill) || isNaN(tipPercent)) {
        alert('Please enter valid numbers');
        return;
    }

    const total = bill + (bill * tipPercent / 100);
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}
  