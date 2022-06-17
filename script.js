const pragraph = document.querySelectorAll(".pharagraph");
const btn = document.querySelector(".button");
const sentences = document.querySelector(".sentences");
const words = document.querySelector(".words");
const vowels = document.querySelector(".vowels");

btn.addEventListener("click", print);

function print() {
  const counts = parseInt(prompt("enter pharagraph number"));

  count_Word_Setences_Vowels_pharagraph(counts);
}

function count_Word_Setences_Vowels_pharagraph(i) {
  const sentence = pragraph[i].innerText.split(".").length - 1;

  const Word = pragraph[i].innerText.split(" ").length;

  const vowel = pragraph[i].innerText.match(/[aeiou]/gi).length;

  sentences.innerText = sentence;

  words.innerText = Word;

  vowels.innerText = vowel;
}
