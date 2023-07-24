var recommendationGroup = ["Bruno recommend you to study and practice programming every day", "You should stop to learn everything new, because that is impossible to learn everything.", "You have to understand the basis and learn about unit test and design patterns"];

document.getElementById('subm').addEventListener('click', () => {
    let messageRecommendation = document.getElementById('message_recommendation').value;
    if(messageRecommendation.trim() != '' && messageRecommendation.trim() != null){
        recommendationGroup.push(messageRecommendation);
        console.log(recommendationGroup);
    }
})



document.getElementById('recommendation').addEventListener('load', () =>{
    let recom = document.getElementById('recommendation');
    for (let i = 0; i < recommendationGroup.length; i++) {
        let newDiv = document.createElement('div');
        let newContent = document.createTextNode(recommendationGroup[i])
        newDiv.appendChild(newContent);
        recom.append(newDiv);
    }
})