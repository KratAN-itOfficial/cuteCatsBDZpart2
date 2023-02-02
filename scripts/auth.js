//using cookie script Auth

document.getElementById('check').onclick = function(){
	let login = document.getElementById('login').value;
	/* login = enterForm.querySelector('[id="login"]') */
    
	let password = document.getElementById('password').value;
	/* password = enterForm.querySelector('[id="password]') */
    

    //хардкод для проверки

	if (login == 'ivan' && password == '334455')
		{
			alert('welcome');
			document.cookie = 'login = ivan';
			document.cookie = 'password = 334455';
		}
	else if (login == 'alex' && password == '777')
	{
		alert('welcome');
		document.cookie = 'login = alex';
		document.cookie = 'password = 777';
	}
	else if (login == 'petr' && password == 'b5678')
	{
		alert('welcome');
		document.cookie = 'login = petr';
		document.cookie = 'password = b5678';
	}
	else alert('Incorrect login ot password!');
	
	// document.cookie = 'login = `$login`';
	// document.cookie = 'password = `$password`';
}


//код попапа Авторизации
let openPopUp = document.getElementById('auth')
let closePopupForm2 = document.getElementById("popup-close2");
let popUp = document.getElementById('popup2')

//нажимаем Авторизоваться и открывается попап
openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

//закрытие попапа [Х] --также попап закрывается после заполнения Логин\Пароль
closePopupForm2.addEventListener('click', () => {
    popUp.classList.remove('active');
})



//https://fontawesome.com/icons/user?s=solid&f=classic