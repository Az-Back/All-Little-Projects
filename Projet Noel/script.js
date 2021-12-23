alert("MET DU SON!")
alert("POUR METTRE LE SON EN PAUSE APPUIE SUR B")

window.addEventListener('keypress', down) // Create 2 events with 2 differents function //
window.addEventListener('keydown', up)


// First function //
function down (a) 
{
  const sound = document.querySelector(`audio[data-key="${a.key}"]`);
  sound.play();
  const truc = document.querySelector(".Text");
  truc.classList.add("come");
  const machin = document.querySelector(".Text2");
  machin.classList.add("out");
  const machin1 = document.getElementById("Cercle1");
  machin1.classList.add("Cercle1");
  const machin2 = document.getElementById("Cercle2");
  machin2.classList.add("Cercle2");
  const machin3 = document.getElementById("Cercle3");
  machin3.classList.add("Cercle3");
  const machin4 = document.getElementById("Cercle4");
  machin4.classList.add("Cercle4");
  const machin5 = document.getElementById("Cercle5");
  machin5.classList.add("Cercle5");
}

function up (b)
{
  const sound1 = document.querySelector(`audio[data-key1="${b.key}"]`);
  sound1.pause();
}