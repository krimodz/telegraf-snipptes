# telegraf-snipptes
a shortcut snippets for telegraf framework , to write functions fast

## Usage
```bash
1- in your project go to settings.

2- click on user snippets.

3- chose " new snippets file for YOUR_PROJECT_NAME ".

4- give the file a name related to your project.

5- copy my snippets and past it in your snippets file and save. 
```
## the snippets
```snippets
{
	/*
	*start of telegraf methods : https://telegraf.js.org/classes/Telegraf-1.html
	*/

	"bot.action()": {
		"scope": "javascript,typescript",
		"prefix": "bba",
		"body": [
			"bot.action(`$1`, (ctx) =>{$2});"
		],
		"description": "bot action method"
	},
	"bot.command()": {
		"scope": "javascript,typescript",
		"prefix": "bbc",
		"body": [
			"bot.command('$1', (ctx) => {$2})"
		],
		"description": "bot command method"
	},
	"bot.use()": {
		"scope": "javascript,typescript",
		"prefix": "bbuse",
		"body": [
			"bot.use((ctx,next) => {$2})"
		],
		"description": "bot use method"
	},
	"bot.on()": {
		"scope": "javascript,typescript",
		"prefix": "bbo",
		"body": [
			"bot.on(message(`${1|text,animation,audio,document,photo,sticker,video,video_note,voice,callback_query,channel_post,chat_member,chosen_inline_result,edited_channel_post,edited_message,inline_query,message,my_chat_member,pre_checkout_query,poll_answer,poll,shipping_query,chat_join_request,channel_chat_created,chat_shared,connected_website,delete_chat_photo,group_chat_created,invoice,left_chat_member,message_auto_delete_timer_changed,migrate_from_chat_id,migrate_to_chat_id,new_chat_members,new_chat_photo,new_chat_title,passport_data,proximity_alert_triggered,forum_topic_created,forum_topic_closed,forum_topic_reopened,pinned_message,successful_payment,supergroup_chat_created,user_shared,video_chat_scheduled,video_chat_started,video_chat_ended,video_chat_participants_invited,web_app_data,has_media_spoiler,forward_date,contact,dice,location,game,venue|}`), (ctx) =>{",
			"$0",
			"});"
		],
		"description": "bot on method"
	},
	"bot.hears()": {
		"scope": "javascript,typescript",
		"prefix": "bbh",
		"body": [
			"bot.hears(`${1:text}`, (ctx) =>{$2});"
		],
		"description": "bot hears method"
	},
	/*
	* start of ctx methods 
	*/
	"log(ctx)": {
		"scope": "javascript,typescript",
		"prefix": "clog",
		"body": [
			"cosnole.log(ctx)"
		],
		"description": "log(ctx)"
	},
	"ctx.reply()": {
		"scope": "javascript,typescript",
		"prefix": "cr",
		"body": [
			"ctx.reply(`$1`);"
		],
		"description": "cosnole.log(ctx)"
	},
	"ctx.replyWithMarkdown()": {
		"scope": "javascript,typescript",
		"prefix": "crwm",
		"body": [
			"ctx.replyWithMarkdown(`$1`);"
		],
		"description": "ctx.replyWithMarkdown()"
	},
	"ctx.replyWithMediaGroup()": {
		"scope": "javascript,typescript",
		"prefix": "crwmg",
		"body": [
			"ctx.replyWithMediaGroup($1);"
		],
		"description": "ctx.replyWithMediaGroup()"
	},
	"ctx.replyWithPhoto()": {
		"scope": "javascript,typescript",
		"prefix": "crwp",
		"body": [
			"ctx.replyWithPhoto(${1:'file_id || file_direct_URL , type String'});"
		],
		"description": "ctx.replyWithMediaGroup()"
	},
	"replyWithQuiz() | sendQuiz()": {
		"scope": "javascript,typescript",
		"prefix": "crwq",
		"body": [
			"ctx${1|.replyWithQuiz,.sendQuiz|}(`${2:question should be String}`,",
			"[${3:'options should be array of strings'}],",
			"/*",
			"*here the extra object => ",
			"*/",
			"{chat_id:${4:'use it only if ou are using sendQuiz , if u r using replyWithQuiz remove this element'},",
			"correct_option_id:${4:'should be number ,its 0 index'},",
			"is_anonymous:${5:'true || false|'},",
			"open_period:${6:'number of second to close the quiz its optional'},",
			"explanation:`${7:'the correct answer as string'}`}",
			");"
		],
		"description": "ctx.replyWithQuiz()"
	},
	"ctx.pinChatMessage()": {
		"scope": "javascript,typescript",
		"prefix": "cpcm",
		"body": [
			"ctx.pinChatMessage(${1:'messageId type number'},{/*false to send notification to users =>*/ disable_notification:${2|true,false|}});"
		],
		"description": "ctx.pinChatMessage()"
	},
	"ctx.replyWithHTML()": {
		"scope": "javascript,typescript",
		"prefix": "crwHTML",
		"body": [
			"ctx.replyWithHTML(`${1:<b>u can use HTML</b> <u>format tags</u>}`);"
		],
		"description": "ctx.pinChatMessage()"
	}
}
```

## License
[My telegram : @ZedKrimo](https://t.me/zedkrimo)  | | 
[My youtube channel : @ZedKrimo](https://www.youtube.com/@zedkrimo)
