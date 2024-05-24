function numberToString(number) {
    const units = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const teens = [
      "",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    const tens = [
      "",
      "ten",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    const thousands = ["", "thousand", "million", "billion", "trillion"];
  
    function convertSegment(segment) {
      let num = parseInt(segment, 10);
      let str = "";
  
      if (num === 0) return "    ";
  
      if (num >= 100) {
        str += units[Math.floor(num / 100)] + " hundred ";
        num %= 100;
      }
  
      if (num >= 11 && num <= 19) {
        str += teens[num - 10] + " ";
        num = 0;
      } else if (num >= 10) {
        str += tens[Math.floor(num / 10)] + " ";
        num %= 10;
      }
  
      if (num > 0) {
        str += units[num] + " ";
      }
  
      return str.trim();
    }
  
    let str = "";
    let numStr = String(number);
  
    while (numStr.length % 3 !== 0) {
      numStr = "0" + numStr;
    }
  
    const segments = numStr.match(/\d{3}/g);
  
    segments.forEach((segment, index) => {
      const segmentStr = convertSegment(segment);
      if (segmentStr !== "    ") {
        if (
          segmentStr !== "zero" ||
          (segments.length === 1 && index === segments.length - 1) ||
          (index === segments.length - 2 &&
            segments[segments.length - 1] === "000")
        ) {
          str += segmentStr + " " + thousands[segments.length - index - 1] + " ";
        }
      }
    });
  
    return str.trim();
  }
  
  // Example usage
  console.log(numberToString(1000000000000)); // Output: "one trillion"
  console.log(numberToString(1234567890123)); // Output: "one trillion two hundred thirty four billion five hundred sixty seven million eight hundred ninety thousand one hundred twenty three"
  