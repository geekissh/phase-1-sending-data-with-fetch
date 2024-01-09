function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        
        document.body.innerHTML += `<p>User ID: ${userId}</p>`;
      })
      .catch(function (error) {
       
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
  }
  
  submitData("John Doe", "john.doe@example.com");
