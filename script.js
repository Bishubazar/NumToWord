function numberToWord(number) {
  const units = [
    "",
    "нэг",
    "хоёр",
    "гурван",
    "дөрвөн",
    "таван",
    "зургаан",
    "долоон",
    "найман",
    "есөн",
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
  const lastTens = [
    "",
    "арав",
    "хорь",
    "гуч",
    "дөч",
    "тавь",
    "жар",
    "дал",
    "ная",
    "ер",
  ];

  const tens = [
    "",
    "арван",
    "хорин",
    "гучин",
    "дөчин",
    "тавин",
    "жаран",
    "далан",
    "наян",
    "ерэн",
  ];

  const thousands = ["", "мянга", "сая", "тэрбум", "их наяд"];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function convertSegment(segment) {
    let num = parseInt(segment, 10);
    let str = "";

    if (num === 0) return "Тэг";

    if (num >= 100) {
      str += units[Math.floor(num / 100)] + " зуун ";
      num %= 100;
    }

    if (num >= 10) {
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
    if (segmentStr !== "Тэг") {
      if (
        segmentStr !== "Тэг" ||
        (segments.length === 1 && index === segments.length - 1) ||
        (index === segments.length - 2 &&
          segments[segments.length - 1] === "000")
      ) {
        str += segmentStr + " " + thousands[segments.length - index - 1] + " ";
      }
    }
  });

  return capitalizeFirstLetter(str.trim());
}

// User input aas garaas utga avsan test
var nameInput = document.getElementById("input");

document
  .querySelector("form.converter-form")
  .addEventListener("submit", function (e) {
    //
    e.preventDefault();
    document.getElementById("number").innerHTML = [
      numberToWord(nameInput.value) + " төгрөг",
    ];

    console.log(numberToWord(nameInput.value + "төгрөг"));
  });

// Console test
console.log(numberToWord(1000000000000));
console.log(numberToWord(1234567890123));
