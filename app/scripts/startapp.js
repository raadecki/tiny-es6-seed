import hello from 'source/hello';

export default function startapp(document) {
    //bootstrap code here

    var hwDiv = document.querySelector('.hello-world');
    hwDiv.innerHTML = hello('World');
}
