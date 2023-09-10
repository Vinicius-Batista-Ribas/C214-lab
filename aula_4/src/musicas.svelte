<script>
	import Jogador from "./musico.svelte";
    let random = 0;
    let estilo = [
    'Eletronica',
    'Rock',
    'Jazz',
    'Blues',
    'Country',
    'Pop',
    'Hip-Hop',
    'Trap'
    ]
    function selectGender(){
        random = Math.floor(Math.random() * 8);
    }
</script>

<main>
	<h1> Exibi um genero musical aleatorio.</h1>
	<Jogador acao = {selectGender} />
    <h3> hoje vc pode ouvir: {estilo[random]}</h3>
</main>