( () => {
    const textArea = document.getElementsByTagName('p')[0];
    const text = "Hi I'm a developer, Dancer, Semstress, and Bicyclist.";
    var i = 0;
    typeWriter();
  
  function handWritten() {
    setTimeout(() => {
      if(i < text.length) {
        textArea.textContent += text[i];
        i++;
        handWritten();
      }
    }, 50);
  }
  
  function typeWriter() {
      setTimeout(() => {
        if(i < text.length) {
          textArea.textContent += text[i];
          i++;
          typeWriter();
        }
      }, 75);
    };
  
  
    console.log("hello world");
  })();