function numberToWord(number) {
  const units = [
    "",
    "нэг",
    "хоёр",
    "гурав",
    "дөрөв",
    "тав",
    "зургаа",
    "долоо",
    "найм",
    "ес",
  ];
  const middleUnits = [
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
    let num = parseInt(segment);
    let str = "";

    if (num === 0) return "Тэг";
    if (num === null) return "Хоосон";

    if (num >= 100) {
      str += middleUnits[Math.floor(num / 100)] + " зуун ";
      num %= 100;
    }

    if (num >= 10) {
      str += tens[Math.floor(num / 10)] + " ";
      num %= 10;
    }

    if (num > 0) {
      str += middleUnits[num] + " ";
    }

    return str;
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

  //   return str.trim();
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

//Console test
console.log(numberToWord(987654321) + " төгрөг");
