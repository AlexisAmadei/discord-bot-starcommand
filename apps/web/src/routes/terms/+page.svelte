<script lang="ts">
	const lastUpdated = '2026-05-28';

	const sections = [
		{
			title: '1. Acceptance of terms',
			body: 'By adding StarCommand to a Discord server or using any of its slash commands, you agree to these Terms of Service ("Terms"). If you do not agree, remove the bot from your server and stop using its commands. Server administrators who add StarCommand are responsible for ensuring that members of their server are aware of these Terms.'
		},
		{
			title: '2. Description of the service',
			body: 'StarCommand is a Discord bot that provides server management, voice hub, utility, and fun commands. The service is provided free of charge, as-is, with no guarantee of availability, uptime, or feature continuity. Commands and features may be added, modified, or removed at any time without prior notice.'
		},
		{
			title: '3. Acceptable use',
			body: 'You agree not to use StarCommand to harass other users, spam Discord APIs, attempt to disrupt or reverse-engineer the bot, evade Discord rate limits, or perform any action that violates the Discord Terms of Service or Community Guidelines. We reserve the right to refuse service to any server or user that misuses the bot.'
		},
		{
			title: '4. Server administrator responsibilities',
			body: 'Administrators who invite StarCommand grant it permissions necessary for its features (managing channels, roles, invites, etc.). You are responsible for the permissions you grant and for the actions performed by your moderators through the bot. Commands that create or modify Discord resources (categories, channels, roles, invites) act on behalf of the user who invoked them.'
		},
		{
			title: '5. Third-party services',
			body: 'StarCommand may interact with third-party APIs (such as the official Clash of Clans API) to provide certain features. Use of those features is also subject to the terms of the respective third-party providers. We are not responsible for the availability or accuracy of data returned by third-party services.'
		},
		{
			title: '6. Disclaimer and limitation of liability',
			body: 'StarCommand is provided "as is" without warranty of any kind, express or implied. The maintainers are not liable for any damages, data loss, channel or role misconfiguration, or other consequences arising from the use of the bot. You use the service at your own risk.'
		},
		{
			title: '7. Termination',
			body: 'You may stop using StarCommand at any time by removing it from your server. We may suspend or terminate access to the bot for any server or user that violates these Terms or the Discord Terms of Service.'
		},
		{
			title: '8. Changes to these terms',
			body: 'These Terms may be updated occasionally. The "last updated" date at the top reflects the most recent revision. Continued use of StarCommand after changes are published constitutes acceptance of the updated Terms.'
		},
		{
			title: '9. Contact',
			body: 'For questions about these Terms, contact the maintainer at kiwi.dev2024@gmail.com.'
		}
	];
</script>

<svelte:head>
	<title>Terms of Service — StarCommand</title>
	<meta
		name="description"
		content="Terms of Service (CGU) for the StarCommand Discord bot."
	/>
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-100">
	<section class="mx-auto max-w-3xl px-6 pt-20 pb-12">
		<a
			href="/"
			class="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-slate-200"
		>
			<span aria-hidden="true">&larr;</span> Back to home
		</a>
		<h1 class="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
		<p class="mt-4 text-sm text-slate-500">Last updated: {lastUpdated}</p>
		<p class="mt-6 text-lg text-slate-300">
			These Terms govern your use of the StarCommand Discord bot. Please read them carefully
			before adding the bot to your server.
		</p>
	</section>

	<section class="mx-auto max-w-3xl space-y-8 px-6 pb-24">
		{#each sections as section}
			<article class="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
				<h2 class="text-lg font-semibold text-white">{section.title}</h2>
				<p class="mt-3 text-sm leading-relaxed text-slate-300">{section.body}</p>
			</article>
		{/each}
	</section>

	<footer class="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
		StarCommand &middot; Built with SvelteKit
	</footer>
</main>
