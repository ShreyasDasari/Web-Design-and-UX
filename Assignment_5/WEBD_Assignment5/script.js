const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

const email = document.getElementById("exampleInputEmail1");
const password = document.getElementById("exampleInputPassword1");

const login = document.getElementById("login");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

login.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;

  if (emailValue.length > 0 && passwordValue.length > 0) {
    console.log("success");
    email.value = "";
    password.value = "";
  } else {
    alert("Please fill all the fields", "danger");
  }
});