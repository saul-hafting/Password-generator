const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];

function generatePass() {
    let pass1 = "";
    let pass2 = "";
    
    for (let i = 0; i < 15; i++) {
        let num1 = Math.floor(Math.random() * characters.length);
        let num2 = Math.floor(Math.random() * characters.length);
        pass1 += characters[num1];
        pass2 += characters[num2];
    }
    
    let passBox1 = document.getElementById("pass1");
    let passBox2 = document.getElementById("pass2");
    

    passBox1.textContent = pass1;
    passBox2.textContent = pass2;

}




 