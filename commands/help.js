const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var credits = "421717020288221186";
    var prefix = "!";

    var embed = new discord.MessageEmbed()
        .setTitle("Commands")
        .setDescription(`Prefix: ${prefix}`)
        .addField("Algemene Commands:", `${prefix}help, ${prefix}command hier`)
        .addField("Staff Commands:", `${prefix}kick, ${prefix}command hier`)
        .setTimestamp()
        .setFooter(`Help Embed, Made by <@${credits}>`);

    message.channel.send(embed);


}

module.exports.help = {
    name: "help"
}