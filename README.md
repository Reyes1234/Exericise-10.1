# Exericise 10.1
Part 1.
There's a list of URLs at https://patrickmcneill.com/itp/urls.txt. In an HTML page with jQuery, write an async function that will download that list of URLs (since it might change), then fetch each of the URLs within. Your program should print out which URLs returned the smallest and largest amounts of HTML, based on the length of the returned strings.

Part 2.
Write a function called "delay" that is passed a number of milliseconds. It should return a promise that will resolve after that amount of time has elapsed. When working, it should be possible to call it with "await delay(1000);" to introduce a wait into your code.
