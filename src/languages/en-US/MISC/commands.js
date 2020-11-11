// This contains language files for the commands
const languageData = {
	ABOUT_DESCRIPTION: 'dssda',
	ABOUT_MEMBERS: 'Members:',
	ABOUT_CHANNELS: 'Channels:',
	ABOUT_PROCESS: 'Process:',
	ABOUT_SERVERS: 'Servers:',
	ABOUT_MESSAGES: 'Messages seen:',
	ABOUT_UPTIME: 'Uptime:',
	INVITE_TEXT: 'Invite me to your server',
	PRIVACY_POLICY: 'Privacy Policy',
	STATUS_PING: 'Ping:',
	STATUS_CLIENT: 'Client API:',
	STATUS_MONGO: 'MongoDB:',
	SUPPORT_TITLE: (username) => `${username} support`,
	SUPPORT_DESC: (r) => `**Our Server:**  [Support Server](${r[0]})\n **Our website:**  [Website](${r[1]})\n **Git Repo:** [Website](https://github.com/Spiderjockey02/Discord-Bot)`,
};

const translate = (key, args) => {
	const translation = languageData[key];
	if(typeof translation === 'function') return translation(args);
	else return translation;
};

module.exports = translate;