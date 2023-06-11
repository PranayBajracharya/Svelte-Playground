<script type="ts">
	import { page } from '$app/stores';
	import logo from '$icons/svelte.svg';
	import github from '$icons/github.svg';
</script>

<header>
	<div>
		<a
			class="grid h-16 w-16 place-items-center"
			href="https://github.com/PranayBajracharya/Svelte-Playground"
			target="_blank"
			rel="noopener noreferrer"
		>
			<img class="h-8 w-8" src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/todo' ? 'page' : undefined}>
				<a href="/todo">Todo</a>
			</li>
			<li aria-current={$page.url.pathname === '/memory' ? 'page' : undefined}>
				<a href="/memory">Memory</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div>
		{#if $page.data.session?.user}
			<button class="grid h-16 w-16 place-items-center" on:click={() => {}}>
				<img
					src={$page.data.session?.user?.image}
					class="h-8 w-8 rounded-full"
					alt={$page.data.session?.user?.name}
				/>
			</button>
		{:else}
			<button class="grid h-16 w-16 place-items-center" on:click={() => {}}>
				<img src={github} class="h-8 w-8 invert filter" alt="GitHub" />
			</button>
		{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(125, 125, 125, 0.8);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
