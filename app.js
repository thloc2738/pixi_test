async function initApp(params) {
    const app = new PIXI.Application();
    await app.init({
        backgroundColor: '#1099bb',
        resizeTo: window,
        antialias: true
    });
    document.body.appendChild(app.canvas);

//constant variable
const board_position = [336, 0]
const logo_position = [-20, 95];

// create app
const container = new PIXI.Container();
container.x = 44;
container.y = 44;
app.stage.addChild(container);

//variable
const position_y_roadmap = 459;
const position_x_roadmaps = [57.5, 94, 131, 168, 205, 242, 279, 320, 362, 399, 436, 473, 510, 548, 584];
const visible_highlight_left = false;
const visible_highlight_middle = false;
const visible_highlight_bot = true;
const roadmaps_p = [0, 5, 7, 12, 14];
const roadmaps_t = [6, 13];
const roadmaps_b = [1, 2, 3, 4, 8, 9, 10, 11];
const chip_colors = ['#aa181a', '#141381', '#88b303', '#0c7c00', '#00afca', '#044e7e', '#eb4411', '#6e1d9a'];

const amount_chip_left = 7;
const amount_chip_mid = 5;
const amount_chip_right = 10;

const is_sfx_on = true;
const is_music_on = true;

// load assets
console.log(PIXI.VERSION);

// Fonts
const font1 = new FontFace('BebasNeue_Regular', 'url(./assets/fonts/BebasNeue-Regular.ttf)');
const font2 = new FontFace('MyriadPro_Bold', 'url(./assets/fonts/MyriadPro-Bold.ttf)');
const font3 = new FontFace('MyriadPro_Semibold', 'url(./assets/fonts/MyriadPro-Semibold.ttf)');
const fonts = [font1, font2, font3];
Promise.all(fonts.map(font => font.load()))
    .then(loadedFonts => {
        loadedFonts.forEach(font => document.fonts.add(font));
        console.log('All fonts loaded successfully');
    })

const board_texture = await PIXI.Assets.load("assets/image/png/smallsize/board_half.png");
const logo_texture = await PIXI.Assets.load("assets/image/png/smallsize/Logo_Baccarat_en.png");
const card_box_texture = await PIXI.Assets.load("assets/image/png/smallsize/cardshoe_top.png");
const timer_texture = await PIXI.Assets.load("assets/image/png/smallsize/timer.png");
const countdown_texture = await PIXI.Assets.load("assets/image/png/smallsize/count_time.png");
const arrow_up_texture = await PIXI.Assets.load("assets/image/png/smallsize/V_up.png")
const arrow_down_texture = await PIXI.Assets.load("assets/image/png/smallsize/V_down.png")
const button_texture = await PIXI.Assets.load("assets/image/png/smallsize/bt_square.png")
const close_button_texture = await PIXI.Assets.load("assets/image/png/smallsize/bt_x.png")
const splash_texture = await PIXI.Assets.load("assets/image/png/smallsize/default_sprite_splash.png")
const player_texture = await PIXI.Assets.load("assets/image/png/smallsize/text_Player_en.png")
const player_below_texture = await PIXI.Assets.load("assets/image/png/smallsize/text_Player_cn.png")
const banker_texture = await PIXI.Assets.load("assets/image/png/smallsize/text_Banker_en.png")
const banker_below_texture = await PIXI.Assets.load("assets/image/png/smallsize/text_Banker_cn.png")
const room_info_texture = await PIXI.Assets.load("assets/image/png/smallsize/Rounded_10.png")
const people_texture = await PIXI.Assets.load("assets/image/png/smallsize/people_icon.png")
const s11 = await PIXI.Assets.load("assets/image/png/Card/Card_98x144/S11.png")
const c5 = await PIXI.Assets.load("assets/image/png/Card/Card_98x144/C5.png")
const h13 = await PIXI.Assets.load("assets/image/png/Card/Card_98x144/H13.png")
const d4 = await PIXI.Assets.load("assets/image/png/Card/Card_98x144/D4.png")
const back = await PIXI.Assets.load("assets/image/png/Card/Card_98x144/Back.png")
const button_info = await PIXI.Assets.load("assets/image/png/smallsize/bt_blue.png")
const icon_history = await PIXI.Assets.load("assets/image/png/smallsize/history_icon.png")
const icon_rule = await PIXI.Assets.load("assets/image/png/smallsize/info_icon.png")
const slot_bet_texture = await PIXI.Assets.load("assets/image/png/smallsize/999_frame.png")
const lb_player_top_texture = await PIXI.Assets.load("assets/image/png/smallsize/label_player.png")
const lb_player_bot_texture = await PIXI.Assets.load("assets/image/png/smallsize/label_player_en.png")
const lb_banker_top_texture = await PIXI.Assets.load("assets/image/png/smallsize/label_banker.png")
const lb_banker_bot_texture = await PIXI.Assets.load("assets/image/png/smallsize/label_banker_en.png")
const lb_tie_top_texture = await PIXI.Assets.load("assets/image/png/smallsize/label_tie.png")
const lb_tie_bot_texture = await PIXI.Assets.load("assets/image/png/smallsize/label_tie_en.png")
const bet_highlight_texture = await PIXI.Assets.load("assets/image/png/smallsize/bet_highlight.png")
const bar_bg_texture = await PIXI.Assets.load("assets/image/png/smallsize/bar_backing.png")
const bar_fill_texture = await PIXI.Assets.load("assets/image/png/smallsize/bar_fill.png")
const bet_highlight_glow_texture = await PIXI.Assets.load("assets/image/png/smallsize/bet_highlight_glow.png")
const glow_amount_texture = await PIXI.Assets.load("assets/image/png/smallsize/Rounded_13.png")
const coint_texture = await PIXI.Assets.load("assets/image/png/microsize/coin_small.png")
const menu_texture = await PIXI.Assets.load("assets/image/png/smallsize/hamburger_bt.png")
const menu_bg_texture = await PIXI.Assets.load("assets/image/png/smallsize/sound_open_tab.png")
const sfx_on_texture = await PIXI.Assets.load("assets/image/png/smallsize/sound.png")
const sfx_off_texture = await PIXI.Assets.load("assets/image/png/smallsize/sound_off.png")
const music_on_texture = await PIXI.Assets.load("assets/image/png/smallsize/music.png")
const music_off_texture = await PIXI.Assets.load("assets/image/png/smallsize/music_off.png")
const roundmap_t_texture = await PIXI.Assets.load("assets/image/png/smallsize/roadmap_T.png")
const roundmap_b_texture = await PIXI.Assets.load("assets/image/png/smallsize/roadmap_B.png")
const roundmap_p_texture = await PIXI.Assets.load("assets/image/png/smallsize/roadmap_P.png")
const btn_red_texture = await PIXI.Assets.load("assets/image/png/smallsize/bt_red.png")
const btn_green_texture = await PIXI.Assets.load("assets/image/png/smallsize/bt_green.png")
const cover_texture = await PIXI.Assets.load("assets/image/png/smallsize/cover.png")
const arrow_bt_texture = await PIXI.Assets.load("assets/image/png/smallsize/arrow_bt.png")
const chip_glow_texture = await PIXI.Assets.load("assets/image/png/smallsize/chip_glow.png")
const chip_shadow_below_texture = await PIXI.Assets.load("assets/image/png/chip/circle_buttonshadow.png")
const chip_shadow_texture = await PIXI.Assets.load("assets/image/png/chip/chip_v1_shadow.png")
const chip_top_texture = await PIXI.Assets.load("assets/image/png/chip/chip_v1_top.png")
const chip_base_texture = await PIXI.Assets.load("assets/image/png/chip/chip_v2_base_above_layer.png")
const chip_tint_texture = await PIXI.Assets.load("assets/image/png/chip/chip_v2_tint_below_layer.png")

//Style
const bet_style = new PIXI.TextStyle({
    fontFamily: "MyriadPro_Semibold",
    fontSize: 16,
    fill: "#EBC026",
    fontWeight: 'normal',
    stroke: '#980000',
    strokeThickness: 2,
    lineJoin: 'round',
});

const rate_bet_style = new PIXI.TextStyle({
    fontFamily: "MyriadPro_Semibold",
    fontSize: 24,
    fill: "#FFFFFF",
    fontWeight: 'normal',
});

const percent_style = new PIXI.TextStyle({
    fontFamily: "MyriadPro_Bold",
    fontSize: 14,
    fontWeight: 'normal',
    fill: '#ffffff'
})

const style_room_info = new PIXI.TextStyle({
    fontFamily: 'MyriadPro_Semibold',
    fontSize: 20,
    fontWeight: 'normal',
    fill: '#EBC026',
    stroke: { color: '#0A414D', width: 1, join: 'round' }
})

const point_style = new PIXI.TextStyle({
    fontFamily: "MyriadPro_Bold",
    fontSize: 100,
    fill: '#ffffff',
    fontWeight: 'normal',
    stroke: '#711f1d',
    strokeThickness: 4,
    lineJoin: 'round',
    //'miter', 'bevel', 'round'
    dropShadow: true,
    dropShadow: {
        color: '#711f1d',
        blur: 1,
        angle: Math.PI / 2,
        distance: 3,
    },
    // wordWrap: true,
    // wordWrapWidth: 440,
})

const style = new PIXI.TextStyle({
    fontFamily: 'MyriadPro_Bold',
    fontSize: 42,
    fontWeight: 'normal',
    fill: '0xffffff',
    stroke: { color: '#1A1A1A', width: 6, join: 'round' }
});

const card_style = new PIXI.TextStyle({
    fontFamily: 'MyriadPro_Bold',
    fontSize: 20,
    fontWeight: 'normal',
    fill: '#CDCDCD',
    stroke: { color: '#1A1A1A', width: 6, join: 'round' }
});

const timer_style = new PIXI.TextStyle({
    fontFamily: 'MyriadPro_Bold',
    fontSize: 34,
    fontWeight: 'normal',
    fill: '#622300',
    stroke: { color: '#FFD93F', width: 1, join: 'round' }
});

const amount_style = new PIXI.TextStyle({
    fontFamily: 'MyriadPro_Semibold',
    fontSize: 18,
    fill: '#ffffff'
})

const chip_style_value = new PIXI.TextStyle({
    fontFamily: 'BebasNeue_Regular',
    fontSize: 56,
    // fontWeight: 'bold',
    fill: '#000000',
    stroke: { color: '#000000', width: 1, join: 'round' }

})

const raito_style = new PIXI.TextStyle({
    fontFamily: "MyriadPro_Bold",
    fontWeight: 'bold',
    fill: '#ffffff',
    fontSize: 20
})

//========================================================================================
//board_left
const board_left = new PIXI.Sprite(board_texture);
container.addChild(board_left);
board_left.anchor.x = 1;
board_left.x = board_position[0];
board_left.y = board_position[1];

//board_right
const board_right = new PIXI.Sprite(board_texture);
container.addChild(board_right);
board_right.anchor.x = 1;
board_right.x = board_position[0];
board_right.y = board_position[1];
board_right.scale.x = -1;

//logo
const logo = new PIXI.Sprite(logo_texture);
container.addChild(logo);
logo.anchor.x = 0;
logo.anchor.y = 1;
logo.x = logo_position[0];
logo.y = logo_position[1];

//card box
const card_box = new PIXI.Sprite(card_box_texture);
container.addChild(card_box);
card_box.x = board_position[0];
card_box.anchor.x = 0.5;
card_box.y = -15;

//timer
const timer = new PIXI.Sprite(timer_texture);
container.addChild(timer);
timer.x = board_position[0] + 112;
timer.anchor.x = 0.5;
timer.y = -5;

//countdown
const countdown = new PIXI.Sprite(countdown_texture);
countdown.x = 0;
countdown.anchor.x = 0.5;
countdown.y = 10;
countdown.tint = '#E58E2D'
timer.addChild(countdown)

// button up
const button = new PIXI.Sprite(button_texture);
button.x = timer.x + 65;
button.y = 0;
container.addChild(button)

const arrow_up = new PIXI.Sprite(arrow_up_texture);
arrow_up.x = timer.x + 75;
arrow_up.y = 13;
container.addChild(arrow_up)

// close button
const x_button = new PIXI.Sprite(close_button_texture);
x_button.x = button.x + 90;
x_button.y = -15;
container.addChild(x_button)

// line
const line = new PIXI.Sprite(splash_texture);
line.x = board_position[0];
line.y = 113;
line.width = 3;
line.height = 164;
line.tint = '#8EC4C2'
container.addChild(line)

// player
const player = new PIXI.Sprite(player_texture);
player.anchor.x = 1;
player.x = board_position[0] - 45;
player.y = 78;
player.tint = '#ffffff';
player.alpha = 0.4;
container.addChild(player)

const player_below = new PIXI.Sprite(player_below_texture);
player_below.anchor.x = 1;
player_below.scale = 0.9
player_below.x = board_position[0] - 90;
player_below.y = 160;
player_below.tint = '#ffffff';
player_below.alpha = 0.2;
container.addChild(player_below)

// banker
const banker = new PIXI.Sprite(banker_texture);
banker.x = board_position[0] + 60;
banker.anchor.x = 0;
banker.y = 78;
banker.tint = '#ffffff';
banker.alpha = 0.4;
container.addChild(banker)

const banker_below = new PIXI.Sprite(banker_below_texture);
banker_below.anchor.x = 1;
banker_below.scale = 0.9
banker_below.x = board_position[0] + 140;
banker_below.y = 160;
banker_below.tint = '#ffffff';
banker_below.alpha = 0.2;
container.addChild(banker_below)

// room info
const bg_room_info = new PIXI.NineSlicePlane(room_info_texture, 10, 10, 10, 10);
banker.x = board_position[0] + 60;
bg_room_info.width = 114;
bg_room_info.height = 45;
bg_room_info.alpha = 0.8;
bg_room_info.x = -10;
bg_room_info.y = 95;
bg_room_info.tint = '#00485DCC';
container.addChild(bg_room_info)

// icon people
const icon_people = new PIXI.Sprite(people_texture);
icon_people.x = -2;
icon_people.y = 106.25;
icon_people.alpha = 1;
container.addChild(icon_people)


const amount_people = new PIXI.Text({
    text: '10',
    style: style_room_info,
});
amount_people.x = 57;
amount_people.y = -10;
icon_people.addChild(amount_people);

const player_lb = new PIXI.Text({
    text: 'Players',
    style: style_room_info,
});
player_lb.x = 37;
player_lb.y = 7;
icon_people.addChild(player_lb)

// cards s11 c5 h13 d4
const S11 = new PIXI.Sprite(s11);
S11.x = 155;
S11.y = 140;
S11.scale = 0.57;
container.addChild(S11);

const C5 = new PIXI.Sprite(c5);
C5.x = 225;
C5.y = 140;
C5.scale = 0.57;
container.addChild(C5);

const H13 = new PIXI.Sprite(h13);
H13.x = 390;
H13.y = 140;
H13.scale = 0.57;
container.addChild(H13);

const D4 = new PIXI.Sprite(d4);
D4.x = 460;
D4.y = 140;
D4.scale = 0.57;
container.addChild(D4);

const back_left = new PIXI.Sprite(back);
back_left.x = 175;
back_left.y = 285;
back_left.scale = 0.57;
back_left.angle = -90;
container.addChild(back_left);

const back_rightt = new PIXI.Sprite(back);
back_rightt.x = 410;
back_rightt.y = 285;
back_rightt.scale = 0.57;
back_rightt.angle = -90;
container.addChild(back_rightt);

// button info
const button_up = new PIXI.Sprite(button_info);
button_up.x = -12;
button_up.y = 250;
button_up.scale.y = -1;
container.addChild(button_up);

const button_down = new PIXI.Sprite(button_info);
button_down.x = -12;
button_down.y = 250;
container.addChild(button_down);

const history_icon = new PIXI.Sprite(icon_history);
history_icon.x = 1;
history_icon.y = 275;
container.addChild(history_icon);

const rule_icon = new PIXI.Sprite(icon_rule);
rule_icon.x = 15;
rule_icon.y = 185;
container.addChild(rule_icon);

//============ Left
const highlight_left = new PIXI.NineSlicePlane(bet_highlight_texture, 61, 61, 61, 61);
highlight_left.width = 178;
highlight_left.height = 126;
highlight_left.x = 62;
highlight_left.y = 290;
container.addChild(highlight_left);
highlight_left.visible = visible_highlight_left;

const slot_left = new PIXI.NineSlicePlane(slot_bet_texture, 35, 43, 8, 12);
slot_left.width = 178;
slot_left.height = 126;
slot_left.x = 62;
slot_left.y = 290;
slot_left.tint = '#FFFFFF';
container.addChild(slot_left)

const amount_left = new PIXI.Text({
    text: '999',
    style: bet_style
})
amount_left.angle = -39;
amount_left.anchor.x = 0.5;
amount_left.anchor.y = 0.5;
amount_left.y = 10
amount_left.x = 10
slot_left.addChild(amount_left);

const lb_player_top = new PIXI.Sprite(lb_player_top_texture);
lb_player_top.anchor.x = 0.5;
lb_player_top.anchor.y = 0.5;
lb_player_top.x = 89;
lb_player_top.y = 37;
slot_left.addChild(lb_player_top);

const lb_player_bot = new PIXI.Sprite(lb_player_bot_texture);
lb_player_bot.anchor.x = 0.5;
lb_player_bot.anchor.y = 0.5;
lb_player_bot.x = 89;
lb_player_bot.y = 86;
slot_left.addChild(lb_player_bot);

const rate_amount_left = new PIXI.Text({
    text: '1 : 1',
    style: rate_bet_style
})
rate_amount_left.anchor.x = 0.5;
rate_amount_left.anchor.y = 0.5;
rate_amount_left.y = 110
rate_amount_left.x = 89
slot_left.addChild(rate_amount_left);

const bar_bg_l = new PIXI.Sprite(bar_bg_texture);
bar_bg_l.x = 157;
bar_bg_l.y = 16;
slot_left.addChild(bar_bg_l);

const bar_fill_l = new PIXI.Sprite(bar_fill_texture);
bar_fill_l.x = 159;
bar_fill_l.y = 19;
bar_fill_l.tint = '#0288D1';
slot_left.addChild(bar_fill_l);

const highlight_glow_left = new PIXI.NineSlicePlane(bet_highlight_glow_texture, 59, 84, 84, 59);
highlight_glow_left.width = 180;
highlight_glow_left.height = 126;
highlight_glow_left.x = 62;
highlight_glow_left.y = 290;
highlight_glow_left.alpha = 0.5
highlight_glow_left.visible = visible_highlight_left;
container.addChild(highlight_glow_left);

const glow_money_l = new PIXI.NineSlicePlane(glow_amount_texture, 12, 12, 12, 12);
glow_money_l.width = 112;
glow_money_l.height = 26;
glow_money_l.alpha = 0.7;
glow_money_l.tint = '#1F1F1FB4'
glow_money_l.x = 95;
glow_money_l.y = 370;
container.addChild(glow_money_l);

const layout_l = new PIXI.Container();
layout_l.x = 521;
layout_l.y = 370;
container.addChild(layout_l);

const coin_l = new PIXI.Sprite(coint_texture);
coin_l.y = 5;
coin_l.anchor.x = 0.5;
layout_l.addChild(coin_l);

const amount_l = new PIXI.Text({
    text: '9.999',
    style: amount_style
})
amount_l.y = 2.5;
amount_l.x = coin_l.x + 12;
layout_l.addChild(amount_l)
const layout_width_l = layout_l.getBounds().width;
const rate_l = layout_width_l / glow_money_l.width;
layout_l.x = glow_money_l.x + (1 - rate_l) * layout_width_l;

const percent_left = new PIXI.Text({
    text: '98%',
    style: percent_style
})
percent_left.x = 170;
percent_left.y = 101;
percent_left.anchor.x = 1;
slot_left.addChild(percent_left);

//============= Middle
const highlight_middle = new PIXI.NineSlicePlane(bet_highlight_texture, 61, 61, 61, 61);
highlight_middle.width = 178;
highlight_middle.height = 126;
highlight_middle.x = 247;
highlight_middle.y = 290;
container.addChild(highlight_middle);
highlight_middle.visible = visible_highlight_middle;

const slot_middle = new PIXI.NineSlicePlane(slot_bet_texture, 35, 43, 8, 12);
slot_middle.width = 178;
slot_middle.height = 126;
slot_middle.x = 247;
slot_middle.y = 290;
slot_middle.tint = '#FFFFFF';
container.addChild(slot_middle)

const amount_middle = new PIXI.Text({
    text: '999',
    style: bet_style
})
amount_middle.angle = -39;
amount_middle.anchor.x = 0.5;
amount_middle.anchor.y = 0.5;
amount_middle.y = 10
amount_middle.x = 10
slot_middle.addChild(amount_middle);

const lb_tie_top = new PIXI.Sprite(lb_tie_top_texture);
lb_tie_top.anchor.x = 0.5;
lb_tie_top.anchor.y = 0.5;
lb_tie_top.x = 89;
lb_tie_top.y = 37;
slot_middle.addChild(lb_tie_top);

const lb_tie_bot = new PIXI.Sprite(lb_tie_bot_texture);
lb_tie_bot.anchor.x = 0.5;
lb_tie_bot.anchor.y = 0.5;
lb_tie_bot.x = 89;
lb_tie_bot.y = 86;
slot_middle.addChild(lb_tie_bot);

const rate_amount_middle = new PIXI.Text({
    text: '1 : 8',
    style: rate_bet_style
})
rate_amount_middle.anchor.x = 0.5;
rate_amount_middle.anchor.y = 0.5;
rate_amount_middle.y = 110
rate_amount_middle.x = 89
slot_middle.addChild(rate_amount_middle);

const bar_bg_m = new PIXI.Sprite(bar_bg_texture);
bar_bg_m.x = 157;
bar_bg_m.y = 16;
slot_middle.addChild(bar_bg_m);

const bar_fill_m = new PIXI.Sprite(bar_fill_texture);
bar_fill_m.x = 159;
bar_fill_m.y = 19;
bar_fill_m.tint = '#25B453';
slot_middle.addChild(bar_fill_m);

const highlight_glow_middle = new PIXI.NineSlicePlane(bet_highlight_glow_texture, 59, 84, 84, 59);
highlight_glow_middle.width = 180;
highlight_glow_middle.height = 126;
highlight_glow_middle.x = 247;
highlight_glow_middle.y = 290;
highlight_glow_middle.alpha = 0.5;
highlight_glow_middle.visible = visible_highlight_middle;
container.addChild(highlight_glow_middle);

const glow_money_m = new PIXI.NineSlicePlane(glow_amount_texture, 12, 12, 12, 12);
glow_money_m.width = 112;
glow_money_m.height = 26;
glow_money_m.alpha = 0.7;
glow_money_m.tint = '#1F1F1FB4'
glow_money_m.x = 280;
glow_money_m.y = 370;
container.addChild(glow_money_m);

const layout_m = new PIXI.Container();
layout_m.x = 521;
layout_m.y = 370;
container.addChild(layout_m);

const coin_m = new PIXI.Sprite(coint_texture);
coin_m.y = 5;
coin_m.anchor.x = 0.5;
layout_m.addChild(coin_m);

const amount_m = new PIXI.Text({
    text: '999.999',
    style: amount_style
})
amount_m.y = 2.5;
amount_m.x = coin_l.x + 12;
layout_m.addChild(amount_m)
const layout_width_m = layout_m.getBounds().width;
const rate_m = layout_width_m / glow_money_m.width;
layout_m.x = glow_money_m.x + (1 - rate_m) * layout_width_m;

const percent_middle = new PIXI.Text({
    text: '98%',
    style: percent_style
})
percent_middle.x = 170;
percent_middle.y = 101;
percent_middle.anchor.x = 1;
slot_middle.addChild(percent_middle);

//============= Right
const highlight_right = new PIXI.NineSlicePlane(bet_highlight_texture, 61, 61, 61, 61);
highlight_right.width = 178;
highlight_right.height = 126;
highlight_right.x = 432;
highlight_right.y = 290;
container.addChild(highlight_right);
highlight_right.visible = visible_highlight_bot;

const slot_right = new PIXI.NineSlicePlane(slot_bet_texture, 35, 43, 8, 12);
slot_right.width = 178;
slot_right.height = 126;
slot_right.x = 432;
slot_right.y = 290;
slot_right.tint = '#FFFFFF';
container.addChild(slot_right)

const amount_right = new PIXI.Text({
    text: '999',
    style: bet_style
})
amount_right.angle = -39;
amount_right.anchor.x = 0.5;
amount_right.anchor.y = 0.5;
amount_right.y = 10
amount_right.x = 10
slot_right.addChild(amount_right);

const lb_banker_top = new PIXI.Sprite(lb_banker_top_texture);
lb_banker_top.anchor.x = 0.5;
lb_banker_top.anchor.y = 0.5;
lb_banker_top.x = 89;
lb_banker_top.y = 37;
slot_right.addChild(lb_banker_top);

const lb_banker_bot = new PIXI.Sprite(lb_banker_bot_texture);
lb_banker_bot.anchor.x = 0.5;
lb_banker_bot.anchor.y = 0.5;
lb_banker_bot.x = 89;
lb_banker_bot.y = 86;
slot_right.addChild(lb_banker_bot);

const rate_amount_right = new PIXI.Text({
    text: '1 : 0.95',
    style: rate_bet_style
})
rate_amount_right.anchor.x = 0.5;
rate_amount_right.anchor.y = 0.5;
rate_amount_right.y = 110;
rate_amount_right.x = 89;
slot_right.addChild(rate_amount_right);

const bar_bg_r = new PIXI.Sprite(bar_bg_texture);
bar_bg_r.x = 589;
bar_bg_r.y = 306;
container.addChild(bar_bg_r);


const bar_fill_r = new PIXI.Sprite(bar_fill_texture);
bar_fill_r.x = 591;
bar_fill_r.y = 309;
bar_fill_r.tint = '#E53935';
container.addChild(bar_fill_r);


const highlight_glow_right = new PIXI.NineSlicePlane(bet_highlight_glow_texture, 59, 84, 84, 59);
highlight_glow_right.width = 180;
highlight_glow_right.height = 126;
highlight_glow_right.x = 432;
highlight_glow_right.y = 290;
highlight_glow_right.alpha = 0.5
highlight_glow_right.visible = visible_highlight_bot;
container.addChild(highlight_glow_right);

const glow_money_r = new PIXI.NineSlicePlane(glow_amount_texture, 12, 12, 12, 12);
glow_money_r.width = 112;
glow_money_r.height = 26;
glow_money_r.alpha = 0.7;
glow_money_r.tint = '#1F1F1FB4'
glow_money_r.x = 465;
glow_money_r.y = 370;
container.addChild(glow_money_r);

const layout_r = new PIXI.Container();
layout_r.x = 521;
layout_r.y = 370;
container.addChild(layout_r);

const coin_r = new PIXI.Sprite(coint_texture);
coin_r.y = 5;
coin_r.anchor.x = 0.5;
layout_r.addChild(coin_r);

const amount_r = new PIXI.Text({
    text: '9.999.999',
    style: amount_style
})
amount_r.y = 2.5;
amount_r.x = coin_r.x + 12;
layout_r.addChild(amount_r)
const layout_width_r = layout_r.getBounds().width;
const rate_r = layout_width_r / glow_money_r.width;
layout_r.x = glow_money_r.x + (1 - rate_r) * layout_width_r;

const percent_right = new PIXI.Text({
    text: '98%',
    style: percent_style
})
percent_right.x = 170;
percent_right.y = 101;
percent_right.anchor.x = 1;
slot_right.addChild(percent_right);

// menu
const menu_bg = new PIXI.NineSlicePlane(menu_bg_texture, 8, 8, 25, 8);
menu_bg.x = 25;
menu_bg.y = 362.5;
menu_bg.width = 210;
container.addChild(menu_bg);

const menu = new PIXI.Sprite(menu_texture);
menu_bg.addChild(menu);
menu.y = -2.5;
menu.x = -30;

const sfx_on = new PIXI.Sprite(sfx_on_texture);
menu_bg.addChild(sfx_on);
sfx_on.y = 12.5;
sfx_on.x = 70;
sfx_on.visible = is_sfx_on;

const sfx_off = new PIXI.Sprite(sfx_off_texture);
menu_bg.addChild(sfx_off);
sfx_off.y = 10;
sfx_off.x = 70;
sfx_off.visible = !is_sfx_on;

const music_on = new PIXI.Sprite(music_on_texture);
menu_bg.addChild(music_on);
music_on.y = 10;
music_on.x = 140;
music_on.visible = is_music_on;

const music_off = new PIXI.Sprite(music_off_texture);
menu_bg.addChild(music_off);
music_off.y = 10;
music_off.x = 140;
music_off.visible = !is_music_on;

//raito result
// raito_style
const b = new PIXI.Text({
    text: "B:",
    style: raito_style
})
container.addChild(b);
b.y = 430;
b.x = 62
b.tint = '#FF1744';

const result_b = new PIXI.Text({
    text: '24',
    style: raito_style
})
result_b.y = 430;
result_b.x = b.x + 20;
container.addChild(result_b);

const p = new PIXI.Text({
    text: "P:",
    style: raito_style
})
container.addChild(p);
p.y = 430;
p.x = 140;
p.tint = '#42A5F5';

const result_p = new PIXI.Text({
    text: '22',
    style: raito_style
})
result_p.y = 430;
result_p.x = p.x + 20;
container.addChild(result_p);

const t = new PIXI.Text({
    text: "T:",
    style: raito_style
})
container.addChild(t);
t.y = 430;
t.x = 220;
t.tint = '#66BB6A';

const result_t = new PIXI.Text({
    text: '3',
    style: raito_style
})
result_t.y = 430;
result_t.x = t.x + 20;
container.addChild(result_t);

const total = new PIXI.Text({
    text: 'Total 51',
    style: raito_style
})
total.y = 430;
total.x = 540;
container.addChild(total);



// road map
for (let i = 0; i < roadmaps_p.length; i++) {
    const roadmap_p = new PIXI.Sprite(roundmap_p_texture);
    container.addChild(roadmap_p);
    roadmap_p.y = position_y_roadmap;
    roadmap_p.x = position_x_roadmaps[roadmaps_p[i]];
}
for (let i = 0; i < roadmaps_t.length; i++) {
    const roadmap_t = new PIXI.Sprite(roundmap_t_texture);
    container.addChild(roadmap_t);
    roadmap_t.y = position_y_roadmap;
    roadmap_t.x = position_x_roadmaps[roadmaps_t[i]];
}
for (let i = 0; i < roadmaps_b.length; i++) {
    const roadmap_b = new PIXI.Sprite(roundmap_b_texture);
    container.addChild(roadmap_b);
    roadmap_b.y = position_y_roadmap;
    roadmap_b.x = position_x_roadmaps[roadmaps_b[i]];
}

// btn bottom
const btn_red = new PIXI.Sprite(btn_red_texture);
container.addChild(btn_red);
btn_red.y = 497;
btn_red.x = 10;

const btn_green = new PIXI.Sprite(btn_green_texture);
container.addChild(btn_green);
btn_green.y = 497;
btn_green.x = 550;





// points
const left_point = new PIXI.Text({
    text: '5',
    style: point_style,
});
left_point.x = 80;
left_point.y = 155;
container.addChild(left_point);

const right_point = new PIXI.Text({
    text: '4',
    style: point_style,
});
right_point.x = container.width - 162;
right_point.y = 155;
container.addChild(right_point);






//text card box
const amount_card = new PIXI.Text({
    text: '48',
    style,
});

amount_card.anchor.x = 0.5;
amount_card.x = board_position[0];
amount_card.y = -5;
container.addChild(amount_card)

//text card

const card_txt = new PIXI.Text({
    text: 'Card',
    style: card_style,
});

card_txt.anchor.x = 0.5;
card_txt.x = board_position[0];
card_txt.y = 40;

container.addChild(card_txt)

//text timer

const timer_txt = new PIXI.Text({
    text: '10',
    style: timer_style,
});

timer_txt.anchor.x = 0.5;
timer_txt.x = board_position[0] + 111;
timer_txt.y = 5;
container.addChild(timer_txt);

// chip
const chip_player_container = new PIXI.Container();
chip_player_container.x = 75;
chip_player_container.y = 170;
container.addChild(chip_player_container)
spawnChips(amount_chip_left, 0.15, chip_player_container, 0, 0, 0, 200);

const chip_tie_container = new PIXI.Container();
chip_tie_container.x = 169;
chip_tie_container.y = 170;
container.addChild(chip_tie_container)
spawnChips(amount_chip_mid, 0.15, chip_tie_container, 2, 0, 0, 50);

const chip_banker_container = new PIXI.Container();
chip_banker_container.x = 260;
chip_banker_container.y = 170;
container.addChild(chip_banker_container)
spawnChips(amount_chip_right, 0.15, chip_banker_container, 4, 0, 0, 500);


// chip option
const bet_option_container = new PIXI.Container();
bet_option_container.x = 168.5;
bet_option_container.y = 267;
container.addChild(bet_option_container);


addChip(0.45, bet_option_container, 3, 180, 0, 1000);
addChip(0.45, bet_option_container, 4, 100, 0, 500);
addChip(0.5, bet_option_container, 0, 0, 0, 200);
addChip(0.45, bet_option_container, 7, -100, 0, 100);
addChip(0.45, bet_option_container, 2, -180, 0, 50);
const chip_glow = new PIXI.Sprite(chip_glow_texture);
chip_glow.x = 169;
chip_glow.y = 269;
chip_glow.width = 110;
chip_glow.height = 110;
chip_glow.anchor = 0.5;
bet_option_container.addChild(chip_glow);


const cover_l = new PIXI.Sprite(cover_texture);
container.addChild(cover_l);
cover_l.y = 497;
cover_l.x = 152;
cover_l.scale.x = -1;
cover_l.alpha = 0.98;
// cover_l.tint = '#000000';
cover_l.width = 36;
cover_l.height = 76;

const cover_r = new PIXI.Sprite(cover_texture);
container.addChild(cover_r);
cover_r.y = 497;
cover_r.x = 515;
cover_r.alpha = 0.98;
// cover_r.tint = '#000000';
cover_r.width = 36;
cover_r.height = 76;

const arrow_left = new PIXI.Sprite(arrow_bt_texture);
container.addChild(arrow_left);
arrow_left.anchor = 0.5;
arrow_left.x = 147;
arrow_left.y = 535;

const arrow_right = new PIXI.Sprite(arrow_bt_texture);
container.addChild(arrow_right);
arrow_right.anchor = 0.5;
arrow_right.scale.x = -1;
arrow_right.x = 517;
arrow_right.y = 535;

// log size position of container
// const bounds = container.getBounds();
// console.log('X:', bounds.x);
// console.log('Y:', bounds.y);
// console.log('Width:', bounds.width);
// console.log('Height:', bounds.height);

//update
// app.ticker.add(() => {

// });

function addChip(rate, _container, index_color = 0, x = 0, y = 0, value = 0) {
    if (!_container) {
        console.error("Container is undefined or null.");
        return;
    }
    const chip_shadow_below = new PIXI.Sprite(chip_shadow_below_texture);
    _container.addChild(chip_shadow_below);
    chip_shadow_below.scale = 2.4 * rate;
    chip_shadow_below.alpha = 0.6;
    chip_shadow_below.anchor = 0.5
    chip_shadow_below.x = _container.x + x;
    chip_shadow_below.y = _container.y + 10 * rate + y;

    const chip_shadow = new PIXI.Sprite(chip_shadow_texture);
    chip_shadow.anchor = 0.5;
    chip_shadow.width = 188;
    chip_shadow.height = 188;
    chip_shadow.scale.set(1 * rate)
    chip_shadow.tint = chip_colors[index_color];
    _container.addChild(chip_shadow);
    chip_shadow.x = _container.x + x;
    chip_shadow.y = _container.y + y;

    const chip_tint = new PIXI.Sprite(chip_tint_texture);
    chip_tint.anchor = 0.5;
    chip_tint.width = 140;
    chip_tint.height = 140;
    chip_tint.scale.set(1 * rate)
    chip_tint.tint = chip_colors[index_color];
    _container.addChild(chip_tint);
    chip_tint.x = _container.x + x;
    chip_tint.y = _container.y + y;

    const base_chip = new PIXI.Sprite(chip_base_texture);
    base_chip.anchor = 0.5;
    base_chip.width = 140;
    base_chip.height = 140;
    base_chip.scale.set(1 * rate)
    base_chip.tint = '#ffffff';
    _container.addChild(base_chip);
    base_chip.x = _container.x + x;
    base_chip.y = _container.y + y;

    const chip_top = new PIXI.Sprite(chip_top_texture);
    chip_top.anchor = 0.5;
    chip_top.width = 188;
    chip_top.height = 188;
    chip_top.scale.set(1 * rate)
    chip_top.tint = '#ffffff';
    _container.addChild(chip_top);
    chip_top.x = _container.x + x;
    chip_top.y = _container.y + y;
    if (value) {
        const chip_value = new PIXI.Text({
            text: value,
            style: chip_style_value
        })
        chip_value.anchor = 0.5;
        chip_value.x = _container.x + x;
        chip_value.y = _container.y + y;
        chip_value.scale.set(rate);
        _container.addChild(chip_value)
    }
}
function spawnChips(amount, rate, _container, index_color, x, y, value) {
    for (let i = 0; i < amount; i++) {
        const random_x = Math.random() * 80 - 40;
        const random_y = Math.random() * 20 - 10;
        addChip(rate, _container, index_color, random_x, random_y, value);
    }
}
}
initApp()
