    const form = document.querySelector("#form")
    const name = document.querySelector("#name")
    const password = document.querySelector("#password")
    const error = document.querySelector(".error")
    form.addEventListener("submit",(e) => {
      let messages = []
      if( name.value == '' || name.value == null) messages.push("nama tidak boleh kosong")
      if( password.value.length < 6) messages.push("password tidak boleh Kurang dari 6 karakter");
      if( password.value.length > 20) messages.push("password tidak boleh lebih dari 20 karakter");
      if(password.value == 'password') messages.push("password tidak boleh diisi dengan 'password'");
      if (messages.length > 0) {
        error.innerHTML = messages.join(", ")
        e.preventDefault() 
      }

    })
