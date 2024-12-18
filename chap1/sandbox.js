const pList = document.querySelectorAll('p');
console.log(pList)
pList.forEach(line => {
    console.log(line.innerText);
    eachLine = line.innerText
    if(eachLine.includes('error')){
        line.setAttribute('style',"")
    }
});