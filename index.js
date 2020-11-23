const Discord = require('discord.js');

require('dotenv-flow').config();

const operations = require('./archive')

const clientOne = new Discord.Client();
clientOne.login(process.env.TokenOne);

const clientTwo = new Discord.Client();
clientTwo.login(process.env.TokenTwo);

const clientThree = new Discord.Client();
clientThree.login(process.env.TokenThree);

const clientFour = new Discord.Client();
clientFour.login(process.env.TokenFour);

const main = async () => {

  setInterval (function () {

    clientOne.on('ready', async () => {
    console.log(`Logged in as ${clientOne.user.tag}!`);
    const BotData = ['774851343776874526', '#__next > div:nth-child(4) > div > a:nth-child(5) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.gPeSWt > div:nth-child(3) > span', '#__next > div:nth-child(4) > div > a:nth-child(5) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.sc-10ewpnx-15.cFCCec > div > div > div:nth-child(2) > span.sc-1ryi78w-0.gCzMgE.sc-16b9dsl-1.kUAhZx.sc-1n72lkw-0.lhmHll > span']
    await operations.process(clientOne, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1], BotData[2])

  });

  clientTwo.on('ready', async () => {
    console.log(`Logged in as ${clientTwo.user.tag}!`);
    const BotData = ['775415827583336499', '#__next > div:nth-child(4) > div > a:nth-child(7) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.gPeSWt > div:nth-child(3) > span', '#__next > div:nth-child(4) > div > a:nth-child(7) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.gPeSWt > div.sc-10ewpnx-0.sc-10ewpnx-9.sc-10ewpnx-12.gjwAxX > span']
    await operations.process(clientTwo, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1], BotData[2])

  });

  clientThree.on('ready', async () => {
    console.log(`Logged in as ${clientThree.user.tag}!`);
    const BotData = ['775443907781722113', '#__next > div:nth-child(4) > div > a:nth-child(6) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.gPeSWt > div:nth-child(3) > span', '#__next > div:nth-child(4) > div > a:nth-child(6) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.gPeSWt > div.sc-10ewpnx-0.sc-10ewpnx-9.sc-10ewpnx-12.gjwAxX > span']
    await operations.process(clientThree, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1], BotData[2])

  });

  clientFour.on('ready', async () => {
    console.log(`Logged in as ${clientFour.user.tag}!`);
    const BotData = ['775452566489661461', '#__next > div:nth-child(4) > div > a:nth-child(8) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.gPeSWt > div:nth-child(3) > span', '#__next > div:nth-child(4) > div > a:nth-child(8) > div > div.sc-10ewpnx-0.sc-10ewpnx-14.gPeSWt > div.sc-10ewpnx-0.sc-10ewpnx-9.sc-10ewpnx-12.gjwAxX > span']
    await operations.process(clientFour, process.env.ServerID, process.env.DroleID, process.env.IroleID, BotData[0], BotData[1], BotData[2])

  });
}, 5*60000);
}

main()