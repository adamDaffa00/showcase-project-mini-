class Typewriter {
  constructor (textElement,words,wait){
    this.textElement = textElement;
    this.words = words;
    this.wait = parseInt(wait,10);
    this.txt = '';
    this.wordIndex = 0;
    this.isDeleting = false;
  }
  type(){
    const current = this.wordIndex % this.words.length;
    const fullText = this.words[current];
    if (this.isDeleting) {
      this.txt = fullText.substring(0,this.txt.length - 1);
    }else{
      this.txt = fullText.substring(0,this.txt.length + 1);
    }
    
    
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }
    
    // if word is complete
    if(!this.isDeleting && this.txt == fullText){
      // make pause at end
      typeSpeed = this.wait;
      this.isDeleting = true;
    }else if(this.isDeleting && this.txt == ''){
      this.isDeleting = false;
       // move the next text
      this.wordIndex++;
      // pause before start typing
      typeSpeed = 500;
    }
    
    
    this.textElement.innerHTML = `<span class="txt"> ${this.txt} </span>`;
    setTimeout(() => this.type() ,typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded',init);
function init(){
  const textElement = document.querySelector('.txt-type');
  // const words = JSON.parse(textElement.getAttribute('data-text'));
  
  const wait = textElement.getAttribute('data-wait');
  const arrText = ["programmer","web designer","video editor"];
  let start = new Typewriter(textElement,arrText,wait);
  start.type()
}
