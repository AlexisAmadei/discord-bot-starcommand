const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const db = require('../../utils/db.js');

const stmts = {
    topCommands: db.prepare(`
        SELECT command, COUNT(*) AS uses
        FROM usage_logs
        WHERE command IS NOT NULL
        GROUP BY command
        ORDER BY uses DESC
        LIMIT 10
    `),
    topUsers: db.prepare(`
        SELECT username, COUNT(*) AS actions
        FROM usage_logs
        GROUP BY user_id
        ORDER BY actions DESC
        LIMIT 10
    `),
    voiceHub: db.prepare(`
        SELECT username, timestamp
        FROM usage_logs
        WHERE type = 'voice_hub'
        ORDER BY timestamp DESC
        LIMIT 10
    `),
    total: db.prepare(`SELECT COUNT(*) AS count FROM usage_logs`),
};

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Bot usage statistics')
        .addSubcommand(sub => sub
            .setName('commands')
            .setDescription('Top 10 most used commands'))
        .addSubcommand(sub => sub
            .setName('users')
            .setDescription('Top 10 most active users'))
        .addSubcommand(sub => sub
            .setName('voicehub')
            .setDescription('Last 10 voice hub channel creations')),

    async execute(interaction) {
        const sub = interaction.options.getSubcommand();
        const total = stmts.total.get().count;

        if (sub === 'commands') {
            const rows = stmts.topCommands.all();
            const embed = new EmbedBuilder()
                .setTitle('Top commands')
                .setColor(0x5865F2)
                .setFooter({ text: `${total} total events logged` })
                .setTimestamp();

            if (rows.length === 0) {
                embed.setDescription('No data yet.');
            } else {
                embed.addFields(rows.map((r, i) => ({
                    name: `${i + 1}. /${r.command}`,
                    value: `${r.uses} use${r.uses > 1 ? 's' : ''}`,
                    inline: true,
                })));
            }

            await interaction.reply({ embeds: [embed], ephemeral: true });

        } else if (sub === 'users') {
            const rows = stmts.topUsers.all();
            const embed = new EmbedBuilder()
                .setTitle('Most active users')
                .setColor(0x57F287)
                .setFooter({ text: `${total} total events logged` })
                .setTimestamp();

            if (rows.length === 0) {
                embed.setDescription('No data yet.');
            } else {
                embed.addFields(rows.map((r, i) => ({
                    name: `${i + 1}. ${r.username}`,
                    value: `${r.actions} action${r.actions > 1 ? 's' : ''}`,
                    inline: true,
                })));
            }

            await interaction.reply({ embeds: [embed], ephemeral: true });

        } else if (sub === 'voicehub') {
            const rows = stmts.voiceHub.all();
            const embed = new EmbedBuilder()
                .setTitle('Voice hub — recent activity')
                .setColor(0xFEE75C)
                .setFooter({ text: `${total} total events logged` })
                .setTimestamp();

            if (rows.length === 0) {
                embed.setDescription('No voice hub activity yet.');
            } else {
                embed.setDescription(
                    rows.map(r => `**${r.username}** — <t:${Math.floor(new Date(r.timestamp).getTime() / 1000)}:R>`).join('\n')
                );
            }

            await interaction.reply({ embeds: [embed], ephemeral: true });
        }
    },
};
