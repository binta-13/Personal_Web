function submitFrom() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let subject = document.getElementById("subject").value;
  let deskription = document.getElementById("deskription").value;

  if (name == "") {
    alert("From name harus di isi!!!!");
  } else if (email == "") {
    alert("Form email harus di isi!!!!");
  } else {
    
  }

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Number Phone: ${number}`);
    console.log(`Subject: ${subject}`);
    console.log(`Deskription: ${deskription}`);

    let emailReceiver = "binta1700018009@webmail.uad.ac.id";
    let a = document.createElement('a');
    a.href = `mailto: ${emailReceiver}?subject=${subject}&body=Hello my name ${name}, ${deskription}`;
    a.click();
//   let dataObject = {
//     name: name,
//     email: email,
//     number: number,
//     subject: subject,
//     deskription: deskription,
//   };
//   console.log(dataObject);
//   console.log(dataObject.number);
}
