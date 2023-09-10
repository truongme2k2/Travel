const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})


const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirm-password'].value;
  
  if (password !== confirmPassword) {
    event.preventDefault(); 
    alert('Mật khẩu nhập không giống nhau. Hãy nhập lại!');
  }
});

