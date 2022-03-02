const preview= document.querySelector('#preview img');
const inputImg= document.querySelector('#preview input');



function doIt(){
 let file=inputImg.files;
 if(file.length===0 || !file){
    preview.style.display='none';
    return;
 }
 preview.src= URL.createObjectURL(file[0]);
 preview.style.display='block';
 preview.style.width='200px';
 preview.style.height='200px';
 preview.classList.add("peek");
}

inputImg.addEventListener('change',doIt);