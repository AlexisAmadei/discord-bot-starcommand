<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import banner from '$lib/assets/banner.png';

	const features = [
		{
			title: 'Server management',
			body: 'Create categories, text and voice channels, and full gaming sections in a single command.'
		},
		{
			title: 'Voice hubs',
			body: 'Auto-generated voice channels that spin up when users join and clean themselves up when empty.'
		},
		{
			title: 'Clash of Clans',
			body: 'Register your clan, check live war state, link Discord accounts to player tags, and schedule reminders for wars, CWL, Clan Games and raids.'
		},
		{
			title: 'Utility commands',
			body: 'Avatars, server info, invites, user lookups — the everyday tools your moderators reach for.'
		},
		{
			title: 'Fun built in',
			body: 'Interactive games like Pierre Feuille Ciseaux to keep your community engaged.'
		}
	];
</script>

<svelte:head>
	<title>KIWI — Discord bot for community servers</title>
	<meta
		name="description"
		content="KIWI is a Discord bot for server management, voice hubs, utility commands, and fun."
	/>
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-100">
	<!-- nav -->
	<header class="mx-auto flex max-w-5xl items-center justify-between px-6 pt-6">
		<a href="/" class="flex items-center gap-3">
			<img src={logo} alt="Eat Kiwi logo" class="h-10 w-10 rounded-full" />
			<span class="font-semibold text-white">KIWI</span>
		</a>
		<nav class="flex gap-6 text-sm text-slate-400">
			<a href="/commands" class="transition hover:text-slate-200">Commands</a>
			<a href="/terms" class="transition hover:text-slate-200">Terms</a>
			<a href="/privacy" class="transition hover:text-slate-200">Privacy</a>
		</nav>
	</header>

	<!-- hero -->
	<section class="mx-auto max-w-5xl px-6 pt-16 pb-20 text-center">
		<img
			src={banner}
			alt="Eat Kiwi by kiwidev"
			class="mx-auto mb-10 w-full max-w-2xl rounded-2xl shadow-2xl"
		/>
		<p class="mb-4 text-sm font-semibold tracking-widest text-indigo-400 uppercase">
			Discord bot
		</p>
		<h1 class="text-5xl font-bold tracking-tight sm:text-6xl">KIWI</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
			A Discord bot designed to enhance server management with utility, creation, and fun
			commands — built for communities that want a little more out of their server.
		</p>
		<div class="mt-10 flex flex-wrap justify-center gap-4">
			<a
				href="https://github.com/"
				class="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white transition hover:bg-indigo-400"
			>
				Add to your server
			</a>
			<a
				href="/commands"
				class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:bg-slate-800"
			>
				See features
			</a>
		</div>
	</section>

	<section id="features" class="mx-auto max-w-5xl px-6 pb-24">
		<h2 class="mb-10 text-center text-3xl font-semibold">What it does</h2>
		<div class="grid gap-6 sm:grid-cols-2">
			{#each features as feature}
				<article class="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
					<h3 class="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
					<p class="text-sm text-slate-400">{feature.body}</p>
				</article>
			{/each}
		</div>
	</section>

	<footer class="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
		<div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
			<span>KIWI &middot; Built with SvelteKit</span>
			<a href="/terms" class="hover:text-slate-300">Terms</a>
			<a href="/privacy" class="hover:text-slate-300">Privacy</a>
		</div>
	</footer>
</main>
