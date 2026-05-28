<script lang="ts">
	const lastUpdated = '2026-05-28';

	const sections = [
		{
			title: '1. Overview',
			body: 'This Privacy Policy explains what data the StarCommand Discord bot processes when you use it. StarCommand only handles the information strictly necessary to respond to slash commands and to power features that require persistence (such as scheduled reminders and Clash of Clans account links).'
		},
		{
			title: '2. Data we process in transit',
			body: 'When you invoke a slash command, Discord transmits the data required to execute that command. This typically includes your Discord user ID and username, the server (guild) ID, the channel ID, and the options you passed to the command. For features such as /user, /server, or /avatar, the bot reads publicly available Discord profile and server information solely to build its response and does not store it.'
		},
		{
			title: '3. Data we store',
			body: 'Some features require persistence and are stored in a local SQLite database on the server hosting the bot. Specifically, for the /coc (Clash of Clans) features, we store: the registered clan tag, name and the Discord user ID of whoever registered it; Discord-to-player-tag links (Discord user ID + Clash of Clans player tag and name) for users who opt in via /coc link set; scheduled reminders (channel ID, kind, fire time, optional note, creator user ID); and per-guild configuration (timezone, war-reminder settings, war channel ID). No data is stored for users who never invoke these commands.'
		},
		{
			title: '4. Data we do not collect',
			body: 'StarCommand does not read or store the content of regular messages in your server. It does not log private conversations, direct messages, or message history. It does not sell, share, or transfer data to advertisers, and does not use your data for profiling or analytics.'
		},
		{
			title: '5. Retention',
			body: 'Stored records persist until they are removed by the user or a server administrator: clan registrations are deleted via /coc clan unregister, player links can be removed by re-running /coc link set or by an administrator, and reminders are removed via /coc reminder remove (one-off reminders are also cleared automatically after firing). Removing the bot from your server does not automatically purge previously stored rows for that guild; contact the maintainer if you need a manual wipe. Operational logs may temporarily contain identifiers such as user or guild IDs for debugging and are rotated regularly.'
		},
		{
			title: '6. Third-party services',
			body: 'The /coc commands query the official Clash of Clans API (run by Supercell) using the clan or player tags you provide. The tags are sent to that API and Supercell\'s own privacy terms apply to that interaction. StarCommand only stores the identifiers and lightweight metadata listed in section 3 — not the full responses returned by the API.'
		},
		{
			title: '7. Permissions',
			body: 'When added to a server, StarCommand requests Discord permissions necessary for its features (such as managing channels, roles, and invites, and sending messages for reminders). These permissions are used solely to execute the commands invoked by authorized server members and to deliver scheduled reminders to the channel you configured.'
		},
		{
			title: '8. Your rights',
			body: 'You can view what is stored about you with /coc link who, /coc reminder list, and /coc config. You can delete your data at any time using the corresponding remove/unregister/unlink commands. For requests that cannot be fulfilled through the bot itself (for example, a full wipe of all data tied to your Discord user ID across every guild), contact the maintainer using the address below.'
		},
		{
			title: '9. Children',
			body: 'StarCommand is intended for use on Discord, which requires users to meet Discord\'s minimum age requirements. The bot is not directed at children below those age limits.'
		},
		{
			title: '10. Changes to this policy',
			body: 'This Privacy Policy may be updated occasionally. The "last updated" date at the top reflects the most recent revision. Material changes will be reflected on this page.'
		},
		{
			title: '11. Contact',
			body: 'For privacy-related questions or data deletion requests, contact the maintainer at kiwi.dev2024@gmail.com.'
		}
	];
</script>

<svelte:head>
	<title>Privacy Policy — StarCommand</title>
	<meta
		name="description"
		content="Privacy Policy for the StarCommand Discord bot — what data is processed and how."
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
		<h1 class="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
		<p class="mt-4 text-sm text-slate-500">Last updated: {lastUpdated}</p>
		<p class="mt-6 text-lg text-slate-300">
			How StarCommand handles the data it sees when you use its slash commands.
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
