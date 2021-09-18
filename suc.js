const formSubmit = document.querySelector('#form-submit');
const formName = document.querySelector('#name');
const formPhone = document.querySelector('#phone');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#message');

formSubmit.addEventListener('click',e=>{
  e.preventDefault();
  let sheetBestBody = {
    Name:formName.value,
    Phone:formPhone.value,
    Email:formEmail.value,
    Message:formMessage.value
  }
  console.log(sheetBestBody);
  fetch("https://sheet.best/api/sheets/9da63077-34f3-4696-a4d3-8cf3db3a142d", {
  method: "POST",
  mode: "cors",
  headers: {
      "Content-Type": "application/json",
         },
       body: JSON.stringify(sheetBestBody),
  })
  .then((r) => r.json())
  .then((data) => {
    // The response comes here
    console.log(data);
  })
  .catch((error) => {
    // Errors are reported there
    console.log(error);
});
})





const contactUs = document.querySelector('.contact-us');
const contactForm = document.querySelector('.contact-form');
contactUs.addEventListener('click',()=>{
console.log('yfuftyfy')
if(contactForm.classList.contains('hide')){
contactForm.classList.remove('hide');
}
else{
contactForm.classList.add('hide');

}
})


function isMobile(){
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  
  
  
}
else{
  document.querySelector('body').innerHTML = `<div class="legacy__heading">The Desktop site is still <br/><span class="highlight">UNDERCONSTRUCTION</span> 🙌</div><div class="grateful">Please visit the Mobile version. Thank YOU!</div>`;
  
}
} 

isMobile()
