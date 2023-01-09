<script lang="ts">
	import "../app.postcss";
    import Header from './Header.svelte';
    import './styles.css';

    // 시간 및 IP 표시
    import { onMount } from "svelte"
    let currentTime:{utc_datetime: string, client_ip: string}

    onMount(async () => {
    currentTime = await (await fetch("https://worldtimeapi.org/api/timezone/Asia/Seoul")).json()
  })
</script>

<div class="app">
	<header></header>

	<main>
		<slot></slot>
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
		<p>IP: {currentTime?.client_ip ?? ""}, Time: {currentTime?.utc_datetime ?? ""}</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
