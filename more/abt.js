    // JavaScript to update the running numbers
    let investorsCount = 0;
    let countriesCount = 0;
    let coinsCount = 0;
    
    const investorsLimit = 1000000;
    const countriesLimit = 199;
    const coinsLimit = 5000000;

    function updateCounters() {
      if (investorsCount < investorsLimit) {
        document.getElementById('investorsCounter').textContent = investorsCount.toLocaleString();
        investorsCount += 1050;
      }

      if (countriesCount < countriesLimit) {
        document.getElementById('countriesCounter').textContent = countriesCount.toLocaleString();
        countriesCount += 198;
      }

      if (coinsCount < coinsLimit) {
        document.getElementById('coinsCounter').textContent = coinsCount.toLocaleString();
        coinsCount += 5000;
      }

      // Stop the interval if all counters reach their limits
      if (investorsCount >= investorsLimit && countriesCount >= countriesLimit && coinsCount >= coinsLimit) {
        clearInterval(intervalId);
      }
    }

    // Initial update
    updateCounters();

    // Update counters every 2 seconds
    const intervalId = setInterval(updateCounters, 2000);

