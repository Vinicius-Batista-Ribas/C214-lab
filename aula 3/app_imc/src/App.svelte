<script>
	// Variáveis de estado
	let peso = 0;      // Peso do usuário
	let altura = 0;    // Altura do usuário
	let imc = 0;       // Índice de Massa Corporal
	let ideal = 0;
	let text = '';
  
	// Função para calcular o IMC
	function calcularIMC() {
	  if (peso > 0 && altura > 0) {
		imc = (peso / Math.pow(altura, 2)).toFixed(2);
		// Defina a classe da célula com base no valor do IMC
		if(imc < 18.5){
			ideal = ((18.5 - imc)*Math.pow(altura, 2)).toFixed(2);
		}else if(imc > 24.9){
			ideal = ((imc - 24.9)*Math.pow(altura, 2)).toFixed(2);
		}

			if( imc <= 18.5){text = "abaixo do peso!";}
			else if( imc >= 18.6 && imc <= 24.9){text = 	"peso ideal parabens!";}
			else if( imc >= 25 && imc <= 29.9){text = "Leventente acima do peso"}
			else if( imc >= 30 && imc <= 34.9){text = "Obesidade frau I";}
			else if( imc >= 35 && imc <= 39.9){text = "Obesidade grau II (Severa)!"}
			else if( imc >= 40){text = "Obesidade III (MORBIDA)"}			
		
	  } else {
		imc = 0;
	  }
	}
  </script>
  
  <main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
		<div>
			<p>Seu IMC é {imc}, voce tem {text}</p>
		</div>
		{#if imc > 24.9}
	 		<div>
				<p>Voce precisa perder {ideal} para um peso Normal</p>
			</div>
		{/if}
		{#if imc < 18.5}
	 		<div>
				<p>Voce precisa ganhar {ideal} para um peso Normal</p>
			</div>
		{/if}
		{#if imc >= 18.5 && imc <= 24.9}
	 		<div>
				<p>Voce esta no pesso ideal! Parabens</p>
			</div>
		{/if}
	{/if}

	<table>
		<tr >
		  <th class="imc">Classificação</th>
		  <th class="imc">IMC</th>
		</tr>
		<tr>
		  <td class="imc">Abaixo do Peso</td>
		  <td>&lt; 18.5</td>
		</tr>
		<tr>
		  <td class="imc">Peso Normal</td>
		  <td>18.5 - 24.9</td>
		</tr>
		<tr>
		  <td class="imc">Sobrepeso</td>
		  <td>25 - 29.9</td>
		</tr>
		<tr>
		  <td class="imc">Obesidade Grau 1</td>
		  <td>30 - 34.9</td>
		</tr>
		<tr>
		  <td class="imc">Obesidade Grau 2</td>
		  <td>35 - 39.9</td>
		</tr>
		<tr>
		  <td class="imc">Obesidade Grau 3</td>
		  <td>&ge; 40</td>
		</tr>
	  </table>

  </main>
  
  <style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
	  
	input {
	  padding: 0.25rem;
	}

	table {
		border-collapse: collapse;
		width: 100%;

	}

	th, td {
		border: 1px solid #000;
		padding: 8px;
		text-align: center;
	}

	th {
		background-color: #f2f2f2;
	}

	.imc{
		background-color: rgba(0, 0, 255, 0.3);
	}

	div{
		border: 2.0px black;
		border-radius: 2%;
	}
 
  </style>
  