<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="flex flex-col items-center flex-1">
		<slot />
	</main>

	<footer class="p-2 sm:p-3 text-center">
		<p>
			Visit my <a
				href="https://github.com/pranaybajracharya"
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold"
			>
				GitHub</a
			> to check my other projects
		</p>
	</footer>
</div>
