/**
 * Hello There! Don't look down here, it's just a bunch of code that You don't want to see.
 */
const Eris = require("eris");
const Librus = require("librus-api");

let client = new Librus();
let bot = new Eris.CommandClient("your_bot_token_here", {}, {
    description: "A bot using Eris and librus-api",
    owner: "vanishdeveloper",
    prefix: "/"
});

bot.registerCommand("today", (msg) => {
    return client.authorize("login", "pass").then(function () {
        // important things
        let numerekPromise = client.getNumerek();
        let planPromise = client.getPlan();
        let wiadomosciPromise = client.getWiadomosci();

        return Promise.all([numerekPromise, planPromise, wiadomosciPromise]).then(values => {
            let embed = {
                title: "Today's Information",
                description: `Szczesliwy numerek: ${values[0]}\nPlan Lekcji: ${values[1]}\nWiadomosci: ${values[2]}`,
                timestamp: new Date().toISOString()
            };
            bot.createMessage(msg.channel.id, { embed: embed });
        });
    });
}, {
    description: "Get today's information",
    fullDescription: "The bot will send an embed with today's information."
});

bot.connect();