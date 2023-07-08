# telegraf-snipptes
a shortcut snippets for telegraf framework , to write functions fast


/*
*
* 1. in your project go to settings.
* 2. click on user snippets.
* 3. chose " new snippets file for YOUR_PROJECT_NAME ".
* 4. give the file a name related to your project.
* 5.copy my snippets and past it in your snippets file and save.
*/

	
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
