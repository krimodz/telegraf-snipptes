const findMe = () => {
    console.log("find me in terlegram => @Zedkrimo || https://t.me/zedkrimo");
};


//bbuse
bot.use((ctx, next) => {

    //clog
    cosnole.log(ctx)
})


//bbo
bot.on(message(`text`), (ctx) => {

    //cr
    ctx.reply(`hi`);
});



//bbh
bot.hears(`photo`, (ctx) => {

    //crwp
    ctx.replyWithPhoto('file_id || file_direct_URL , type String');

});

//bba
bot.action(`quiz`, (ctx) => {

    //crwq
    ctx.replyWithQuiz(`how old you are`,
        ['opt 1', "opt 2", "opt 3"],
        /*
        *here the extra object => 
        */
        {
            //chat_id: 'use it only if ou are using sendQuiz , if u r using replyWithQuiz remove this element',
            correct_option_id: 0,
            is_anonymous: true,
            open_period: 10,
            explanation: `opt 1`
        }
    );

});