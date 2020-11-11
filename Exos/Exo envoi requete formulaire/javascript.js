const value = document.getElementById('value')
const form = document.getElementById('form')
const result = document.getElementById('result')

let request = new XMLHttpRequest();

form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    request.onreadystatechange = () => 
    
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var response = JSON.parse(this.responseText);
            result.innerHTML = response.postData['text'];
        }
};
request.open("POST", "https://mockbin.com/request");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(value.value));
console.log(value.value);

});
