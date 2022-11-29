// function uploadBtn() {
//      let ub = document.getElementsById('btn').click();
//      alert(ub);
// }
window.onload = function(){
     const img = document.querySelector("#uploadFile");
     img.addEventListener("change", function(){
          const reader = new FileReader();
          reader.addEventListener("load", () => {
               const uploadImg = reader.result;
               document.querySelector("#displayImg").style.backgroundImage = `url(${uploadImg})`;
          });
          reader.readAsDataURL(this.files[0]);
     })
}


