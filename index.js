function myFunction() {
  myVar = setTimeout(showPage, 3000); // sayfa login olduktan 3 saniye sonra sayfayı yukle.
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
  response.json().then((data) => {
    console.log(data);
    if (data.length > 0) {
      var temp = "";
      //.. start loop

      data.forEach((u) => {
      
        temp += "<tr>";
        //temp += "<td>"+u.id+"</td>";
       // temp += "<td>"+u.userId+"</td>";
        temp += "<td>" + u.title + "</td>";// Yemek basligi
        temp += "<td><i class='fas fa-heart'></i></td></tr>"//fav icon
        

      });
      //.. end loop
      document.getElementById("data").innerHTML = temp;
    }
  });
});



//..Filtreleme işlemi
const filter = () => {
  let search = document.querySelector("#search").value.toUpperCase();
  let myTable = document.getElementById("myTable");
  let tr = myTable.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let textValue = td.textContent || td.innerHTML;
      if (textValue.toUpperCase().indexOf(search) > -1) {
        tr[i].style.border = "2px solid blue";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
//..Filtreleme işlemi

//.. Kullanici Bilgileri

let userLogin = document.querySelector("#userlogin");

fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
  response.json().then((data) => {
    console.log(data.name);
    userLogin.innerText = `Merhaba ${data.name}`;
  });
});

//.. Kullanici Bilgileri
