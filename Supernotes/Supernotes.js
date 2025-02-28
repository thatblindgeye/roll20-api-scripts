var API_Meta = API_Meta || {};
API_Meta.Supernotes = {
    offset: Number.MAX_SAFE_INTEGER,
    lineCount: -1
}; {
    try {
        throw new Error('');
    } catch (e) {
        API_Meta.Supernotes.offset = (parseInt(e.stack.split(/\n/)[1].replace(/^.*:(\d+):.*$/, '$1'), 10) - (4));
    }
}

// Supernotes_Templates can be called by other scripts. At this point ScriptCards is the only One Click script that does this.
let Supernotes_Templates = {
    generic: {
        boxcode: `<div style='color: #000; border: 1px solid #000; background-color: white; box-shadow: 0 0 3px #000; display: block; text-align: left; font-size: 13px; padding: 5px; margin-bottom: 2px; font-family: sans-serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; color:#fff; background-color:#404040; margin-right:3px; padding:3px;'>`,
        textcode: "</div><div><div style='padding:3px;'>",
        buttonwrapper: `<div style='display:block; margin-top:5px'>`,
        buttonstyle: `style='display:inline-block; color:#ce0f69 !important; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#ce0f69; background-color: transparent;padding: 0px; border: none;'`,
        buttondivider: ' | ',
        handoutbuttonstyle: `style='display:inline-block; color:#ce0f69; background-color: transparent;padding: 0px; border: none;'`,
        footer: ""
    },

    dark: {
        boxcode: `<div style='color: #fff; border: 1px solid #000; background-color: black; box-shadow: 0 0 3px #fff; display: block; text-align: left; font-size: 13px; padding: 5px; margin-bottom: 2px; font-family: sans-serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; color:#000; background-color:#ccc; margin-right:3px; padding:3px;'>`,
        textcode: "</div><div><div style='padding:3px;'>",
        buttonwrapper: `<div style='display:block; margin-top:5px'>`,
        buttonstyle: `style='display:inline-block; color:#a980bd; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#a980bd; background-color: transparent;padding: 0px; border: none;'`,
        buttondivider: ' | ',
        handoutbuttonstyle: `style='display:inline-block; color:#a980bd; background-color: transparent;padding: 0px; border: none;'`,
        footer: ""
    },

    lcars: {
        boxcode: `<div style='color: #fff; border: 1px solid #000; border-radius:16px 0px 0px 16px; background-color: black; background-image: linear-gradient(to bottom right, black,#111,black,#222,black); box-shadow: 0 0 3px #fff; display: block; text-align: left; font-size: 13px; padding: 5px; color:#fce5bb; margin-bottom: 2px; font-family: Tahoma, sans-serif; white-space: pre-wrap;'>`,
        titlecode: `<div style= 'width:100%;background-color:#ffae21; border-radius: 10px 0px 0px 0px;'><span style='font-weight:bold; color:#ffae21; background-color:black; margin-left: 20px;padding:0px 6px 2px 6px; font-size: 16px; font-family: Impact,Tahoma, sans-serif; font-stretch: extra-condensed !important; text-transform: uppercase;'>`,
        textcode: "</span></div><div style='border-left: 10px solid #9b98ff; border-radius: 0px 0px 0px 10px;padding-left: 15px; margin-top:3px;'>",
        buttonwrapper: `<div style='display:block'>`,
        buttonstyle: `style='display:inline-block; color:#cc6060; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; border:none; color:black; background-color: #cc6060; border-radius: 10px 0px 0px 10px; padding: 2px 4px 2px 4px;margin-top: 12px; font-size: 10px; font-family: Tahoma, sans-serif; font-stretch: condensed !important; text-transform: uppercase;'`,
        buttondivider: '',
        handoutbuttonstyle: `style='display:inline-block; border:none; color:black; background-color: #cc6060; border-radius: 0px 10px 10px 0px; padding: 2px 4px 2px 4px;margin-top: 12px; margin-left:4px; font-size: 10px; font-family: Tahoma, sans-serif; font-stretch: condensed !important; text-transform: uppercase;'`,
        footer: ""
    },

    faraway: {
        boxcode: `<div style='color: #feda4a; border: 1px solid #000; background-color: black; box-shadow: 0 0 3px #fff; display: block; text-align: left; font-size: 13px; padding: 5px; margin-bottom: 2px; font-family: sans-serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; text-transform: uppercase; color: #000; text-shadow: -1px 1px 2px #feda4a, 1px 1px 2px #feda4a,  1px -1px 0 #feda4a, -1px -1px 0 #feda4a; background-color:#transparent; margin-bottom:8px; padding:3px;font-size: 18px; text-align:center'>`,
        textcode: "</div><div><div style='padding:3px;margin-bottom:0px;'>",
        buttonwrapper: `<div style='display:block; margin-top:8px;'>`,
        buttonstyle: `style='display:inline-block; color:#13f2fc; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#13f2fc; font-weight:normal; background-color: transparent;padding: 0px; border: none;'`,
        buttondivider: `<span style=  'color:#13f2fc; margin:0px;'> • </span>`,
        handoutbuttonstyle: `style='display:inline-block; color:#13f2fc; font-weight:normal; background-color: transparent; padding: 0px; border: none;'`,
        footer: ""
    },

    gothic: {
        boxcode: `<div style='color: #fff; background-image: url(https://i.imgur.com/cLCx0Ih.jpg); background-repeat: repeat; background-color: transparent; display: block; box-shadow: 0 0 3px #fff; text-align: left; font-size: 14px; padding: 12px 12px 12px 12px; margin-bottom: 2px; font-family: Palatino, serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; color: #fff; background-color:#transparent; margin-bottom:0px; padding:3px;font-size: 18px; font-family: Luminari, palatino, Georgia, serif; text-align:center'>`,
        textcode: `</div><img style='margin-bottom:12px;' src='https://i.imgur.com/j8SCVod.png'><div style='padding:3px; margin-bottom:0px; font-family: palatino, serif; text-shadow: 0 0 1px #000; line-height: 19px;'>`,
        buttonwrapper: `<div style='display:block; margin-top:12px;text-align:center;'>`,
        buttonstyle: `style='display:inline-block; color:#ccc; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#ccc; font-size:12px; font-weight:normal; background-color: transparent;padding: 0px; border: none;'`,
        buttondivider: `<img style='margin:0px 4px 0px 4px; width:14px;' src='https://i.imgur.com/RGoRhcK.png'>`,
        handoutbuttonstyle: `style='display:inline-block; color:#ccc; font-size:12px; font-weight:normal; background-color: transparent; padding: 0px; border: none;'`,
        footer: ""
    },

    western: {
        boxcode: `<div style='color: #000; border: 1px solid #000; border-radius: 2px; box-shadow: 0px 0px 20px 0px #000 inset; background-image: url(https://i.imgur.com/GKuncRd.jpg); background-repeat: repeat; background-color: transparent; display: block; text-align: left; font-size: 14px; padding: 12px 10px 12px 10px; margin-bottom: 2px; font-family: "Times New Roman", serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; color: #932; background-color:#transparent; margin-bottom:0px; padding:3px;font-size: 18px;   font-family: "Times New Roman", serif; text-align:center'>`,
        textcode: `</div><div style='text-align:center;'><img style='margin-bottom:12px;' src='https://i.imgur.com/fFFX0wW.png'></div><div style='padding:3px; margin-bottom:0px; font-family: "Times New Roman", serif; line-height: 19px;'>`,
        buttonwrapper: `<div style='display:block; margin-top:12px;text-align:center;'>`,
        buttonstyle: `style='display:inline-block; color:#000; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#7e2d40; background-color: transparent;padding: 0px; border: none'`,
        buttondivider: `<img style='margin:0px 4px 0px 4px; width:20px;' src='https://i.imgur.com/x41nAwF.png'>`,
        handoutbuttonstyle: `style='display:inline-block; color:#7e2d40; background-color: transparent;padding: 0px; border: none'`,
        footer: ""
    },
    //text-shadow: 0px 0px 2px #b1a098, 0px 0px 2px #b1a098, 2px 2px 3px #000; WESTERN DROP SHADOW

    dragon: {
        boxcode: `<div style='color: #000; border: 1px solid #b5ac89; box-shadow: 2px 2px 4px #000, 0px 0px 20px 0px #d9bea0 inset; background-image: url(https://i.imgur.com/YoWsOow.jpg); background-size: auto; background-repeat: repeat-y;  background-color: #e6daae; display: block; text-align: left; font-size: 14px; line-height: 16px;padding: 12px 10px 8px 10px; margin-bottom: 2px; font-family: ""Times New Roman", serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; color: #0e3365; text-transform: uppercase; background-color:#transparent; margin-bottom:2px;  border-bottom: 2px solid #0e3365; padding:3px 3ps 0px 3px;font-size: 20px; font-family: Luminari,"times new roman", times, baskerville, serif; text-align:right'>`,
        textcode: `</div><div style='padding:3px; margin-bottom:0px; font-family: Georgia, serif; line-height: 19px;'>`,
        buttonwrapper: `<div style='display:block; margin-top:14px ;text-align:center;font-family: Luminari,"times new roman"'>`,
        buttonstyle: `style='display:inline-block; color:#0e3365; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color: #0e3365; font-size:14px; background-color: transparent;padding: 0px; border: none'`,
        buttondivider: " &nbsp;&bull;&nbsp; ", //`<img style='margin:0px 4px 0px 4px; width:20px;' src='https://i.imgur.com/x41nAwF.png'>`,
        handoutbuttonstyle: `style='display:inline-block; color: #0e3365; font-size:14px; background-color: transparent;padding: 0px; border: none'`,
        footer: ""
    },



    wizard: {
        boxcode: `<div style='color: #000; border: 1px solid #b5ac89; box-shadow: 2px 2px 4px #000, 0px 0px 20px 0px #d9bea0 inset; background-image: url(https://i.imgur.com/fYJp37l.jpg); background-repeat: repeat; background-color: #e6daae; display: block; text-align: left; font-size: 14px; padding: 12px 10px 8px 10px; margin-bottom: 2px; font-family: "Times New Roman", serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; color: #58170D; font-variant: small-caps; background-color:#transparent; margin-bottom:0px;  border-bottom: 2px solid #c9ad6a; padding:3px;font-size: 22px; font-family: "times new roman", times, baskerville, garamond, serif; text-align:left'>`,
        textcode: `</div><div style='padding:3px; margin-bottom:0px; font-family: Georgia, serif; line-height: 19px;'>`,
        buttonwrapper: `<div style='display:block; border-top: solid 1px #000; background-color: #E0E5C1; margin-top:12px ;text-align:center;font-family:arial, sans-serif'>`,
        buttonstyle: `style='display:inline-block; color:#58170D; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color: #000; font-size:12px; background-color: transparent;padding: 0px; border: none'`,
        buttondivider: " &nbsp;&bull;&nbsp; ", //`<img style='margin:0px 4px 0px 4px; width:20px;' src='https://i.imgur.com/x41nAwF.png'>`,
        handoutbuttonstyle: `style='display:inline-block; color: #000; font-size:12px; background-color: transparent;padding: 0px; border: none'`,
        footer: ""
    },

    apoc: {
        boxcode: `<div style='color: 000; background-image: url(https://i.imgur.com/vql1NqV.jpg); background-size: 100%; background-repeat: repeat-y; background-color: transparent; display: block; box-shadow: 0 0 3px #fff; text-align: left; font-size: 14px; padding: 0px; margin-bottom: 2px; font-family: Monaco,"Courier New", monospace; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; font-style: italic; color: #000; text-shadow: -1px 1px 2px #555; background-color:transparent; margin:20px 24px 0px 24px; padding:12px 3px 8px 3px;font-size: 18px; font-family: verdana, tahoma, sans-serif; text-align:center'>`,
        textcode: `</div><div><div style='padding:0px 3px 0px 3px; margin:0px 24px 0px 24px; color: #000;font-family: Monaco,"Courier New", monospace; line-height: 19px;'>`,
        buttonwrapper: `<div style='display:block; margin-top:12px;text-align:center;'>`,
        buttonstyle: `style='display:inline-block; color:#555; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#000; font-size:10px; font-weight:normal; background-color: transparent;padding: 0px; border: none;'`,
        buttondivider: "/",
        handoutbuttonstyle: `style='display:inline-block; color:#000; font-size:10px; font-weight:normal; background-color: transparent; padding: 0px; border: none;'`,
        footer: `<img style = 'margin: 0px !important; padding:0px;width:100%' src = 'https://i.imgur.com/ssWzyQy.png'>`
    },

    notebook: {
        boxcode: `<div style='color: 000; border-radius:10px; background-image: url(https://i.imgur.com/2tWlJSg.jpg); background-size: auto; background-repeat: repeat-y; background-color: transparent; display: block; box-shadow: 0 0 3px #fff; line-height 16px; text-align: left; font-size: 14px; padding: 8px 8px 8px 30px; margin-bottom: 2px; font-family: Monaco,"Courier New", monospace; white-space: pre-wrap;'>`,
        titlecode: `<div style='font-weight:bold; font-style: italic; font-weight:bolder; color: #000; background-color:transparent; margin-bottom:0px; padding:3px;font-size: 15px; Monaco,"Courier New", monospace; text-align:center'>`,
        textcode: `</div><div><div style='font-style: italic; padding:3px; margin:7px 0px 0px 10px; color: #000;font-family: Monaco,"Courier New", monospace; line-height: 16px;'>`,
        buttonwrapper: `<div style='display:block; margin:12px 0px 0px -9px; text-align:center;'>`,
        buttonstyle: `style='display:inline-block; color: red; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:red; font-size:10px; font-weight:normal; background-color: transparent;padding: 0px; border: none;'`,
        buttondivider: `<span style='color:red;'>/</span>`,
        handoutbuttonstyle: `style='display:inline-block; color:red; font-size:10px; font-weight:normal; background-color: transparent; padding: 0px; border: none;'`,
        footer: ""
    },

    steam: {
        boxcode: `<div style='color: #000; background-image: linear-gradient(to bottom right,#e3b76f,#ebcc99,#b28f57); background-color: transparent; display: block; box-shadow: 0 0 3px #fff; text-align: left; font-size: 14px; padding: 1px 10px 2px 10px; margin-top:30px; margin-bottom: 2px; font-family: 'Gill Sans', sans-serif; white-space: pre-wrap;'><div style = 'display:block; text-align:center;'><img style='margin-bottom:0px; margin-top:-30px; text-align:center;' src='https://i.imgur.com/NucuvsF.png'></div>`,
        titlecode: `<div style='font-weight:bold; color: #000; text-align:center; background-color:#transparent; margin-bottom:0px; padding:3px;font-size: 18px; font-family: 'Gill Sans', sans-serif; text-align:center'>`,
        textcode: "</div><div><div style='padding:3px;margin-bottom:0px;text-shadow: 0 0 1px #000;line-height:19px;font-family: 'Gill Sans', sans-serif;'>",
        buttonwrapper: `<div style='display:block; margin-top:12px;text-align:center;'>`,
        buttonstyle: `style='display:inline-block; color:#056b20; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#056b20; font-size:12px; font-weight:normal; background-color: transparent;padding: 0px; border: none;'`,
        buttondivider: `<img style='margin:0px 4px 0px 4px; width:30px;' src='https://i.imgur.com/jiyBaoz.png'>`,
        handoutbuttonstyle: `style='display:inline-block; color:#056b20; font-size:12px; font-weight:normal; background-color: transparent; padding: 0px; border: none;'`,
        footer: ""
    },


    crt: {
        boxcode: `<div style='color: #0eb350; font-weight: bold; border: 1px solid #0eb350; border-radius: 12px; background-image: url("https://i.imgur.com/DTYvEus.png"); background-image: repeat; background-color: #0a2b07; box-shadow: 0 0 3px #000; display: block; text-align: left; font-size: 18px; padding: 5px; margin-bottom: 2px; font-family: Monaco, monospace; white-space: pre-wrap;'>`,
        titlecode: `<div style='color: #000; text-shadow: 0.5px 0.5px 0.5px #0a7a37; background-color: #0eb350; box-shadow: 0 0 3px #0eb350; display: block; text-align: left; font-size: 16px; padding: 5px; margin: 5px 3px 3px 3px; font-family: 'Courier New', monospace; white-space: pre-wrap;'>`,
        textcode: "</div><div><div style='font-size: 14px !important; font-family: Monaco, monospace; padding:3px;'>",
        buttonwrapper: `<div style='display:block'>`,
        buttonstyle: `style='display:inline-block; color:#fff; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block;font-weight:bold; color:white; background-color: transparent;padding: 0px; border: none;font-size: 12px'`,
        buttondivider: '|',
        handoutbuttonstyle: `style='display:inline-block;font-weight:bold; color:white; background-color: transparent;padding: 0px; border: none;font-size: 12px'`,
        footer: ""
    },

    scroll: {
        boxcode: `<div style='color: #000; background-image: url(https://i.imgur.com/8Mm94QY.png); background-size: 100% 100%; background-color: transparent; display: block; text-align: left; font-size: 14px; padding: 5px 8px 8px 5px; margin-bottom: 2px; font-family: 'Times New Roman', serif; white-space: pre-wrap;'>`,
        titlecode: `<div style='color: #58170D; background-color: transparent: display: block; text-align: Center; line-height:24px; font-size: 24px; padding: 5px; margin: 5px 3px 0px 3px; font-family: Luminari,"Times New Roman", serif; white-space: pre-wrap;'>`,
        textcode: `</div><div><div style='text-align:center; font-size: 14px !important; font-family: "Times New Roman", serif; padding:3px;'>`,
        buttonwrapper: `<div style='display:block'>`,
        buttonstyle: `style='display:inline-block; color:#7e2d40; background-color: transparent;padding: 0px; border: none'`,
        playerbuttonstyle: `style='display:inline-block; color:#7e2d40; background-color: transparent;padding: 0px; border: none'`,
        buttondivider: ' | ',
        handoutbuttonstyle: `style='display:inline-block; color:#7e2d40; background-color: transparent;padding: 0px; border: none'`,
        footer: ""
    }

};

on('ready', function() {
    if (!_.has(state, 'Supernotes')) {
        state.Supernotes = {
            sheet: 'Default',
            template: 'default',
            title: 'name',
            theText: '',
            sendToPlayers: true,
            makeHandout: true,
            darkMode: false
        };
        message = 'Welcome to Supernotes! If this is your first time running it, the script is set to use the Default Roll Template. You can choose a different sheet template below, as well as decide whether you want the script to display a "Send to Players" footer at the end of every GM message. It is currently set to true.<BR><BR>[Default Template - any sheet](!gmnote --config|default)<BR>[D&D 5th Edition by Roll20](!gmnote --config|dnd5e)<BR>[DnD 5e Shaped](!gmnote --config|5eshaped)<BR>[Pathfinder by Roll20](!gmnote --config|pfofficial)<BR>[Pathfinder Community](!gmnote --config|pfcommunity)<BR>[Pathfinder 2e by Roll20](!gmnote --config|pf2e)<BR>[Starfinder by Roll20](!gmnote --config|starfinder)<BR>[Call of Cthulhu 7th Edition by Roll20](!gmnote --config|callofcthulhu)<BR><BR>[Toggle Send to Players](!gmnote --config|sendtoPlayers)';
        sendChat('Supernotes', '/w gm &{template:' + state.Supernotes.template + '}{{' + state.Supernotes.title + '=' + 'Config' + '}} {{' + state.Supernotes.theText + '=' + message + '}}');
    }
});

on('ready', () => {

    function parseMarkdown(markdownText) {
        const htmlText = markdownText
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
            .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
            .replace(/\*(.*)\*/gim, '<i>$1</i>')
            .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
            .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
            .replace(/\n$/gim, '<br />')

        return htmlText.trim()
    }




    const decodeUnicode = (str) => str.replace(/%u[0-9a-fA-F]{2,4}/g, (m) => String.fromCharCode(parseInt(m.slice(2), 16)));

    const version = '0.2.1';
    log('Supernotes v' + version + ' is ready! --offset ' + API_Meta.Supernotes.offset + 'To set the template of choice or to toggle the send to players option, Use the command !gmnote --config');

    on('chat:message', function(msg) {
        if ('api' === msg.type && msg.content.match(/^!(gm|pc|self)note\b/)) {
            let match = msg.content.match(/^!gmnote-(.*)$/);

            //define command                     
            let command = msg.content.split(/\s+--/)[0];
            let sender = msg.who;
            let senderID = msg.playerid;

            let isGM = playerIsGM(senderID);
            let messagePrefix = '/w gm ';
            if (command === '!pcnote') {
                messagePrefix = '';
            }

            if (command === '!selfnote') {
                messagePrefix = '/w ' + sender + ' ';
            }

            let secondOption = '';
            let args = msg.content.split(/\s+--/);

            let customTemplate = '';
            let option = '';
            let notitle = false;
            let id = '';
            let tokenImage = '';
            let tooltip = '';
            let tokenName = '';
            let trueToken = [];
            let tokenID = '';
            let handoutTitle = '';

            let templates = Supernotes_Templates;




            function sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton) {
                handoutButton = ((handoutButton) ? handoutButton.replace(/NamePlaceholder/, whom) : handoutButton);

                if (message === "" && option.match(/^(bio|charnote|token|tooltip)/)) {
                    message = `The information does not exist for the <code>${option}</code> option`
                }

                if (handoutTitle === '') {
                    //Crops out GM info on player messages
                    if (isGM) {
                        message = (message.includes("-----") ? message.split('-----')[0] + "<div style= 'background-color:" + whisperColor + "; color:" + whisperTextColor + "; border-width: 1px; border-style: solid; border-color:#a3a681; padding:5px'>" + message.split('-----')[1] + "</div>" : message);
                    }

                    if (customTemplate.length > 0) {
                        let chosenTemplate = templates.generic;
                        switch (customTemplate) {
                            case "crt":
                                chosenTemplate = templates.crt;
                                break;
                            case "dark":
                                chosenTemplate = templates.dark;
                                break;
                            case "scroll":
                                chosenTemplate = templates.scroll;
                                break;
                            case "lcars":
                                chosenTemplate = templates.lcars;
                                break;
                            case "faraway":
                                chosenTemplate = templates.faraway;
                                break;
                            case "gothic":
                                chosenTemplate = templates.gothic;
                                break;
                            case "western":
                                chosenTemplate = templates.western;
                                break;
                            case "dragon":
                                chosenTemplate = templates.dragon;
                                break;
                            case "wizard":
                                chosenTemplate = templates.wizard;
                                break;
                            case "steam":
                                chosenTemplate = templates.steam;
                                break;
                            case "apoc":
                                chosenTemplate = templates.apoc;
                                break;
                            case "notebook":
                                chosenTemplate = templates.notebook;
                                break;
                            case "bob":
                                break;
                            default:
                                chosenTemplate = templates.generic;
                                // code block
                        }




                        playerButton = playerButton.split('\n')[1];

                        playerButton = ((undefined !== playerButton) ? playerButton.replace(/\[(.*?)\]\((.*?)\)/gim, "<a " + chosenTemplate.playerbuttonstyle + "href='$2'>$1</a>") : "");
                        handoutButton = ((undefined !== handoutButton) ? handoutButton.replace(/\[(.*?)\]\((.*?)\)/gim, "<a " + chosenTemplate.handoutbuttonstyle + "href='$2'>$1</a>").replace(" | <a", "<a") : "");

                        //need to replace markdown hyperlinks without replacing markdown image codes.

                        message = ((undefined !== message) ? message.replace(/\[([^\]]*?)\]\(([^\)]*?)\)(?<!\.jpg\)|\.png\)|\.gif\)|\.webm\)|\.jpeg\))/gim, "<a " + chosenTemplate.buttonstyle + "href='$2'>$1</a>").replace(/<p>/gm, "<div>").replace(/<\/p>/gm, "</div>").replace("padding:5px'></div><div>", "padding:5px'>") : "");
                        message = message.replace('<a href=\"http://journal.roll20.net','<a '+chosenTemplate.buttonstyle+ ' href=\"http://journal.roll20.net').replace('<a href=\"https://app.roll20.net','<a '+chosenTemplate.buttonstyle+ ' href=\"https://app.roll20.net');


                        log("message = "+message);

                        if (command === '!pcnote') {
                            return sendChat(whom, messagePrefix + chosenTemplate.boxcode + chosenTemplate.titlecode + whom + chosenTemplate.textcode + message + '</div></div>' + chosenTemplate.footer + '</div>');

                        } else {

                            return sendChat(whom, messagePrefix + chosenTemplate.boxcode + chosenTemplate.titlecode + whom + chosenTemplate.textcode + message + chosenTemplate.buttonwrapper + playerButton + chosenTemplate.buttondivider + handoutButton + '</div></div></div>' + chosenTemplate.footer + '</div>');
                        }



                    } else {
                        playerButton = ((undefined !== playerButton) ? playerButton.replace(/\[([^\]]*?)\]\(([^\)]*?)\)(?<!\.jpg\)|\.png\)|\.gif\)|\.webm\)|\.jpeg\))/gim, "<a " + buttonstyle + "href='$2'>$1</a>") : "");
                        handoutButton = ((undefined !== handoutButton) ? handoutButton.replace(/\[([^\]]*?)\]\(([^\)]*?)\)(?<!\.jpg\)|\.png\)|\.gif\)|\.webm\)|\.jpeg\))/gim, "<a " + buttonstyle + "href='$2'>$1</a>") : "");

                        return sendChat(whom, messagePrefix + '&{template:' + template + '}{{' + title + '=' + whom + '}} {{' + theText + '=' + message + playerButton + handoutButton + '}}');
                    }

                } else {
                    let noteHandout = findObjs({
                        type: 'handout',
                        name: handoutTitle
                    });
                    noteHandout = noteHandout ? noteHandout[0] : undefined;

                    if (!noteHandout) {
                        noteHandout = createObj('handout', {
                            name: handoutTitle,
                            archived: false,
                            inplayerjournals: "all",
                            controlledby: "all"
                        });
                        let noteHandoutid = noteHandout.get("_id");
                        sendChat('Supernotes', `Supernotes has created a handout named <b>${handoutTitle}</b>. <BR>Click <a href="http://journal.roll20.net/handout/${noteHandoutid}">here</a> to open.`, null, {
                            noarchive: true
                        });
                    }
                    if (noteHandout) {

                        playerButton = '<BR><a href = "&#96;' + msg.content.replace(/!(gm|self)/, "!pc").replace(/\s(--|)handout\|.*\|/, "") + '">Send to Players in Chat</a>';
                        if (makeHandout) {
                            handoutButton = ((playerButton) ? ' | ' : '<BR>') + '<a href = "&#96;' + '!gmnote --id' + tokenID + ' --handout|' + whom + '|">Make Handout</a>';
                        }
                        message = message.replace(/\[.*?\]\((.*?\.(jpg|jpeg|png|gif))\)/g, `<img style=" max-width:100%; max-height: 200px; float:right; padding-top:0px; margin-bottom:5px; margin-left:5px" src="$1">`);
                        message = message.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
                        message = message.replace(/<img(.*)<(\/|)br(\/|)>/g, `<img$1`);

                        ((isGM) ? message = message : message = ((message.includes("-----") ? message.split('-----')[0] : message)));

                        message = parseMarkdown(message);
                        if (isGM) {
                            gmnote = (message.includes("-----") ? message.split('-----')[1] : '');
                            message = (message.includes("-----") ? message.split('-----')[0] : message);
                        }

                        noteHandout.get("notes", function(notes) {
                            if (notes.includes('<!---End Report--->')) {
                                if (notes.includes('!report')) {
                                    notes = notes.split('<!---End Report--->')[0] + '<!---End Report--->';
                                } else {
                                    notes = notes.split(/<hr>/i)[0] + '<!---End Report--->';
                                }
                            } else {
                                playerButton = '';
                                handoutButton = '';
                                notes = ''; //<!---End Report--->';
                            }
                            /*if (notes.includes('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')) {
                                notes = notes.split('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')[0] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            } else {
                                notes = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            }*/
                            //message = '<div style="display:block;">' + message +'</div>';

                            noteHandout.set("gmnotes", gmnote);
                            noteHandout.set("notes", notes + "<h3>" + whom + "</h3>" + message + playerButton + handoutButton)
                        })
                    } else {
                        sendChat('Supernotes', whom + `No handout named ${handoutTitle} was found.`, null, {
                            noarchive: true
                        }, )
                    }

                }

            }

            let theToken = msg.selected

            args.forEach(a => {
                if (a === 'notitle') {
                    notitle = true
                }
                if (a.includes('id-')) {
                    id = a.split(/id/)[1]
                }
                if (a.match(/handout\|.*?\|/)) {
                    handoutTitle = a.match(/handout\|.*?\|/).toString().split('|')[1]
                }
                if (a !== command && !(a.includes('id-')) && !(a.includes('handout|')) && a !== 'notitle') {
                    option = a
                }
                if (a.includes('template|')) {
                    customTemplate = a.split(/\|/)[1]
                }

            });

            ((id) ? theToken = [{
                "_id": id,
                "type": "graphic"
            }] : theToken = msg.selected);


            if (undefined !== theToken) {
                trueToken = getObj('graphic', theToken[0]._id);
                tokenImage = trueToken.get('imgsrc');
                tokenTooltip = trueToken.get('tooltip');
                tokenName = trueToken.get('name');
                tokenID = trueToken.get('_id');
            }



            const template = state.Supernotes.template;
            const title = state.Supernotes.title;
            const theText = state.Supernotes.theText;
            const sendToPlayers = state.Supernotes.sendToPlayers;
            const makeHandout = state.Supernotes.makeHandout || false;
            const darkMode = state.Supernotes.darkMode || false;
            const whisperColor = ((darkMode) ? "#2b2130" : "#fbfcf0");
            const whisperTextColor = ((darkMode) ? "#fff" : "#000");
            const buttonstyle = ((darkMode) ? `style='display:inline-block; color:#a980bd; font-size: 0.9em; background-color: transparent;padding: 0px; border: none'` : `style='display:inline-block; color:#ce0f69; font-size: 0.9em; background-color: transparent;padding: 0px; border: none'`);




            if (option !== undefined && option.includes('config')) {
                let templateChoice = option.split('|')[1]

                if (templateChoice === undefined) {
                    message = 'Current sheet template:<BR><b>' + state.Supernotes.sheet + '</b><BR>Send to Players:<BR><b>' + state.Supernotes.sendToPlayers + '</b><BR><BR>Choose a template for Supernotes to use.<BR><BR>[Default Template - any sheet](!gmnote --config|default)<BR>[D&D 5th Edition by Roll20](!gmnote --config|dnd5e)<BR>[DnD 5e Shaped](!gmnote --config|5eshaped)<BR>[Pathfinder Community](!gmnote --config|pfcommunity)<BR>[Pathfinder by Roll20](!gmnote --config|pfofficial)<BR>[Pathfinder 2e by Roll20](!gmnote --config|pf2e)<BR>[Starfinder by Roll20](!gmnote --config|starfinder)<BR>[Call of Cthulhu 7th Edition by Roll20](!gmnote --config|callofcthulhu)<BR><BR>[Toggle Send to Players](!gmnote --config|sendtoPlayers)<BR>[Toggle Make Handout button](!gmnote --config|makeHandout)<BR>[Toggle Darkmode](!gmnote --config|darkMode)'
                    sendChat('Supernotes', messagePrefix + '&{template:' + template + '}{{' + title + '=' + 'Config' + '}} {{' + theText + '=' + message + '}}');
                }


                switch (templateChoice) {
                    case 'default':
                        state.Supernotes.sheet = 'Default';
                        state.Supernotes.template = 'default';
                        state.Supernotes.title = 'name';
                        state.Supernotes.theText = '';
                        sendChat('Supernotes', '/w gm Supernotes set to Default roll template');
                        break;
                    case 'dnd5e':
                        state.Supernotes.sheet = 'D&D 5th Edition by Roll20';
                        state.Supernotes.template = 'npcaction';
                        state.Supernotes.title = 'rname';
                        state.Supernotes.theText = 'description';
                        sendChat('Supernotes', '/w gm Supernotes set to ' + state.Supernotes.sheet);
                        break;
                    case '5eshaped':
                        state.Supernotes.sheet = 'DnD 5e Shaped';
                        state.Supernotes.template = '5e-shaped';
                        state.Supernotes.title = 'title';
                        state.Supernotes.theText = 'text_big';
                        sendChat('Supernotes', '/w gm Supernotes set to ' + state.Supernotes.sheet);
                        break;
                    case 'pfcommunity':
                        state.Supernotes.sheet = 'Pathfinder Community';
                        state.Supernotes.template = 'pf_generic';
                        state.Supernotes.title = 'name';
                        state.Supernotes.theText = 'description';
                        sendChat('Supernotes', '/w gm Supernotes set to ' + state.Supernotes.sheet);
                        break;
                    case 'pfofficial':
                        state.Supernotes.sheet = 'Pathfinder by Roll20';
                        state.Supernotes.template = 'npc';
                        state.Supernotes.title = 'name';
                        state.Supernotes.theText = 'descflag=1}} {{desc';
                        sendChat('Supernotes', '/w gm Supernotes set to ' + state.Supernotes.sheet);
                        break;
                    case 'pf2e':
                        state.Supernotes.sheet = 'Pathefinder 2e';
                        state.Supernotes.template = 'rolls';
                        state.Supernotes.title = 'header';
                        state.Supernotes.theText = 'notes_show=[[1]]}} {{notes';
                        sendChat('Supernotes', '/w gm Supernotes set to ' + state.Supernotes.sheet);
                        break;
                    case 'starfinder':
                        state.Supernotes.sheet = 'Starfinder';
                        state.Supernotes.template = 'sf_generic';
                        state.Supernotes.title = 'title';
                        state.Supernotes.theText = 'buttons0';
                        sendChat('Supernotes', '/w gm Supernotes set to ' + state.Supernotes.sheet);
                        break;
                    case 'callofcthulhu':
                        state.Supernotes.sheet = 'Call of Cthulhu 7th Edition by Roll20';
                        state.Supernotes.template = 'callofcthulhu';
                        state.Supernotes.title = 'title';
                        state.Supernotes.theText = 'roll_bonus';
                        sendChat('Supernotes', '/w gm Supernotes set to ' + state.Supernotes.sheet);
                        break;
                    case 'sendtoPlayers':
                        if (state.Supernotes.sendToPlayers) {
                            state.Supernotes.sendToPlayers = false
                        } else {
                            state.Supernotes.sendToPlayers = true
                        };
                        sendChat('Supernotes', '/w gm Send to Players set to ' + state.Supernotes.sendToPlayers);
                        break;
                    case 'makeHandout':
                        if (state.Supernotes.makeHandout) {
                            state.Supernotes.makeHandout = false
                        } else {
                            state.Supernotes.makeHandout = true
                        };
                        sendChat('Supernotes', '/w gm Make Handout button set to ' + state.Supernotes.makeHandout);
                        break;
                    case 'darkMode':
                        if (state.Supernotes.darkMode) {
                            state.Supernotes.darkMode = false
                        } else {
                            state.Supernotes.darkMode = true
                        };
                        sendChat('Supernotes', '/w gm darkMode set to ' + state.Supernotes.darkMode);
                        break;
                }
            } else {
                if (option !== undefined && option.includes('help')) {
                    message = 'Supernotes pulls the contents from a token&#39;s GM Notes field. If the token represents a character, you can optionally pull in the Bio or GM notes from the character, as well as the avatar, or extract just the image from the bio field. The user can decide whether to whisper the notes to the GM or broadcast them to all players. Finally, there is the option to add a footer to notes whispered to the GM. This footer creates a chat button to give the option of sending the notes on to the players.<BR>This script as written is optimized for the D&amp;D 5th Edition by Roll20 sheet, but can be adapted easily suing the Configuration section below.<BR><BR><b>Commands:</b><BR><b>!gmnote</b> whispers the note to the GM<BR><b>!pcnote</b> sends the note to all players<BR><BR><b>Paramaters</b><BR><div style ="text-indent: -1em;margin-left: 1em;"><em>--token</em> Pulls notes from the selected token&#39;s gm notes field. This is optional. If it is missing, the script assumes --token<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--charnote</em> Pulls notes from the gm notes field of the character assigned to a token.<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--bio</em> Pulls notes from the bio field of the character assigned to a token.<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--avatar</em> Pulls the image from the avatar field of the character assigned to a token.<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--image</em> Pulls first image from the bio field of the character assigned to a token, if any exists. Otherwise returns notice that no artwork is available<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--images</em> Pulls all images from the bio field of the character assigned to a token, if any exist. Otherwise returns notice that no artwork is available<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--image[number]</em> Pulls indexed image from the bio field of the character assigned to a token, if any exist. <em>--image1</em> will pull the first image, <em>--image2</em> the second and so on. Otherwise returns first image if available. If no images are available, returns notice that no artwork is available.<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--template[templatename]</em> Instead of using the configured sheet roll template, you can choose from between more than 10 custom templates that  cover most common genres. Add the template command directly after the main prompt, followed by any of the regular parameters above. The current choices are: <BR></div><div style="text-indent:-1em; margin-left: 2em"><em>generic.</em> Just the facts, ma&#39;am. Nothing fancy here.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>dark.</em> As above, but in reverse.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>crt.</em> Retro greenscreen for hacking and cyberpunk. Or for reports on that xenomorph hiding on your ship.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>notebook.</em> You know, for kids. Who like to ride bikes. Maybe they attend a school and fight vampires or rescue lost extraterrestrials<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>gothic.</em> Classic noire horror for contending with Universal monsters or maybe contending with elder gods.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>apoc.</em> Messages scrawled on a wall. Crumbling and ancient, like the world that was.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>scroll.</em> High fantasy. Or low fantasy—we don&#39;t judge.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>lcars.</em> For opening hailing frequencies and to boldly split infinitives that no one has split before!<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>faraway.</em> No animated title crawl, but still has that space wizard feel.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>steam.</em> Gears and brass have changed my life.<BR></div><div style="text-indent:-1em; margin-left: 2em"><em>western.</em> Return with us now to those thrilling days of yesteryear!<BR><BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--help</em> Displays help.<BR></div><div style ="text-indent: -1em;margin-left: 1em;"><em>--config</em> Returns a configuration dialog box that allows you to set which sheet&#39;s roll template to use, and to toggle the &quot;Send to Players&quot; footer.</div><BR><BR><b>Configuration</b><BR>When first installed, Supernotes is configured for the default roll template. It will display a config dialog box at startup that will allow you to choose a roll template based on your character sheet of choice, as well as the option  to toggle whether you want the &quot;Send to Players&quot; footer button to appear.<BR>You will need to edit the code of the script to create a custom configuration. The pre-installed sheets are:<BR><div style ="margin-left:10px;">Default Template<BR>D&amp;D 5th Edition by Roll20<BR>5e Shaped<BR>Pathfinder by Roll20<BR>Pathfinder Community<BR>Pathfinder 2e by Roll20<BR>Starfinder<BR>Call of Cthulhu 7th Edition by Roll20</div>';
                    sendMessage('Supernotes', messagePrefix, template, title, theText, message, false);

                } else {
                    if (!(option + '').match(/^(bio|charnote|tokenimage|tooltip|avatar|imag(e|es|e[1-9]))/)) {
                        option = 'token';
                    }

                    let playerButton = '';
                    if (sendToPlayers && (command === '!gmnote' || command === '!selfnote')) {
                        playerButton = '\n[Send to Players](' + msg.content.replace(/!(gm|self)/, "!pc") + ')';
                    }

                    let handoutButton = '';
                    if (makeHandout && (command.includes('gmnote') || command.includes('selfnote'))) {
                        handoutButton = ((playerButton) ? ' | ' : '<BR>') + '[Make Handout](' + msg.content.replace(/!(pc|self)/, "!gm") + ' --handout|NamePlaceholder|)';
                    } else {
                        //handoutButton = '\n[Make Handout](' + msg.content.replace(/!(pc|self)/, "!gm") +')';

                    }

                    let regex;
                    if (match && match[1]) {
                        regex = new RegExp(`^${match[1]}`, 'i');
                    }

                    let message = '';
                    let whom = '';



                    if (option === 'tooltip') {
                        (theToken || [])
                        .map(o => getObj('graphic', o._id))
                            .filter(g => undefined !== g)
                            .map(t => getObj('character', t.get('represents')))
                            .filter(c => undefined !== c)
                            .forEach(c => {
                                message = tokenTooltip;
                                whom = tokenName;
                                if (notitle) {
                                    whom = '';
                                }
                                sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton);
                            });
                    } else {
                        if (option === 'tokenimage') {
                            (theToken || [])
                            .map(o => getObj('graphic', o._id))
                                .filter(g => undefined !== g)
                                /*                                .map(t => getObj('character', t.get('represents')))*/
                                .filter(c => undefined !== c)
                                .forEach(c => {
                                    message = "<img src='" + tokenImage + "'>";
                                    whom = tokenName;
                                    if (notitle) {
                                        whom = '';
                                    }
                                    sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton);
                                });
                        } else {
                            if (option === 'avatar') {
                                (theToken || [])
                                .map(o => getObj('graphic', o._id))
                                    .filter(g => undefined !== g)
                                    .map(t => getObj('character', t.get('represents')))
                                    .filter(c => undefined !== c)
                                    .forEach(c => {
                                        message = "<img src='" + c.get('avatar') + "'>";
                                        whom = c.get('name');
                                        if (notitle) {
                                            whom = '';
                                        }
                                        sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton);
                                    });
                            } else {

                                if (option.match(/^imag(e|es|e[1-9])/)) {


                                    (theToken || [])
                                    .map(o => getObj('graphic', o._id))
                                        .filter(g => undefined !== g)
                                        .map(t => getObj('character', t.get('represents')))
                                        .filter(c => undefined !== c)
                                        .forEach(c => c.get('bio', (val) => {
                                            if (null !== val && 'null' !== val && val.length > 0) {
                                                if (regex) {
                                                    message = _.filter(
                                                        decodeUnicode(val).split(/(?:[\n\r]+|<br\/?>)/),
                                                        (l) => regex.test(l.replace(/<[^>]*>/g, ''))
                                                    ).join('\r');
                                                    message = message.replace("<img ", "<img style = 'filter:none !important;' ");
                                                } else {
                                                    message = decodeUnicode(val);
                                                    message = message.replace("<img ", "<img style = 'filter:none !important;' ");

                                                }
                                                if (option === "images") {
                                                    artwork = message.match(/\<.* src.*?\>/g);
                                                    if (artwork === null) {
                                                        artwork = 'No artwork exists for this character. Consider specifiying avatar.'
                                                    };

                                                } else {
                                                    artwork = message.match(/\<.* src.*?\>/g);
                                                    artwork = String(artwork);
                                                    if (artwork === null) {
                                                        artwork = 'No artwork exists for this character. Consider specifiying avatar.'
                                                    };


                                                    imageIndex = option.match(/\d+/g);


                                                    if (isNaN(imageIndex) || !imageIndex) {
                                                        imageIndex = 1
                                                    }

                                                    if (imageIndex > (artwork.split(",")).length) {
                                                        imageIndex = 1
                                                    }

                                                    imageIndex = imageIndex - 1; //corrects from human readable

                                                    artwork = artwork.split(",")[imageIndex];

                                                }
                                                if (('' + artwork).length > 3) {
                                                    message = artwork;
                                                } else {
                                                    message = 'No artwork exists for this character.';
                                                }
                                                if (artwork === "null" || message === "null") {
                                                    message = 'No artwork exists for this character. Consider specifiying avatar.'
                                                };

                                                whom = c.get('name');

                                                //Sends the final message
                                                if (notitle) {
                                                    whom = '';
                                                }
                                                sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton);

                                            }
                                        }));
                                } else {



                                    if ((option === 'bio') || (option === 'charnote')) {
                                        let suboption = (option === 'charnote') ? 'gmnotes' : 'bio';

                                        (theToken || [])
                                        .map(o => getObj('graphic', o._id))
                                            .filter(g => undefined !== g)
                                            .map(t => getObj('character', t.get('represents')))
                                            .filter(c => undefined !== c)
                                            .forEach(c => c.get(suboption, (val) => {
                                                if (null !== val && 'null' !== val && val.length > 0) {
                                                    if (regex) {
                                                        message = _.filter(
                                                            decodeUnicode(val).split(/(?:[\n\r]+|<br\/?>)/),
                                                            (l) => regex.test(l.replace(/<[^>]*>/g, ''))
                                                        ).join('\r');
                                                    } else {
                                                        message = decodeUnicode(val);
                                                    }
                                                    whom = c.get('name');
                                                    //Crops out GM info on player messages
                                                    if (command === '!pcnote' || command === '!selfnote') {
                                                        message = (message.includes("-----") ? message.split('-----')[0] : message);
                                                    }
                                                    //Sends the final message
                                                    if (notitle) {
                                                        whom = '';
                                                    }
                                                    sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton);

                                                } else {
                                                    if (notitle) {
                                                        whom = ''
                                                    }
                                                    message = `The information does not exist for the <code>${option}</code> option`;
                                                    sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton);

                                                }
                                            }));
                                    } else {
                                        (theToken || [])
                                        .map(o => getObj('graphic', o._id))
                                            .filter(g => undefined !== g)
                                            .filter((o) => o.get('gmnotes').length > 0)
                                            .forEach(o => {
                                                if (regex) {
                                                    message = _.filter(unescape(decodeUnicode(o.get('gmnotes'))).split(/(?:[\n\r]+|<br\/?>)/), (l) => regex.test(l)).join('\r');
                                                } else {
                                                    message = unescape(decodeUnicode(o.get('gmnotes')));
                                                }
                                                whom = o.get('name');

                                            });

                                        //Crops out GM info on player messages
                                        if (command === '!pcnote' || command === '!selfnote') {
                                            message = (message.includes("-----") ? message.split('-----')[0] : message);
                                        }

                                        //Sends the final message
                                        if (notitle) {
                                            whom = '';
                                        }
                                        sendMessage(whom, messagePrefix, template, title, theText, message, tokenID, playerButton, handoutButton);

                                    }

                                    /* Log Block. Turn on for debugging
                                                                    [
                                                                        `### REPORT###`,
                                                                        `THE MESSAGE =${message}`,
                                                                        `command = ${command}`,
                                                                        //                               `option = ${option}`,
                                                                        `secondOption = ${secondOption}`,
                                                                        `messagePrefix = ${messagePrefix}`,
                                                                        `whom = ${whom}`,
                                                                        `message =${message}`
                                                                    ].forEach(m => log(m));
                                                                    */
                                }
                            }
                        }
                    }
                }
            }
        }
    });
});
