const apiurl = "CG-Dzxh3jWrW4J3R4HPFQQVGCSU"

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Dzxh3jWrW4J3R4HPFQQVGCSU'}
  };
  
  fetch('https://api.coingecko.com/api/v3/ping', options)
    .then(res => res.json())
    .then(data => {
        // Extract the "gecko_says" value
        const message = data.gecko_says;

        // Update the <p> element with just the message
        const paragraph = document.getElementById("myp");
        paragraph.textContent = message;
    })
    .catch(err => console.error(err));
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', options)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      // Extract the price of Bitcoin in USD
      const price = data.bitcoin.usd;

      // Update the <p> element with just the price
      const paragraph = document.getElementById("myp1");
      paragraph.textContent = `Bitcoin Price: $${price}`;
    })
    .catch(err => console.error("Price API Error:", err));