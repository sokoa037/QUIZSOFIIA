const question = document.getElementById("question")


const button1 = document.getElementById("button1")

const button2 = document.getElementById("button2")

const button3 = document.getElementById("button3")


const points_display = document.getElementById("points")

let current_question = 0
let points = 0

let question_list = [
    "Hva handler GDPR hovedsakelig om?",
    "Hva betyr prinsippet om formålsbegrensning?",
    "Hvor lenge lagres vanlige meldinger og snaps i Snapchat?",
    "Hva må en bedrift gjøre hvis de vil bruke dataene dine til noe nytt?",
    "Hva skjer hvis en bedrift bryter GDPR-reglene?",
    "DU KLARTE DET...!"
]

let answers_list = [
    ["Personvern og databeskyttelse", "Internetthastighet", "Maskinvare i PC"],
    ["At data bare brukes til det du har sagt ja til", "At du må slette appen", "At alle kan se bildene dine"],
    ["Automatisk slettet innen 24 timer", "Lagres for alltid", "Lagres i 10 år"],
    ["Spørre deg om lov først", "Bruke dem uten å si fra", "Selge dem med en gang"],
    ["De kan få overtredelsesbøter", "Ingenting skjer", "Internett blir stengt"],
    
]

let correct_answers = [0, 0, 0, 0, 0]

function update_questions() {
    question.textContent = question_list[current_question]

    button1.textContent = answers_list[current_question][0]

    button2.textContent = answers_list[current_question][1]

    button3.textContent = answers_list[current_question][2]

    points_display.textContent = points
}

function answer(choice) {

    if (choice == correct_answers[current_question]) {


        points += 1
    } else {
        alert("FEIILL!!")
    }
    current_question += 1
    update_questions()
}

update_questions()