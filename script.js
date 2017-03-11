var pessoa = {
	nome: 'Wallace Junior',
	cargo: 'Desenvolvedor de Software',
	foto: 'Junior.jpg',
}

document.getElementById('nome-cabecalho').innerHTML = pessoa.nome;
document.getElementById('cargo-cabecalho').innerHTML = pessoa.cargo;
document.getElementById('img-cabecalho').src = pessoa.foto;

