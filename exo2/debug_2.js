let main = document.getElementById('main');

main.id = "main2";
main.style.visibility = "hidden";
main.innerHTML = "Mon nouveau texte !";
main.style.display = "block";

let html = main.innerHTML;

alert(html);

if(html) {
    console.log(html);
}
else {
    let test = document.getElementById('test');
    if(test) {
        alert(test);
    }
}


