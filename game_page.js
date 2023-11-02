p1name=localStorage.getItem("p1name");
p2name=localStorage.getItem("p2name");
p1score=0;
p2score=0;
document.getElementById("p1name").innerHTML=p1name+" : ";
document.getElementById("p2name").innerHTML=p2name+" : ";
document.getElementById("p1score").innerHTML=p1score;
document.getElementById("p2score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="Question Turn - "+p1name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+p2name;
function send(){
gw=document.getElementById("word").value;
word=gw.toLowerCase();

c1=word.charAt(1);
ld2=Math.floor(word.length/2);
c2=word.charAt(ld2);
lm1=word.length-1;
c3=word.charAt(lm1);


r1=word.replace(c1,"_");
r2=r1.replace(c2,"_");
r3=r2.replace(c3,"_");


qw="<h4 id='wd'>Q. "+r3+"</h4>";
ib="<br>Answer: <input type='text' id='icb'>";
cb="<br> <br> <button class='btn btn-info' onclick='check()' >Check</button>";
row=qw+ib+cb;
document.getElementById("output").innerHTML+=row;
document.getElementById("word").value="";

}
question_turn="player1";
answer_turn="player2";
function check()
{
    ga=document.getElementById("icb").value;
    answer=ga.toLowerCase();
    if(answer==word){
        if(answer_turn=="player1")
        {
            p1score=p1score+1;
            document.getElementById("p1score").innerHTML=p1score;

        }
        else   {
            p2score=p2score+1;
            document.getElementById("p2score").innerHTML=p2score;
            
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("player_question").innerHTML="QuestionTurn - "+p2name;
        
    }
    else
    {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="QuestionTurn - "+p1name;
        
    }
    if(answer_turn=="player1")
    {
    answer_turn="player2";
    document.getElementById("player_answer").innerHTML="AnswerTurn - "+p2name;
    }
    else
    {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="AnswerTurn - "+p1name;
        }
        document.getElementById("output").innerHTML="";
}