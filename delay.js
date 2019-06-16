const delay = ms => new Promise(yea => setTimeout(yea, ms));

delay(1000)
  .then(() => console.log('waited 1000 secs'))
