<script lang="ts">
	type Command = {
		name: string;
		description: string;
		options?: { name: string; description: string }[];
	};

	type CommandGroup = {
		title: string;
		blurb: string;
		commands: Command[];
	};

	const groups: CommandGroup[] = [
		{
			title: 'Server creation',
			blurb: 'Spin up categories, channels, and full game sections in seconds.',
			commands: [
				{
					name: '/create-category',
					description: 'Create a category.',
					options: [{ name: 'category-name', description: 'The name of the category.' }]
				},
				{
					name: '/create-textchannel',
					description: 'Create a text channel.',
					options: [
						{ name: 'channel-name', description: 'The name of the channel.' },
						{ name: 'topic', description: 'The topic of the channel.' }
					]
				},
				{
					name: '/create-voicechannel',
					description: 'Create a voice channel.',
					options: [
						{ name: 'channel-name', description: 'The name of the channel.' },
						{ name: 'userlimit', description: 'The user limit of the channel.' }
					]
				},
				{
					name: '/add-game',
					description:
						'Creates a game category, text channel, and voice channel. If no role is provided, one is created automatically.',
					options: [
						{ name: 'game-name', description: 'The name of the game.' },
						{
							name: 'role',
							description:
								'The role that can view the gaming category (optional). If not provided, a new role will be created.'
						}
					]
				}
			]
		},
		{
			title: 'Voice hubs',
			blurb: 'Auto-generated voice channels that spin up on join and clean up when empty.',
			commands: [
				{
					name: '/create-voice-hub',
					description:
						'Create a voice hub. Joining its channel spawns a personal voice channel for the user.',
					options: [
						{ name: 'hub-name', description: 'The name of the hub category.' },
						{
							name: 'category',
							description:
								'An existing category to place the hub channel in. If omitted, a new category is created.'
						}
					]
				}
			]
		},
		{
			title: 'Utility',
			blurb: 'Everyday tools your moderators reach for.',
			commands: [
				{
					name: '/avatar',
					description: 'Display the tagged user avatar.',
					options: [{ name: 'user', description: "The user's avatar to display." }]
				},
				{ name: '/date', description: 'Replies with the current date and time.' },
				{ name: '/help', description: 'List all available commands.' },
				{ name: '/create-invite', description: 'Creates an invite link for the server.' },
				{ name: '/server', description: 'Replies with server info.' },
				{ name: '/user', description: 'Get user info.' }
			]
		},
		{
			title: 'Fun',
			blurb: 'Interactive games to keep your community engaged.',
			commands: [
				{
					name: '/pfc',
					description: "Pierre Feuille Ciseaux. En 1 manche. T'as déjà perdu.",
					options: [
						{ name: 'choix', description: 'Choisissez entre Pierre, Feuille ou Ciseaux.' }
					]
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Commands — StarCommand</title>
	<meta
		name="description"
		content="The full list of StarCommand slash commands — server management, voice hubs, utility, and fun."
	/>
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-100">
	<section class="mx-auto max-w-5xl px-6 pt-20 pb-12">
		<a
			href="/"
			class="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-slate-200"
		>
			<span aria-hidden="true">&larr;</span> Back to home
		</a>
		<h1 class="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Commands</h1>
		<p class="mt-4 max-w-2xl text-lg text-slate-300">
			Every slash command StarCommand exposes, grouped by what they do.
		</p>
	</section>

	<section class="mx-auto max-w-5xl space-y-12 px-6 pb-24">
		{#each groups as group}
			<div>
				<h2 class="text-2xl font-semibold text-white">{group.title}</h2>
				<p class="mt-1 text-sm text-slate-400">{group.blurb}</p>
				<div class="mt-6 grid gap-4 sm:grid-cols-2">
					{#each group.commands as command}
						<article class="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
							<code class="font-mono text-indigo-300">{command.name}</code>
							<p class="mt-2 text-sm text-slate-300">{command.description}</p>
							{#if command.options && command.options.length > 0}
								<ul class="mt-4 space-y-1.5 border-t border-slate-800 pt-3 text-xs">
									{#each command.options as option}
										<li class="text-slate-400">
											<code class="font-mono text-slate-200">{option.name}</code>
											<span class="text-slate-500"> — {option.description}</span>
										</li>
									{/each}
								</ul>
							{/if}
						</article>
					{/each}
				</div>
			</div>
		{/each}
	</section>

	<footer class="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
		StarCommand &middot; Built with SvelteKit
	</footer>
</main>
