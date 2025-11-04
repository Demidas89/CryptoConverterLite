let rates = {};

async function loadRates() {
  const res = await fetch('rates.json');
  rates = await res.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadRates();

  document.getElementById('convert').addEventListener('click', () => {
    const crypto = document.getElementById('crypto').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!amount || amount <= 0) {
      document.getElementById('result').textContent = "⚠️ Enter a valid amount";
      return;
    }

    const usd = (amount * rates[crypto]).toFixed(2);
    document.getElementById('result').textContent = `${amount} ${crypto} ≈ $${usd} USD`;
  });
});
