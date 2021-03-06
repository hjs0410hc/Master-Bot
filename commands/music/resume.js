const { Command } = require('discord.js-commando');

module.exports = class ResumeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'resume',
      aliases: ['resume-song', 'continue'],
      memberName: 'resume',
      group: 'music',
      description: '일시중지된 곡의 재생을 재개합니다. !pause 로 곡을 일시중지합니다.',
      guildOnly: true
    });
  }

  run(message) {
    var voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.reply('음성 채널에 진입 후 사용해주세요.');

    if (
      typeof message.guild.musicData.songDispatcher == 'undefined' ||
      message.guild.musicData.songDispatcher === null
    ) {
      return message.reply('현재 재생 중인 곡이 없습니다.');
    }

    message.say('곡 재개됨 :play_pause:');

    message.guild.musicData.songDispatcher.resume();
  }
};
