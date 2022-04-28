window.onload = function()
{
    // cria o app
    var app = new b5.App(document.getElementById('gamecanvas'), true);
    app.debug = false;
    app.clear_canvas = true; 
    //aqui nos redimensionamos a tela 
    app.setCanvasScalingMethod(b5.App.FitBest);
    
    // Aqui criamos uma cena
    var scene = new b5.Scene();
    var vec = Box2D.Common.Math.b2Vec2;
    // Aqui Adicionamos a cena no game
    app.addScene(scene);
    //aqui implantamos a fisica no game, colocando velocidade no eixo x e y, para verdadeiro
    scene.initWorld( 0, 0, false);
    b5.app.focus_scene = scene;
    app.touch_focus = scene;
//aqui criamos os atores(objetos) 
    var player = new b5.Actor();
    player.x = 10;
    player.y = 10;
    player.w = 20;
    player.h = 20;
    scene.addActor(player);
    
    player.atlas = new b5.ImageAtlas("sheep", new b5.Bitmap("sheep", "yet.png", true));
    player.atlas.addFrame(0,0,32,32);
    player.atlas.addFrame(32,0,32,32);
    player.atlas.addFrame(64,0,32,32);
    player.atlas.addFrame(96,0,32,32);
    player.atlas.addFrame(0,32,32,32);
    player.atlas.addFrame(32,32,32,32);
    player.atlas.addFrame(64,32,32,32);
    player.atlas.addFrame(96,32,32,32);
    player.atlas.addFrame(128,32,32,32);
    player.atlas.addFrame(160,32,32,32);
    
    player.current_frame = 0;
    
    player.atlas.addAnim("idle", [0,1,2,3], 05);
    player.atlas.addAnim("run", [4,5,6,7,8,9],05);
    player.playAnim("run");
    
    
/*
*/
scene.extents=[-1000,-1000,2000,2000];
app.start();

};