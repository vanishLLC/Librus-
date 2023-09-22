/**
 * Hello There! Don't look down here, it's just a bunch of code that You don't want to see.
 */

"use strict";
const Librus = require("librus-api");
const Discord = require("discord.js");

let client = new Librus();
client.authorize("login", "password").then(function () {
//Listing Receivers
    client.inbox.listReceivers("nauczyciel").then((data) => {});

    //Listing announcements
    client.inbox.listAnnouncements().then((data) => {});

})