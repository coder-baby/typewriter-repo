const Typewriter=function(txtElement, words, wait=3000){
    this.txtElement=txtElement;
    this.words=words;
    this.txt='';
    this.wait=parseInt(wait, 10);
    this.wordIndex=0;
    this.type();
    this.isDeleting=false;
}
// type method-we add our method to our typewriter using prototype
Typewriter.prototype.type=function(){
    // current index of word
    const current=this.wordIndex % this.words.length
    
    // get fulltext of current word
    const fullTxt=this.words[current]
    // console.log(fullTxt)

    // check if deleting
    if(this.isDeleting){
        // remove character
        this.txt=fullTxt.substring(0,this.txt.length-1)
    }else{
        // add character
        this.txt=fullTxt.substring(0,this.txt.length+1)
    }

    // insert txt into element
   this.txtElement.innerHTML=`
   <span class="txt">
     ${this.txt}
   </span>`

    setTimeout(()=>this.type(),500)
    
}

document.addEventListener('DOMContentLoaded',init)

function init(){

    const element=document.querySelector('.txt-type')

    const words=element.getAttribute('data-words')
    const wait=element.getAttribute('data-wait')
    let more=JSON.parse(words)
    console.log(more)
    new Typewriter(element,more,wait)

}
