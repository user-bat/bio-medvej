document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typetext');
    const text = "🌙Медвежонок🌙";

    let time = 0;
    let index = 0;
    let isAdding = true;

    function typeWriter() {
        textElement.innerHTML = text.slice(0, index);
        
        if (isAdding) {
            if (index < text.length) {
                index++;
            } else {
                isAdding = true;
                time++;
                if(time < 1){
                    setTimeout(typeWriter, 50);
                }
              
                return;
            }
        } else {
            if (index > time) {
                index--;
            } else {
                isAdding = true;
                
                setTimeout(typeWriter, 50); 
                return;
             
            }

        }
        setTimeout(typeWriter, 100); 
      
    }

    typeWriter();
});