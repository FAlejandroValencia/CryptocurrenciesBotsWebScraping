const puppeteer = require('puppeteer');
require('events').EventEmitter.defaultMaxListeners = 0;


const process = async (client, ServerID, DroleID, IroleID, BotID, selectorA, selectorP) => {
    let browser;
    try {
        console.log("Opening the browser......");
        browser = await puppeteer.launch({
            headless: true,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });

        let url = 'https://www.blockchain.com/prices/';

    let page = await browser.newPage();
    console.log(`Navigating to ${url}...`);
    await page.goto(url, {waitUntil: 'load', timeout: 0});
        
    const amount = await page.$eval(selectorA, el=>el.innerHTML);
    console.log(amount);
    const percentage = await page.$eval(selectorP, el=>el.innerHTML);
    console.log(percentage);
    
    const guildBot = await client.guilds.fetch(ServerID);
    const botMember = await guildBot.members.fetch(BotID);

    const roleRATEDECREASE = await guildBot.roles.cache.find((role) => role.id === DroleID)
    const roleRATEINCREASE = await guildBot.roles.cache.find((role) => role.id === IroleID)

    percentageNew = percentage.substr(0,5);
    if(percentageNew > 0){
        percentageNewTwo = percentageNew.substr(1,4)
        botMember.setNickname(`${amount}`+` ↑ `+`${percentageNewTwo}%`)
        botMember.roles.remove(roleRATEDECREASE);
        botMember.roles.add(roleRATEINCREASE);
        
      }else if(percentageNew < 0){
        percentageNewTwo = percentageNew.substr(1,4)
        botMember.setNickname(`${amount}`+` ↓ `+`${percentageNewTwo}%`)
        botMember.roles.add(roleRATEDECREASE);
        botMember.roles.remove(roleRATEINCREASE);
      }else{
        console.log("allOK")
      }                                  
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    "process": process
}