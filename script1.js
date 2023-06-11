let funpwd = document.getElementById("funpwd");
let weakpwd = document.getElementById("weakpwd");
let strongpwd = document.getElementById("strongpwd");
let copypwd = document.getElementById("copypwd");
let display = document.getElementById("input1");

let ualpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lapha = "abcdefghigklmnopqrstuvwxyz"
let num = "0123456789"
let spechar = "!@#$%^&*"

funpwd.addEventListener("click" , funnypassword);

   function funnypassword() {
        let fun = [
            'welcome', 'hello', 'incorrect', 'password', 'random', 'funny', 'login', 'admin', 'wrong', 'secret', "idon\'tknow", 'nothing', 'capitalp', 'iforgot', 'useyourwifi'
          ]
          let index = Math.floor(Math.random() * fun.length);
          display.innerHTML = fun[index];
    }

weakpwd.addEventListener("click" , weakPassword);
    
    function weakPassword() {
        let weakrnd = ''
        let random = ualpha + lapha + num;
       for (let i = 0; i < 8; i++) {
        weakrnd += random[Math.floor(Math.random() * random.length)]
        
       }
        display.innerHTML = weakrnd; 

    }

strongpwd.addEventListener("click" , strongPassword);

function strongPassword() {
    let strongrnd = ''
    let random2 =  ualpha + lapha + num + spechar;
    for (let i = 0; i < 8; i++) {
        strongrnd += random2[Math.floor(Math.random() * random2.length)];
    } 
    display.innerHTML = strongrnd;
}

copypwd.addEventListener("click" , copyPassword);

function copyPassword() {
    let text = display.innerHTML
    navigator.clipboard.writeText(text)
    alert("Password Coppied To Clipbord : " + text )
}