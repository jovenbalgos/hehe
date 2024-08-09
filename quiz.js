function correct(){
    const koy = document.getElementById('koy');
    const koyimage = document.getElementById('koyimage');
    const joven = document.getElementById('joven');
    const miguel = document.getElementById('miguel');
    const miguelimage = document.getElementById('miguelimage');
    const question = document.getElementById('question1');
koy.style.display="none";
koyimage.style.display="none";
miguel.style.display="none";
miguelimage.style.display="none";
question.textContent="Tama! ako yung pinakapogi!";
nextbutton.style.display="block";
}
function nextquestion(){
container1.style.display="none";
container2.style.display="flex";
}

function changekoyimage(){
    const koyimage = document.getElementById('koyimage2');
    const koy2 = 'kokoy2.jpg'; // Path to the first image
    const koy3 = 'kokoy3.jpg'; // Path to the second image
    const question2 = document.getElementById('question2');
 
            if (koyimage.src.includes(koy2)) {
                koyimage.src = koy3; // Change to the second image
            } 
            jovenimage2.style.display="none"
            miguelimage2.style.display="none"
            joven2.style.display='none';
            miguel2.style.display='none';
            question2.textContent="Ang sexy mo naman Koy!";
            nextbutton2.style.display="block";
}
function changejovenimage(){
    const koyimage = document.getElementById('jovenimage2');
    const question2 = document.getElementById('question2');
 

            koyimage2.style.display="none"
            miguelimage2.style.display="none"
            koy2.style.display='none';
            miguel2.style.display='none';
            question2.textContent="Ang galing mo babe! alam mo kung sino ang sexy!";
                        nextbutton2.style.display="block";
}
function changemiguelimage(){
    const miguelimage = document.getElementById('miguelimage2');
    const miguel2 = 'miguel2.jpg'; // Path to the first image
    const miguel3 = 'miguel3.jpg'; // Path to the second image
    const question2 = document.getElementById('question2');
 
            if (miguelimage.src.includes(miguel2)) {
                miguelimage.src = miguel3; // Change to the second image
            } 
            jovenimage2.style.display="none"
            koyimage2.style.display="none"
            joven2.style.display='none';
            koy2.style.display='none';
            question2.textContent="Ang hot mo naman Miguel!";
                        nextbutton2.style.display="block";
}
function nextpage(){
    window.location.href = 'SurpriseImages.html'; // Replace with your desired page
}