let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");
let text = document.getElementById("text");
let file = document.getElementById("save-text-file");

upper.addEventListener("click", function () {
    text.value=text.value.toUpperCase();
});

lower.addEventListener("click", function () {
    text.value=text.value.toLowerCase();
})

proper.addEventListener("click", function () {
    text.value = text.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

});

sentence.addEventListener("click", function () {
    text.value = text.value.toLowerCase().split('. ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
file.addEventListener("click", function (){
 let filename = "text.txt";
 let text1= text.value;
 download(filename, text1);
});

