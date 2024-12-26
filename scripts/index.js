const navbar = ()=>{
    let navbarCard = `<div id="nav-container">
        <a href="" >Mini Quiz App</a>
        <div id="nav-links" >
          <a href="index.html" >Home</a>   
          <a href="questions.html" >Questions</a>   
          <a href="quiz.html" >Quiz</a>   

        </div>
    </div>`;
   document.getElementById("nav").innerHTML=navbarCard
}
navbar()