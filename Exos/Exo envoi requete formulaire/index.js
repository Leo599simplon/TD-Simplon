var value = document.getElementById('value')
var result = document.getElementById('result')
var form = document.getElementById('form')

let request = new XMLHttpRequest();


form.addEventListener('submit',function(e) {
{
e.preventDefault();
    request.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        result.innerHTML = response.postData["text"];
        
    }
};
request.open("POST", "https://mockbin.com/request");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(value.value));
  console.log(value.value);
  

  
}});





                                    
  