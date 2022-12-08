// function uploadBtn() {
//      let ub = document.getElementsById('btn').click();
//      alert(ub);
// }

window.onload = function(){
     var img = document.querySelector("#uploadFile");
     img.addEventListener("change", function(){
          var reader = new FileReader();
          reader.addEventListener("load", () => {
               var uploadImg = reader.result;
               document.querySelector("#displayImg").style.backgroundImage = `url(${uploadImg})`;
          });
          reader.readAsDataURL(this.files[0]);
     })
}
function sendImg(){
     var file = document.getElementById("uploadFile").files[0];
     var formData = new FormData();
     formData.append("inFile", file);
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function () {
          if (xhr.readyState == 4 && xhr.status == 200) {
               var res = "This image is mostly likely " + JSON.parse(xhr.responseText)['result'];
               var resdiv = document.getElementById("result");
               resdiv.innerHTML = res
          }
     }
<<<<<<< HEAD
     xhr.open("POST", "http://10.10.1.2:25000/img");
=======
     xhr.open("POST", "http://128.95.190.58:25000/img");
>>>>>>> c0bd52264f3f110d6bf80641d354cc9637058784
     xhr.send(formData);
}
