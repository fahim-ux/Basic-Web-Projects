const url = 'https://quiz26.p.rapidapi.com/questions';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bfff116ee9mshc6d52151d1ffaddp180ff0jsnb346a28f1d20',
    'X-RapidAPI-Host': 'quiz26.p.rapidapi.com'
  }
};
async function getquestion()
{
    const response = await fetch(url, options);
	const result = await response.json();
	console.log(result[0]);
    console.log(result[0].question);
    // let answerIndex=result[0].answer;
    // // let answer=result[0].answerIndex
    // console.log(answerIndex);
    // console.log(result[0].A)
    // console.log(result[0].B)
    // console.log(result[0].C)
    // console.log(result[0].D)
    let answerIndex=result[0].answer;
    if(answerIndex==="A"){console.log(result[0].A)}
    else if(answerIndex==="B"){console.log(result[0].B)}
    else if(answerIndex==="C"){console.log(result[0].C)}
    else if(answerIndex==="D"){console.log(result[0].D)}
    
}

getquestion()