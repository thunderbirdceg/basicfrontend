const container = document.querySelector(".container");

roles = ['Web Developer' , 'JVM Consultant' , 'Blogger','Entrepreneur','Gopher','Cloud Architect','C\\C++,Rust Enthusiast']
let currentRoleIndex=0;
let currentCharaterIndex=0;
update()
function update(){
    currentCharaterIndex++;
    
container.innerHTML=`
I am ${roles[currentRoleIndex].slice(0,1)=='E'?'an':'a'} ${roles[currentRoleIndex].slice(0,currentCharaterIndex)}`
if(currentCharaterIndex===roles[currentRoleIndex].length){
    currentRoleIndex++;
    currentCharaterIndex=0;
}
if(currentRoleIndex===roles.length) currentRoleIndex=0;
setTimeout(update,175)
}