function show_quest(){
    document.getElementById("screen2").style ="display:block";
    document.getElementById("showbtn").style ="display:block";
    document.getElementById("screnn1").style = "display:none";
}
let quest1 = ['Option1', 'Option2','Option3','Option4','1'];
let quest2 = ['Option1', 'Option2','Option3','Option4','2'];
let quest3 = ['Option1', 'Option2','Option3','Option4','1'];
let quest4 = ['Option1', 'Option2','Option3','Option4','3'];
let quest5 = ['Option1', 'Option2','Option3','Option4','2'];
let quest6 = ['Option1', 'Option2','Option3','Option4','1'];
let quest7 = ['Option1', 'Option2','Option3','Option4','0'];
let quest8 = ['Option1', 'Option2','Option3','Option4','2'];
let quest9 = ['Option1', 'Option2','Option3','Option4','1'];
let quest10 = ['Option1', 'Option2','Option3','Option4','1'];
let data = [quest1,quest2,quest3,quest4,quest5,quest6,quest7,quest8,quest9,quest10];
var len = data.length*4;
for(var i=0;i<len;i+=4)
{
    const para = document.createElement("div");
    para.id = "demo_"+i;
    para.style ="margin-bottom:30px";
    const element = document.getElementById("screen2");
    element.appendChild(para);
    var a =i;
    a = (i/4);
    var ane = data[a];
    // document.getElementById("demo_"+i).innerHTML = '<h2>Question '+(a+1)+' of 10</h2><p>question 1</p><div class="anwser"><div class="que"> <form action="#" style="width: 100%;"><p onclick="click_radio()"> <input  value="0" type="radio" id="'+a+'_0" name="radio-group" ><label for="'+a+'_0">'+ane[0]+'</label> </p><p onclick="click_radio()"> <input value="1" type="radio" id="'+a+'_1"name="radio-group"> <label for="'+a+'_1">'+ane[1]+'</label> </p> <p onclick="click_radio()"><input value="2" type="radio" id="'+a+'_2" name="radio-group"><label for="'+a+'_2">'+ane[2]+'</label></p> <p onclick="click_radio()"> <input value="3" type="radio" id="'+a+'_3" name="radio-group"><label for="'+a+'_3">'+ane[3]+'</label><input type="hidden" id="quest_'+a+'" value="null" name ="anwser"></p></form></div></div>';
    var _html = '';
    _html = `<h2 class="question-m">Question `+(a+1)+` of 10</h2>
    <p>question 1</p>
        <div class="anwser"><div class="que"> 
            <form action="#" style="width: 100%;">
                <div onclick="click_radio()" class="row-question "id="que_"`+a+`_0"> 
                    <input  value="0" type="radio" id="`+a+`_0" name="radio-group" >
                    <div class="bg-choose" id="bg-`+a+`_0"></div>
                    <label for="`+a+`_0">`+ane[0]+`</label>
                    <div class="text-correct" id="coo_`+a+`_0"></div>
                </div>
                <div onclick="click_radio()" class="row-question" id="que_"`+a+`_1"> 
                    <input value="1" type="radio" id="`+a+`_1"name="radio-group"> 
                    <div class="bg-choose" id="bg-`+a+`_1"></div>
                    <label for="`+a+`_1">`+ane[1]+`</label>
                    <div class="text-correct" id="coo_`+a+`_1"></div>
                </div> 
                <div onclick="click_radio()" class="row-question" id="que_"`+a+`_2">
                    <input value="2" type="radio" id="`+a+`_2" name="radio-group">
                    <div class="bg-choose"id="bg-`+a+`_2"></div>
                    <label for="`+a+`_2">`+ane[2]+`</label>
                    <div class="text-correct" id="coo_`+a+`_2"></div>
                </div> 
                <div onclick="click_radio()" class="row-question" id="que_"`+a+`_3"> 
                    <input value="3" type="radio" id="`+a+`_3" name="radio-group">
                    <div class="bg-choose" id="bg-`+a+`_3"></div>
                    <label for="`+a+`_3">`+ane[3]+`</label>
                    <div class="text-correct" id="coo_`+a+`_3"></div>
                    <input type="hidden" id="quest_`+a+`" value="null" name ="anwser">
                </div>
            </form>
        </div>`;
    document.getElementById("demo_"+i).innerHTML = _html;
}
function get_data()
{
    var diem = 0;
    var checkedBoxes = document.querySelectorAll('input[name=anwser]');
    for(var i=0;i<(len/4);i++){
        if(checkedBoxes[i].value ==data[i][4])
        {
            console.log("coo_"+i+"_"+data[i][4]);
            document.getElementById("coo_"+i+"_"+data[i][4]).innerHTML = "Correct answer";
            document.getElementById("coo_"+i+"_"+data[i][4]).style ="padding:5px;background-color: rgb(215 213 213);";
            document.getElementById("bg-"+i+"_"+data[i][4]).style ="background-color:#d4edda";
            diem++;
        }else
        {
            if(checkedBoxes[i].value != "null" ){
                console.log("coo_"+i+"_"+checkedBoxes[i].value);
                document.getElementById("coo_"+i+"_"+data[i][4]).innerHTML = "Correct answer";
                document.getElementById("coo_"+i+"_"+data[i][4]).style ="padding:5px;background-color:rgb(215 213 213)";
                document.getElementById("coo_"+i+"_"+checkedBoxes[i].value).innerHTML = "Your anwser";
                document.getElementById("coo_"+i+"_"+checkedBoxes[i].value).style ="padding:5px;background-color:rgb(215 213 213);";
                document.getElementById("bg-"+i+"_"+checkedBoxes[i].value).style ="background-color:#f8d7da";
                document.getElementById("bg-"+i+"_"+data[i][4]).style ="background-color:#cacbcb";
            }else{

                document.getElementById("coo_"+i+"_"+data[i][4]).innerHTML = "Correct answer";
                document.getElementById("coo_"+i+"_"+data[i][4]).style ="padding:5px;background:#ddd";
                
                document.getElementById("bg-"+i+"_"+data[i][4]).style ="background-color: #cacbcb;";
            }
            
        }
    }
    document.getElementById("showbtn").style ="display:none";
    var phantram = diem/10*100;
    document.getElementById("result").innerHTML ='<h2>Resutl</h2><p style ="font-size:24px">'+diem+'/10</p><p>'+phantram+'%</p><p>Oke</p><button class="btn__" onclick="load()">Try again</button>';
    
}
function click_radio(){

    var checkedBoxes = document.querySelectorAll('input[name=radio-group]:checked');
    var lengg = checkedBoxes.length;
    for(var i=0;i<lengg;i++){
        var d = checkedBoxes[i].id.split('_');
        document.getElementById("quest_"+d[0]).value = d[1];
    }
}
function load(){
    location.reload();
}

const modal = document.querySelector('#modal')
const displayModalButton = document.querySelector('#display-modal')
const actionButtons = document.querySelectorAll('.action')

const closeModal = () => {
modal.classList.remove('fade-in')
modal.classList.add('fade-out')
window.removeEventListener('click', closeOnClick)
window.removeEventListener('keyup', closeOnEscape)
setTimeout(() => {
    modal.classList.add('hide-me')
    modal.classList.remove('fade-out')

}, 0)

}

const closeOnEscape = (e) => {
if (e.key === 'Escape') {
    closeModal()
}
}

const closeOnClick = (e) => {
if (e.target.id === 'overlay') {
    closeModal()
}
}

function displayModal() {
if (modal.classList[0] === 'hide-me') {
    modal.classList.remove('hide-me')
    modal.classList.add('fade-in')
    window.addEventListener('keyup', closeOnEscape)
    window.addEventListener('click', closeOnClick)
    actionButtons.forEach((button) =>
    button.addEventListener('click', () => closeModal())
    )
} else {
    closeModal()
}
}

displayModalButton.addEventListener('click', displayModal)

