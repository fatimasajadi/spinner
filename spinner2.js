let spinChar = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

spinChar.forEach(function(char, index) {
  setTimeout(function() {
    process.stdout.write(char);
    index++;
  }, index * 100 + 100);
});