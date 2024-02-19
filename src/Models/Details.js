class Details{
    constructor(term, description, image ){
            this.term = term
            this.image = image
            this.description = description
          
    }
 checkAnswer(attempt){
    if (attempt == this.correctAnswer){
        console.log(true);
        return true
       
    }else{
        console.log(false);
        return false
       
    }
 }
}

export default Details