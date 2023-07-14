document.addEventListener('DOMContentLoaded', function() {   
    const fields = Array.from(document.querySelectorAll(".checkme input")); //zbiór elementów najpierw konwertujemy na tablicę za pomocą Array.from, żeby potem móc użyć spread operatora
    const field2 = Array.from (document.getElementsByClassName("checkme2"));

    const checkboxes1 = Array.from(document.querySelectorAll(".checkme2 input"));
    const yourScore = document.getElementById("your_score");
        let score = 0;

        function updateScore() {
            yourScore.innerText = score.toString();
        }

        function increaseScore() {
            score += 25;
            updateScore();
        }    

 
let isLeftInputClicked = false;
let firstInputText = '';
let secondInputText = '';
let thirdInputText = '';
let fourthInputText = '';


let defaultText;

    const element0 = document.getElementsByClassName("checkme");
    const myElement = element0[0]; 
    const myElement1 = element0[1]; 
    const myElemen2 = element0[2]; 
    const myElemen3 = element0[3]; 

    const element = document.getElementsByClassName("checkme2");
    const specificElement = element[2];
    const specificElement1 = element[3];


    let check0 = document.getElementsByClassName("one")[0];
    let check1 = document.getElementsByClassName("one")[1];
    let check6 = document.getElementsByClassName("one")[6];


let tekst7 = document.getElementsByClassName("checkme2")[2];

const mybox = document.querySelector('.checkme .one');
const mybox2 = document.querySelector('.checkme2 .one');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const specificCheckbox = checkboxes[0];
const specificCheckbox1 = checkboxes[1];
const specificCheckbox2 = checkboxes[2];
const specificCheckbox3 = checkboxes[3];
const specificCheckbox4 = checkboxes[4];
const specificCheckbox5 = checkboxes[5];
const specificCheckbox6 = checkboxes[6];
const specificCheckbox7 = checkboxes[7];



    defaultText = tekst7.getAttribute('data-text'); // pobieramy tekst z atrybutu data-text z tagu p
    const hiddenText = document.createElement('span');//tworzymy element może to być span, div, p - cokolwiek
    hiddenText.style.display = 'none'; // ustawiamy właściwość elementu na niewidoczną
    hiddenText.innerText = defaultText;//pod hiddenText ustawiamy ustawiamy napis zamieszczony w atrybucie data-text
    tekst7.appendChild(hiddenText);// do zmiennej tekst7 za pomocą appendChild dołączamy ukryty element z tekstem atrybutu
    //tekst7.style.borderColor = "red";

    let write = document.getElementsByClassName("write")[0];
    let nexttext = document.createElement('div');
    nexttext.classList.add("dragon");
    nexttext.innerHTML = " Zacznij zaznaczanie od lewej:";
    nexttext.style.fontSize = "27px";
    nexttext.style.color = "aqua";
    write.appendChild(nexttext);


function reset()
{
      nexttext.innerHTML = "Zacznij zaznaczanie od lewej: ";
      [...field2].forEach(element => {
       element.style.borderColor = "greenyellow";
      });
}

function change(){nexttext.innerHTML = "Kontynuuj";}

function second(event) {
  if (isLeftInputClicked) {
    const tekst0 = event.target.parentElement.getAttribute('data-text');
    const tekst1 = event.target.parentElement.getAttribute('data-text');
    const tekst2 = event.target.parentElement.getAttribute('data-text');
    const tekst3 = event.target.parentElement.getAttribute('data-text');
    
    if (firstInputText === tekst0) {
      nexttext.innerHTML = "Twoja odpowiedź jest poprawna 👏";
      check0.setAttribute('disabled', 'true');
      check6.setAttribute('disabled', 'true');
      increaseScore();
      setTimeout(change, 3000);
      console.log(tekst0); 
      }
     
   else if (secondInputText === tekst1) {
      nexttext.innerHTML = "Twoja odpowiedź jest poprawna 👏";
      specificCheckbox1.setAttribute('disabled', 'true');
      specificCheckbox7.setAttribute('disabled', 'true');
      increaseScore();
      setTimeout(change, 3000);
      console.log(tekst1); 
      }    

      else if (thirdInputText === tekst2) {
      nexttext.innerHTML = "Twoja odpowiedź jest poprawna 👏";
      specificCheckbox2.setAttribute('disabled', 'true');
      specificCheckbox4.setAttribute('disabled', 'true');
      increaseScore();
      setTimeout(change, 3000);
      console.log(tekst2); 
      } 

      else if (fourthInputText === tekst3) {
      nexttext.innerHTML = "Twoja odpowiedź jest poprawna 👏";
      specificCheckbox3.setAttribute('disabled', 'true');
      specificCheckbox5.setAttribute('disabled', 'true');
      increaseScore();
      setTimeout(change, 3000);
      console.log(tekst1); 
      } 
      
       else {

      nexttext.innerHTML = "Sprawdź w translatorze lub spróbuj jeszcze raz 🤨";

      [...field2].forEach(itterate_by_each_element_in_array => { // argument będzie iterował po każdym elemencie z tablicy
        itterate_by_each_element_in_array.style.borderColor = "red";
        itterate_by_each_element_in_array.style.transition = "2s all ease-in-out";
          setTimeout(reset, 3000);
          checkboxes.forEach(checkbox => checkbox.checked = false);
      });
        
    }
  } else {
    console.log("Pierwszy input nie został jeszcze kliknięty.");
  }
}

console.log(...fields);
console.log(defaultText); 

    fields[0].addEventListener('input', function first(event) { 
      isLeftInputClicked = true;
      let trigger = event.target;
      firstInputText = trigger.parentElement.innerText; //do sprawdzenia na potem bo teraz śpię :D
    });


  fields[1].addEventListener('input', function first(event) { 
      isLeftInputClicked = true;
      let trigger = event.target;
     secondInputText = trigger.parentElement.innerText;
    });

    fields[2].addEventListener('input', function first(event) { 
      isLeftInputClicked = true;
      let trigger = event.target;
      thirdInputText = trigger.parentElement.innerText;
    });

    fields[3].addEventListener('input', function first(event) { 
      isLeftInputClicked = true;
      let trigger = event.target;
      fourthInputText = trigger.parentElement.innerText;
    });

for (let index = 0; index < field2.length; index++) {
  let setup = field2[index];  
  setup.addEventListener('input', second);
}

});