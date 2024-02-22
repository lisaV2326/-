var name1 = prompt("Приветствую вас, здесь вы сможите задать вопрос шару предсказаний.\n введите своё имя:");

function clearInput() {
    var wer = ['<img src="img/шар _1.png" width="200px" height="200px">', '<img src="img/шар _2.png" width="200px" height="200px">', 
    '<img src="img/шар _3.png" width="200px" height="200px">', '<img src="img/шар _4.png" width="200px" height="200px">', 
    '<img src="img/шар _5.png" width="200px" height="200px">', '<img src="img/шар _6.png" width="200px" height="200px">',
    '<img src="img/шар _7.png" width="200px" height="200px">', '<img src="img/шар _8.png" width="200px" height="200px">'];

    var randomWer = wer[Math.floor(Math.random() * wer.length)];

    document.getElementById("ball").innerHTML = randomWer;
    document.getElementById("inp").value = '';
    document.getElementById("inp").placeholder = `${name1}, введите следующий вопрос`;
}



function closew()
{
  alert(`${name1}, надеюсь вы смогли получить ответы на свои вопросы.\nЗаходите ещё.`);
  window.close();
}





