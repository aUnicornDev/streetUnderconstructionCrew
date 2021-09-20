const formSubmit = document.querySelector('#contact-us-form');
const formName = document.querySelector('#name');
const formPhone = document.querySelector('#phone');
const formEmail = document.querySelector('#email');
const formMessage = document.querySelector('#message');
const contactUs = document.querySelector('.contact-us');
const contactForm = document.querySelector('.contact-form');
const formClose = document.querySelector('#form-close');
formSubmit.addEventListener('submit',e=>{
  e.preventDefault();
  let sheetBestBody = {
    Timestamp:new Date().toLocaleDateString(),
    Name:formName.value,
    Phone:formPhone.value,
    Email:formEmail.value,
    Message:formMessage.value
  }
  console.log(sheetBestBody);
  fetch("https://sheet.best/api/sheets/a1f656fb-d7ae-4648-8ea7-2e6eb212aa6b", {
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
formSubmit.reset();
contactForm.classList.add('hide');

})

formClose.addEventListener('click',()=>{
  window.history.back();
  contactForm.classList.add('hide');
})




contactUs.addEventListener('click',()=>{
if(contactForm.classList.contains('hide')){
contactForm.classList.remove('hide');
window.history.pushState('forward',null,"");
}
})
window.addEventListener("popstate", function() {  
  contactForm.classList.add('hide');
});

function isMobile(){
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  
  
  
}
else{
  document.querySelector('body').innerHTML = `<div class="legacy__heading">The Desktop site is still <br/><span class="highlight">UNDERCONSTRUCTION</span> 🙌</div><div class="grateful">Please visit the Mobile version. Thank YOU!</div>`;
  
}
} 

isMobile()
