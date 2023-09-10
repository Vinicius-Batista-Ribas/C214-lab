import App from './musicas.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;