function check() {
    var c=0;
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var result=document.getElementById('result');
    var result=document.getElementById("quiz")
    if(q1=="Deterministic Push Down Automata (DPDA) and Non-deterministic Push Down Automata (NPDA)"){c++}
    if(q1== "Silicon controlled rectifier"){c++}
    if(q3=="Destructive pitting") {c++}
    quiz.style.display="none";
    result.textContent="${c}"
   if (c<=3){
       result.textContent="your result is not so good try to work on yourself";
   } else{
       result.textContent="your result is awesome. keep it up!"
   }
   }

