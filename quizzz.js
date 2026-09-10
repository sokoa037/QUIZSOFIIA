const question1 = document.getElementById ("question")

const button1 = document.getElementById ("button1")

const button2 = document.getElementById ("button2")

const button3 = document.getElementById ("button3")

let id = 0


let question_list = ["Hva handler GDPR hovedsakelig om?",
    "Hva betyr prinsippet om formålsbegrensning?",
    "Hvor lenge lagres vanlige meldinger og snaps i Snapchat?",
    "Hva må en bedrift gjøre hvis de vil bruke dataene dine til noe nytt?",
    "Hva skjer hvis en bedrift bryter GDPR-reglene?",
    "Quizen er ferdig!"]
let answersleft = ["djjsijisjfoi"]
let answersmiddle = ["hsfihuhis"]
let answersright =  ["gadbsdhbbda"]


button1.textContent = answerleft[id]
button2.textContent = answermiddle[id]
button3.textContent = answerright[id]

let correct_answers = [1,3,2]

function check(answer){
    if (answer == 1){
        id++
    }

    else{
        alert("WRONGGG!!!")
    }

    button1.textContent = answerleft[id]
    button2.textContent = answermiddle[id]
    button3.textContent = answerright[id]

question1.textContent=question_list[id]

}