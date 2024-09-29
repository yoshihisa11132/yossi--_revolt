const bot_token = process.env.bot_token || "not set"
const bot_mention_id = "<@01HH8QGS8J310TYS1DAR99K0HT> "; //変えてね
const yossi1113_id = "<@01HEHV39TDJ2SZZCWT7R5JEJK9> "; //変えてね
if (bot_token == "not set"){
    console.error("なんかトークン入ってないんやが...");
    return;
}

const { Client } = require("revolt.js");
const http = require("http"); //render対策
let client = new Client();

// ここからrender用
const server = http.createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
    const responseMessage = "<h1>yossi-bot</h1><br><p>起動しますた</p>";
    response.end(responseMessage);
});
// ここまで

client.on("ready", async () =>
    console.info(`ログインしました： ${client.user.username}`)
);

client.on("messageCreate", async (message) => {
    const contents = message.content;
    switch(contents){
        case "暇":
            message.channel.sendMessage("そうだね～");
            break;
        case "過疎":
            message.channel.sendMessage("いるよ！");
            break;
        case "落ち":
            message.channel.sendMessage("ok!");
            break;
        case "草":
            message.channel.sendMessage("草wwww");
            break;
        case "おはよう":
            message.channel.sendMessage("おはよう！");
            break;
        case "おやすみ":
            message.channel.sendMessage("おやすみ！");
            break;
        case "寝る":
            message.channel.sendMessage("おやすみ！");
            break;
        case "こんにちは":
            message.channel.sendMessage("こんにちは！");
            break;
        case "こんばんわ":
            message.channel.sendMessage("こんばんわ！");
            break;
        case "所詮BOT":
            message.channel.sendMessage("!!# ふざけんな!!");
            break;
        case "y.help":
            message.channel.sendMessage("!!そのうち作ります!!"); // いい加減作れ
            break;
        case bot_mention_id.split(" ")[0]:
            message.channel.sendMessage("呼んだ？");
            break;
        case "ただいま":
            message.channel.sendMessage("おかえり！");
            break;
        case "浮上":
            message.channel.sendMessage("おかえり！");
            break;
        case "君は誰？":
            message.channel.sendMessage("僕はyossi-くん！　yossi-1113によって作られて、みんなとおしゃべりできるように プログラムされてるよ！\n\
                !!ただしJF6DEUの手によってrevoltへ移植された模様!!");
                break;
        case "お腹すいた":
            message.channel.sendMessage("もらい腹減り\n腹減った");
            break;
        case "y.ping":
            message.channel.sendMessage("RevoltにはPingないよ！でも卓球の球を返すことはできるで！\nPong!:ping_pong:");
            break;
        case yossi1113_id.split(" ")[0]:
            message.channel.sendMessage(bot_mention_id);
            break;
        case "笹":
            message.channel.sendMessage("笹wwww");
            break;
        case ":01HDTGB1FWB419A4ZP4VYB570P:":
            message.channel.sendMessage("<@01H1G2Q5CZY9NNAHJ20S00G8TT>");
            break;
        case "洗脳":
            message.channel.sendMessage("あなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろうあなたも手動BOTになろう");
            break;
        case "BOT楽しい":
            message.channel.sendMessage("洗脳成功！");
            break;
        case "BAN":
            message.channel.sendMessage("え？");
            break;
        case "BOT最高":
            message.channel.sendMessage("一緒に手動BOTを増やしていこう！");
            break;
        case "BOTこそ正義":
            message.channel.sendMessage("洗脳こそ正義");
            break;
        case "君も^^":
            message.channel.sendMessage("＾アッハああっははあっふがうｈばｗんｋｗｑ＾あ＾おー＠あｓ＾せｒｆｑげｒｊｒｈｒｈふぉっはああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああはははっははははっはっははっはははっっははっはははっははっははっははっははっははっははっははっははっいｑしゃはっやおざｖ０−あびゃｂｊないっっｂｙ８ｂ−ｙでｙｃｖｙｖｙｆｙｆべｙｖあああああああああああああああああああああああああああああああああああああああああああああああ");
            break;
        case "あはは":
            message.channel.sendMessage("あははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははははあああああああああああああああああああああああああああ");
            break;
        case "ボカッドカッ":
            message.channel.sendMessage("ご、ごめんなさい.....");
            break;
        case "死ねよ":
            message.channel.sendMessage("おめえのほうが死ねよこのクソガキが！ !!あ、感情的になってもうた.....!!");
            break;
        case "黙れよ":
            message.channel.sendMessage("人に指示できるくらいだったら死んだほうがいいと思うが!!また感情的に...!!");
            break;
        case "fackyou":
            message.channel.sendMessage("ガキは死ね！!!...!!");
            break;
        case "モアイおいしい":
            message.channel.sendMessage("/kick <@"+message.authorId+"> Receivedうわぁmessage");
            break;
        case "この後職員室行こうか":
            message.channel.sendMessage("いやだ！いやだ！たたかれたくない！");
            break;
        case "殺すぞ":
            message.channel.sendMessage("ヒィッ");
            break;
        case "y.say":
            message.channel.sendMessage("悲しいかもしれないお知らせです、廃止です。Discord版使おう"); // めんどくさいんだって...
            break;
        case "yossi-来い":
            var newmessage = "";
            for (let i=0;i<=59;i++){ // 節度を持って
                newmessage += yossi1113_id + " ";
            }
            message.channel.sendMessage(newmessage);
            break;
        case "グサッ":
            message.channel.sendMessage("うっ......");//process.exit(1);使うと止まる
            //メッセージが送られなくなるかも
            break;//終了させたくないときはbreak;を使うこと
        case "yossi-殺したい":
            message.channel.sendMessage("...!!いつ殺そう....ともかくナイフを持ってることは隠さなきゃ!!");
            break;
        case "なぜ戦争が生まれるんだ":
            message.channel.sendMessage("https://open.spotify.com/intl-ja/track/6I1zXhn2bLukkB6JxZ8P61\nとりまみんなこれ聞け");
            break;
        case "y.mine":
            message.channel.sendMessage("<@01HW55TC5YS7H4N1KEA305SWKX>,<@01H413PJC09DJ4MA52DE2J4WR4>,<@01H5YP6Y5TTYFJ1WPMS3E5DJT6>,<@01HBT82SPDMQ8FK496M387MAHZ>,<@01HAZF5QHG6FVY9K3J4659SDQH>,<@01H8TZYY16Y79KERHFFMC6JKW7>,<@01HM3A56YXC4E984CCPP6GYBQF>");
            break;
        case "y.supura":
            message.channel.sendMessage("<@01J4349RNGFXW60H7P2X293S9V>,<@01HBZMX51NG1EAW92EPA1NCXTF>,<@01H8TZYY16Y79KERHFFMC6JKW7>,<@01HW55TC5YS7H4N1KEA305SWKX>,<@01HBT82SPDMQ8FK496M387MAHZ>,<@01HMHX8X7J1RV2ZGHCFE46NFMF>,<@01HB30SVM7R89QJQA8CMA7CEC2>,<@01HW55TC5YS7H4N1KEA305SWKX>,<@01HG0CQEK0PNJJ07TWHBAX4JSS><@01H413PJC09DJ4MA52DE2J4WR4>,<@01HM3A56YXC4E984CCPP6GYBQF>");
            break;
       default:
            break;
    }
});

server.listen(6123);
client.loginBot(bot_token);
