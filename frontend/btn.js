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
     xhr.open("POST", "http://192.168.0.254:8000/img");
     xhr.send(formData);
}
