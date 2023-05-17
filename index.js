const pianoKeys = document.querySelectorAll('.piano--keys .key');
const volumeSlider = document.querySelector('.volume input');
const checkbox = document.querySelector('.key--checkbox input');
let audio = new Audio('tunes/a.wav');
let allKey=[];
const playTune = (key) =>{
   
     audio.src = `tunes/${key}.wav`;
     audio.play();
     const clickedKey = document.querySelector(`[data-key="${key}"]`);
     clickedKey.classList.add('active');
     setTimeout(()=>{
        clickedKey.classList.remove('active');
    }, 150);
    // console.log('this the key i pressed ${key}');
}
const handleVolume = (e) =>{
   audio.volume = e.target.value;
}
pianoKeys.forEach(key =>{
    allKey.push(key.dataset.key)
    // console.log(key.dataset.key);
    key.addEventListener('click',()=> playTune(key.dataset.key));
   

})
const showHiddenkeys = (e) => {
   pianoKeys.forEach((key) => {
       key.classList.toggle('hide');
   })
}
const pressedkey = (e) =>{

   if(allKey.includes(e.key)) playTune(e.key);
};
document.addEventListener('keydown',pressedkey);

volumeSlider.addEventListener('input', handleVolume);
checkbox.addEventListener('click', showHiddenkeys);
console.log(checkbox);