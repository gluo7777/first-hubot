module.exports = (robot) => {

    // when hello is typed anywhere
    robot.hear(/hello/i, (res) => {
        res.send("hey, how's it going?");
    })

    // when preceded by @willbot with following
    robot.respond(/hey/i, res => {
        res.reply('Yo!!!');
    })
}