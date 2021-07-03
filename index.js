const Discord = require('discord.js')
const ketse = new Discord.Client()
const config = require('./config.json')

ketse.on("ready", function(){
    console.log(ketse.user.tag + "is online")

    if(config.TOTAL_MEMBERS){
        const total = ketse.guilds.cache.get(config['GUILD-ID']).channels.cache.get(config.TOTAL_MEMBERS)
        if(total){
            setInterval(() => {
            total.setName(`All Members: ${ketse.guilds.cache.get(config['GUILD-ID']).memberCount}`)  
            }, 5000);
        }
    }
    if(config.MEMBERS){
        const member = ketse.guilds.cache.get(config['GUILD-ID']).channels.cache.get(config.MEMBERS)
        if(member){
            setInterval(() => {
                member.setName(`Members: ${ketse.guilds.cache.get(config['GUILD-ID']).members.cache.size}`)  
            }, 5000);
        }
    }
    if(config.BOTS){
        const bots = ketse.guilds.cache.get(config['GUILD-ID']).channels.cache.get(config.BOTS)
        if(bots){
            setInterval(() => {
                bots.setName(`Bots: ${ketse.guilds.cache.get(config['GUILD-ID']).members.cache.filter(e => e.user.bot).size}`)  
            }, 5000);
        } 
    }
    if(config.BOOSTS){
        const boost = ketse.guilds.cache.get(config['GUILD-ID']).channels.cache.get(config.BOOSTS)
        if(boost){
            setInterval(() => {
                boost.setName(`Boosts: ${ketse.guilds.cache.get(config['GUILD-ID']).premiumSubscriptionCount}`)  
            }, 5000);
        } 
    }
    
})

ketse.login(config.TOKEN)