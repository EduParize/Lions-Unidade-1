//! Para facilitar, esse programa não precisa pedir entrada do usuário.
// !Vamos criar um objeto para guardar as informações da sua pintura favorita. 
//! Se ainda não tiver uma, pesquise no google, e escolha.
// !Esse objeto deve salvar o nome da pintura, o nome do pintor,
// ! o ano que ela foi feita e uma frase curta 
// !com seu significado, então ele deve ter as seguintes propriedades: 
//! nomePintura, nomeArtista, ano, significado.
// !Em seguida, use o console.log() para imprimir uma mensagem do tipo: 
// !“Minha pintura favorita é … feita por
//!  … em … e significa …”.

// como declarar um objeto 
const pintura = {
    autor: 'Vincent van Gogh',
    nomePintura: 'A Noite Estrelada',
    ano: 1889,
    significado: 'Representa a luta interna do artista com sua saúde mental e sua busca por beleza e esperança.'
}

// como acessar as propriedades do objeto
console.log(`Minha pintura favorita é "${pintura.nomePintura}" feita por ${pintura.autor} em ${pintura.ano} e significa "${pintura.significado}".`);
