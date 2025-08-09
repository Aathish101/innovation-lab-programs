function vaildateName(name) {
    const regex = /^[A-Za-z\s]+$/;
    if (name.trim() === "") {
      return "Name cannot be empty";
    }
    if (!regex.test(name)) {
      return "Name can only contain letters and spaces";
    }
    return "";
  }
  
  function vaildateEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email.trim() === "") {
      return "Email cannot be empty";
    }
    if (!regex.test(email)) {
      return "Invalid email format";
    }
    return "";
  }
  
  function vaildatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password.trim() === "") {
      return "Password cannot be empty";
    }
    if (!regex.test(password)) {
      return "Password must be at least 8 characters long, contain an uppercase letter and a number";
    }
    return "";
  }
  
  function vaildatePhone(phone) {
    const regex = /^[0-9]{10}$/;
    if (phone.trim() === "") {
      return "Phone number cannot be empty";
    }
    if (!regex.test(phone)) {
      return "Phone number must be exactly 10 digits";
    }
    return "";
  }
  
  function vaildateform() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
  
    const nameError = vaildateName(name);
    const emailError = vaildateEmail(email);
    const passwordError = vaildatePassword(password);
    const phoneError = vaildatePhone(phone);
  
    document.getElementById("nameError").innerText = nameError;
    document.getElementById("emailError").innerText = emailError;
    document.getElementById("PasswordError").innerText = passwordError;
    document.getElementById("PhoneError").innerText = phoneError;
  
    return !(nameError || emailError || passwordError || phoneError);
  }
  
  function onSubmitHandler(event) {
    event.preventDefault(); // stop form submission
    const valid = vaildateform();
    if (valid) {
      alert("Form submitted successfully!");
      // You can submit the form here if you want, e.g.:
      // document.getElementById("registrationform").submit();
    }
    return false;
  }
  