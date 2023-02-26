
		const form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			const username = document.querySelector('#username').value;
			const password = document.querySelector('#password').value;
			if (username === 'usuario' && password === 'senha') {
				alert('Login realizado com sucesso!');
			} else {
				alert('Nome de usuário ou senha incorretos!');
			}
		});
	