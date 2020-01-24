var createScene = function () {
    // Setup the scene
    var scene = new BABYLON.Scene(engine);
    //var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -12), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Create a sphere that we will be moved by the keyboard
    
    //var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
    //sphere.position.y = 1;

    var boxesc = BABYLON.MeshBuilder.CreateBox("boxesc",{height: 0.5}, scene);
    boxesc.position.y = 1;
    boxesc.position.x = -5;

    var boxtilde = BABYLON.MeshBuilder.CreateBox("boxtilde",{height:0.5,width:0.9},scene);
    boxtilde.position.y = 1;
    boxtilde.position.x = -5;
    boxtilde.position.z = -1.75;

    var boxf1 = BABYLON.MeshBuilder.CreateBox("boxf1",{height:0.5},scene);
    boxf1.position.y = 1;
    boxf1.position.x = -3;
    boxf1.position.z = 0

    var box1 = BABYLON.MeshBuilder.CreateBox("box1",{height:0.5, width:0.8},scene);
    box1.position.y = 1;
    box1.position.x = -4;
    box1.position.z = -1.75;

    var box2 = BABYLON.MeshBuilder.CreateBox("box2",{height:0.5, width:0.8},scene);
    box2.position.y = 1;
    box2.position.x = -3.1;
    box2.position.z = -1.75;

    var boxtab = BABYLON.MeshBuilder.CreateBox("boxtab",{height:0.5,width:1.4},scene);
    boxtab.position.y = 1;
    boxtab.position.x = -4.8;
    boxtab.position.z = -2.9;

    var boxq = BABYLON.MeshBuilder.CreateBox("boxq",{height:0.5,width:0.8},scene)
    boxq.position.y = 1;
    boxq.position.x = -3.6;
    boxq.position.z = -2.9;

    var boxw = BABYLON.MeshBuilder.CreateBox("boxw",{height:0.5,width:0.8},scene)
    boxw.position.y = 1;
    boxw.position.x = -2.7;
    boxw.position.z = -2.9;

    var box3 = BABYLON.MeshBuilder.CreateBox("box3",{height:0.5, width: 0.8},scene);
    box3.position.y = 1;
    box3.position.x = -2.2;
    box3.position.z = -1.75;

    var box4 = BABYLON.MeshBuilder.CreateBox("box4",{height:0.5, width: 0.8},scene);
    box4.position.y = 1;
    box4.position.x = -1.3;
    box4.position.z = -1.75;

    var box5 = BABYLON.MeshBuilder.CreateBox("box5",{height:0.5, width: 0.8},scene);
    box5.position.y = 1;
    box5.position.x = -0.4;
    box5.position.z = -1.75;

    var box6 = BABYLON.MeshBuilder.CreateBox("box6",{height:0.5, width: 0.8},scene);
    box6.position.y = 1;
    box6.position.x = 0.5;
    box6.position.z = -1.75;

    var box7 = BABYLON.MeshBuilder.CreateBox("box7",{height:0.5, width: 0.8},scene);
    box7.position.y = 1;
    box7.position.x = 1.4;
    box7.position.z = -1.75;

    var box8 = BABYLON.MeshBuilder.CreateBox("box8",{height:0.5, width: 0.8},scene);
    box8.position.y = 1;
    box8.position.x = 2.3;
    box8.position.z = -1.75;

    var box9 = BABYLON.MeshBuilder.CreateBox("box9",{height:0.5, width: 0.8},scene);
    box9.position.y = 1;
    box9.position.x = 3.2;
    box9.position.z = -1.75;

    var box0 = BABYLON.MeshBuilder.CreateBox("box0",{height:0.5, width: 0.8},scene);
    box0.position.y = 1;
    box0.position.x = 4.1;
    box0.position.z = -1.75;

    var boxmin = BABYLON.MeshBuilder.CreateBox("boxmin",{height:0.5, width: 0.8},scene);
    boxmin.position.y = 1;
    boxmin.position.x = 5;
    boxmin.position.z = -1.75;

    var boxplus = BABYLON.MeshBuilder.CreateBox("boxplus",{height:0.5, width: 0.8},scene);
    boxplus.position.y = 1;
    boxplus.position.x = 5.9;
    boxplus.position.z = -1.75;

    var boxe = BABYLON.MeshBuilder.CreateBox("boxe",{height:0.5,width:0.8},scene)
    boxe.position.y = 1;
    boxe.position.x = -1.8;
    boxe.position.z = -2.9;

    var boxr = BABYLON.MeshBuilder.CreateBox("boxr",{height:0.5,width:0.8},scene)
    boxr.position.y = 1;
    boxr.position.x = -.9;
    boxr.position.z = -2.9;

    var boxt = BABYLON.MeshBuilder.CreateBox("boxt",{height:0.5,width:0.8},scene)
    boxt.position.y = 1;
    boxt.position.x = 0;
    boxt.position.z = -2.9;

    var boxy = BABYLON.MeshBuilder.CreateBox("boxy",{height:0.5,width:0.8},scene)
    boxy.position.y = 1;
    boxy.position.x = 0.9;
    boxy.position.z = -2.9;

    var boxu = BABYLON.MeshBuilder.CreateBox("boxu",{height:0.5,width:0.8},scene)
    boxu.position.y = 1;
    boxu.position.x = 1.8;
    boxu.position.z = -2.9;

    var boxi = BABYLON.MeshBuilder.CreateBox("boxi",{height:0.5,width:0.8},scene)
    boxi.position.y = 1;
    boxi.position.x = 2.7;
    boxi.position.z = -2.9;

    var boxo = BABYLON.MeshBuilder.CreateBox("boxo",{height:0.5,width:0.8},scene)
    boxo.position.y = 1;
    boxo.position.x = 3.6;
    boxo.position.z = -2.9;

    var boxp = BABYLON.MeshBuilder.CreateBox("boxp",{height:0.5,width:0.8},scene)
    boxp.position.y = 1;
    boxp.position.x = 4.5;
    boxp.position.z = -2.9;

    var boxbrakleft = BABYLON.MeshBuilder.CreateBox("boxbrakleft",{height:0.5,width:0.8},scene)
    boxbrakleft.position.y = 1;
    boxbrakleft.position.x = 5.4;
    boxbrakleft.position.z = -2.9;

    var boxbrakrt = BABYLON.MeshBuilder.CreateBox("boxbrakrt",{height:0.5,width:0.8},scene)
    boxbrakrt.position.y = 1;
    boxbrakrt.position.x = 6.3;
    boxbrakrt.position.z = -2.9;

    var boxfwdslash = BABYLON.MeshBuilder.CreateBox("boxbrakrt",{height:0.5,width:1.4},scene)
    boxfwdslash.position.y = 1;
    boxfwdslash.position.x = 7.5;
    boxfwdslash.position.z = -2.9;

    var boxcaps = BABYLON.MeshBuilder.CreateBox("boxcaps",{height:0.5,width:1.6},scene);
    boxcaps.position.y = 1;
    boxcaps.position.x = -4.7;
    boxcaps.position.z = -4.05;

    var boxleftshift = BABYLON.MeshBuilder.CreateBox("boxleftshift",{height:0.5,width:2.1},scene);
    boxleftshift.position.y = 1;
    boxleftshift.position.x = -4.5;
    boxleftshift.position.z = -5.2;

    var boxleftctrl = BABYLON.MeshBuilder.CreateBox("boxleftctrl",{height:0.5,width:1.5},scene);
    boxleftctrl.position.y = 1;
    boxleftctrl.position.x = -4.7;
    boxleftctrl.position.z = -6.35;

    var boxa = BABYLON.MeshBuilder.CreateBox("boxa",{height:0.5,width:0.8},scene);
    boxa.position.y = 1;
    boxa.position.x = -3.4;
    boxa.position.z = -4.05;

    var boxs = BABYLON.MeshBuilder.CreateBox("boxs",{height:0.5,width:0.8},scene);
    boxs.position.y = 1;
    boxs.position.x = -2.5;
    boxs.position.z = -4.05;

    var boxd = BABYLON.MeshBuilder.CreateBox("boxd",{height:0.5,width:0.8},scene);
    boxd.position.y = 1;
    boxd.position.x = -1.6;
    boxd.position.z = -4.05;

    var boxf = BABYLON.MeshBuilder.CreateBox("boxf",{height:0.5,width:0.8},scene);
    boxf.position.y = 1;
    boxf.position.x = -0.7;
    boxf.position.z = -4.05;

    var boxg = BABYLON.MeshBuilder.CreateBox("boxg",{height:0.5,width:0.8},scene);
    boxg.position.y = 1;
    boxg.position.x = 0.2;
    boxg.position.z = -4.05;

    var boxh = BABYLON.MeshBuilder.CreateBox("boxh",{height:0.5,width:0.8},scene);
    boxh.position.y = 1;
    boxh.position.x = 1.1;
    boxh.position.z = -4.05;

    var boxj = BABYLON.MeshBuilder.CreateBox("boxj",{height:0.5,width:0.8},scene);
    boxj.position.y = 1;
    boxj.position.x = 2;
    boxj.position.z = -4.05;

    var boxk = BABYLON.MeshBuilder.CreateBox("boxk",{height:0.5,width:0.8},scene);
    boxk.position.y = 1;
    boxk.position.x = 2.9;
    boxk.position.z = -4.05;

    var boxl = BABYLON.MeshBuilder.CreateBox("boxl",{height:0.5,width:0.8},scene);
    boxl.position.y = 1;
    boxl.position.x = 3.8;
    boxl.position.z = -4.05;

    var boxsemi = BABYLON.MeshBuilder.CreateBox("boxsemi",{height:0.5,width:0.8},scene);
    boxsemi.position.y = 1;
    boxsemi.position.x = 4.7;
    boxsemi.position.z = -4.05;

    var boxquote = BABYLON.MeshBuilder.CreateBox("boxquote",{height:0.5,width:0.8},scene);
    boxquote.position.y = 1;
    boxquote.position.x = 5.6;
    boxquote.position.z = -4.05;

    var boxenter = BABYLON.MeshBuilder.CreateBox("boxenter",{height:0.5,width:2.1},scene);
    boxenter.position.y = 1;
    boxenter.position.x = 7.15;
    boxenter.position.z = -4.05;

    var boxwin = BABYLON.MeshBuilder.CreateBox("boxwin",{height:0.5,width:0.8},scene);
    boxwin.position.y = 1;
    boxwin.position.x = -3.45;
    boxwin.position.z = -6.35;

    var boxaltl = BABYLON.MeshBuilder.CreateBox("boxaltl",{height:0.5,width:1.5},scene);
    boxaltl.position.y = 1;
    boxaltl.position.x = -2.15;
    boxaltl.position.z = -6.35;

    var boxspace = BABYLON.MeshBuilder.CreateBox("boxspace",{height:0.5,width:4.8},scene);
    boxspace.position.y = 1;
    boxspace.position.x = 1.15;
    boxspace.position.z = -6.35;

    var boxaltr = BABYLON.MeshBuilder.CreateBox("boxaltr",{height:0.5,width:1.5},scene);
    boxaltr.position.y = 1;
    boxaltr.position.x = 4.4;
    boxaltr.position.z = -6.35;

    var boxrwin = BABYLON.MeshBuilder.CreateBox("boxrwin",{height:0.5,width:0.8},scene);
    boxrwin.position.y = 1;
    boxrwin.position.x = 5.65;
    boxrwin.position.z = -6.35;

    var boxappskey = BABYLON.MeshBuilder.CreateBox("boxappskey",{height:0.5,width:0.8},scene);
    boxappskey.position.y = 1;
    boxappskey.position.x = 6.55;
    boxappskey.position.z = -6.35;

    var boxz = BABYLON.MeshBuilder.CreateBox("boxz",{height:0.5,width:0.8},scene);
    boxz.position.y = 1;
    boxz.position.x = -2.95;
    boxz.position.z = -5.2;

    var boxx = BABYLON.MeshBuilder.CreateBox("boxx",{height:0.5,width:0.8},scene);
    boxx.position.y = 1;
    boxx.position.x = -2.05;
    boxx.position.z = -5.2;

    var boxc = BABYLON.MeshBuilder.CreateBox("boxc",{height:0.5,width:0.8},scene);
    boxc.position.y = 1;
    boxc.position.x = -1.15;
    boxc.position.z = -5.2;

    var boxv = BABYLON.MeshBuilder.CreateBox("boxv",{height:0.5,width:0.8},scene);
    boxv.position.y = 1;
    boxv.position.x = -0.25;
    boxv.position.z = -5.2;

    var boxb = BABYLON.MeshBuilder.CreateBox("boxb",{height:0.5,width:0.8},scene);
    boxb.position.y = 1;
    boxb.position.x = 0.65;
    boxb.position.z = -5.2;

    var boxn = BABYLON.MeshBuilder.CreateBox("boxn",{height:0.5,width:0.8},scene);
    boxn.position.y = 1;
    boxn.position.x = 1.55;
    boxn.position.z = -5.2;

    var boxm = BABYLON.MeshBuilder.CreateBox("boxm",{height:0.5,width:0.8},scene);
    boxm.position.y = 1;
    boxm.position.x = 2.45;
    boxm.position.z = -5.2;

    var boxcomma = BABYLON.MeshBuilder.CreateBox("boxcomma",{height:0.5,width:0.8},scene);
    boxcomma.position.y = 1;
    boxcomma.position.x = 3.35;
    boxcomma.position.z = -5.2;

    var boxper = BABYLON.MeshBuilder.CreateBox("boxper",{height:0.5,width:0.8},scene);
    boxper.position.y = 1;
    boxper.position.x = 4.25;
    boxper.position.z = -5.2;

    var boxslash = BABYLON.MeshBuilder.CreateBox("boxper",{height:0.5,width:0.8},scene);
    boxslash.position.y = 1;
    boxslash.position.x = 5.15;
    boxslash.position.z = -5.2;

    var boxshiftr = BABYLON.MeshBuilder.CreateBox("boxshiftr",{height:0.5,width:2.5},scene);
    boxshiftr.position.y = 1;
    boxshiftr.position.x = 6.9;
    boxshiftr.position.z = -5.2;
    
    // Keyboard events
    var inputMap ={};
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    // Game/Render loop
    scene.onBeforeRenderObservable.add(()=>{
        if(inputMap["w"] || inputMap["ArrowUp"]){
            //sphere.position.z+=0.1
        } 
        if(inputMap["a"] || inputMap["ArrowLeft"]){
            //sphere.position.x-=0.1
        } 
        if(inputMap["s"] || inputMap["ArrowDown"]){
            //sphere.position.z-=0.1
        } 
        if(inputMap["d"] || inputMap["ArrowRight"]){
            //sphere.position.x+=0.1
        }

        if(inputMap["Escape"]){
            boxesc.position.y = 1.25
        }
        else {
            boxesc.position.y = 1
        }
        
        if(inputMap["Backtick"]){
            boxf1.position.y = 1.25
        }
        else {
            boxf1.position.y = 1
        }

        if(inputMap["Tab"]){
            boxtab.position.y = 1.25
        }
        else {
            boxtab.position.y = 1
        }

        if(inputMap["1"] || inputMap["!"]){
            box1.position.y = 1.25
        }
        else {
            box1.position.y = 1
        }

        if(inputMap["2"] || inputMap["@"]){
            box2.position.y = 1.25
        }
        else {
            box2.position.y = 1
        }

        if(inputMap["3"] || inputMap["#"]){
            box3.position.y = 1.25
        }
        else {
            box3.position.y = 1
        }

        if(inputMap["4"] || inputMap["$"]){
            box4.position.y = 1.25
        }
        else {
            box4.position.y = 1
        }

        if(inputMap["5"] || inputMap["%"]){
            box5.position.y = 1.25
        }
        else {
            box5.position.y = 1
        }

        if(inputMap["6"] || inputMap["^"]){
            box6.position.y = 1.25
        }
        else {
            box6.position.y = 1
        }

        if(inputMap["7"] || inputMap["&"]){
            box7.position.y = 1.25
        }
        else {
            box7.position.y = 1
        }

        if(inputMap["8"] || inputMap["*"]){
            box8.position.y = 1.25
        }
        else {
            box8.position.y = 1
        }

        if(inputMap["9"] || inputMap["("]){
            box9.position.y = 1.25
        }
        else {
            box9.position.y = 1
        }

        if(inputMap["0"] || inputMap[")"]){
            box0.position.y = 1.25
        }
        else {
            box0.position.y = 1
        }

        if(inputMap["q"] || inputMap["Q"]){
            boxq.position.y = 1.25
        }
        else {
            boxq.position.y = 1
        }

        if(inputMap["w"] || inputMap["W"]){
            boxw.position.y = 1.25
        }
        else {
            boxw.position.y = 1
        }

        if(inputMap["e"] || inputMap["E"]){
            boxe.position.y = 1.25
        }
        else {
            boxe.position.y = 1
        }

        if(inputMap["r"] || inputMap["R"]){
            boxr.position.y = 1.25
        }
        else {
            boxr.position.y = 1
        }
        
        if(inputMap["t"] || inputMap["T"]){
            boxt.position.y = 1.25
        }
        else {
            boxt.position.y = 1
        }

        if(inputMap["y"] || inputMap["Y"]){
            boxy.position.y = 1.25
        }
        else {
            boxy.position.y = 1
        }

        if(inputMap["u"] || inputMap["U"]){
            boxu.position.y = 1.25
        }
        else {
            boxu.position.y = 1
        }

        if(inputMap["i"] || inputMap["I"]){
            boxi.position.y = 1.25
        }
        else {
            boxi.position.y = 1
        }

        if(inputMap["o"] || inputMap["O"]){
            boxo.position.y = 1.25
        }
        else {
            boxo.position.y = 1
        }
        
        if(inputMap["p"] || inputMap["P"]){
            boxp.position.y = 1.25
        }
        else {
            boxp.position.y = 1
        }

        if(inputMap["CapsLock"]){
            boxcaps.position.y = 1.25
        }
        else {
            boxcaps.position.y = 1
        }

        if(inputMap["Shift"]){
            boxleftshift.position.y = 1.25
            boxshiftr.position.y = 1.25
        }
        else {
            boxleftshift.position.y = 1
            boxshiftr.position.y = 1
        }

        if(inputMap["Control"]){
            boxleftctrl.position.y = 1.25
        }
        else {
            boxleftctrl.position.y = 1
        }

        if(inputMap["a"] || inputMap["A"]){
            boxa.position.y = 1.25
        }
        else {
            boxa.position.y = 1
        }

        if(inputMap["s"] || inputMap["S"]){
            boxs.position.y = 1.25
        }
        else {
            boxs.position.y = 1
        }

        if(inputMap["d"] || inputMap["D"]){
            boxd.position.y = 1.25
        }
        else {
            boxd.position.y = 1
        }

        if(inputMap["f"] || inputMap["F"]){
            boxf.position.y = 1.25
        }
        else {
            boxf.position.y = 1
        }

        if(inputMap["g"] || inputMap["G"]){
            boxg.position.y = 1.25
        }
        else {
            boxg.position.y = 1
        }

        if(inputMap["h"] || inputMap["H"]){
            boxh.position.y = 1.25
        }
        else {
            boxh.position.y = 1
        }

        if(inputMap["j"] || inputMap["J"]){
            boxj.position.y = 1.25
        }
        else {
            boxj.position.y = 1
        }

        if(inputMap["k"] || inputMap["K"]){
            boxk.position.y = 1.25
        }
        else {
            boxk.position.y = 1
        }

        if(inputMap["l"] || inputMap["L"]){
            boxl.position.y = 1.25
        }
        else {
            boxl.position.y = 1
        }

        if(inputMap["z"] || inputMap["Z"]){
            boxz.position.y = 1.25
        }
        else {
            boxz.position.y = 1
        }

        if(inputMap["x"] || inputMap["X"]){
            boxx.position.y = 1.25
        }
        else {
            boxx.position.y = 1
        }

        if(inputMap["c"] || inputMap["C"]){
            boxc.position.y = 1.25
        }
        else {
            boxc.position.y = 1
        }

        if(inputMap["v"] || inputMap["V"]){
            boxv.position.y = 1.25
        }
        else {
            boxv.position.y = 1
        }

        if(inputMap["b"] || inputMap["B"]){
            boxb.position.y = 1.25
        }
        else {
            boxb.position.y = 1
        }

        if(inputMap["n"] || inputMap["N"]){
            boxn.position.y = 1.25
        }
        else {
            boxn.position.y = 1
        }

        if(inputMap["m"] || inputMap["M"]){
            boxm.position.y = 1.25
        }
        else {
            boxm.position.y = 1
        }

        if(inputMap[","] || inputMap["<"]){
            boxcomma.position.y = 1.25
        }
        else {
            boxcomma.position.y = 1
        }

        if(inputMap["."] || inputMap[">"]){
            boxper.position.y = 1.25
        }
        else {
            boxper.position.y = 1
        }

        if(inputMap["/"] || inputMap["?"]){
            boxslash.position.y = 1.25
        }
        else {
            boxslash.position.y = 1
        }

        if(inputMap["-"] || inputMap["_"]){
            boxmin.position.y = 1.25
        }
        else {
            boxmin.position.y = 1
        }

        if(inputMap["="] || inputMap["+"]){
            boxplus.position.y = 1.25
        }
        else {
            boxplus.position.y = 1
        }

        if(inputMap["["] || inputMap["{"]){
            boxbrakleft.position.y = 1.25
        }
        else {
            boxbrakleft.position.y = 1
        }

        if(inputMap["]"] || inputMap["}"]){
            boxbrakrt.position.y = 1.25
        }
        else {
            boxbrakrt.position.y = 1
        }

        if(inputMap["\\"] || inputMap["|"]){
            boxfwdslash.position.y = 1.25
        }
        else {
            boxfwdslash.position.y = 1
        }

        if(inputMap[";"] || inputMap[":"]){
            boxsemi.position.y = 1.25
        }
        else {
            boxsemi.position.y = 1
        }

        if(inputMap["'"] || inputMap["\""]){
            boxquote.position.y = 1.25
        }
        else {
            boxquote.position.y = 1
        }

        if(inputMap["Alt"]){
            boxaltl.position.y = 1.25
            boxaltr.position.y = 1.25
        }
        else {
            boxaltl.position.y = 1
            boxaltr.position.y = 1
        }

        if(inputMap[" "]){
            boxspace.position.y = 1.25
        }
        else {
            boxspace.position.y = 1
        }

        if(inputMap["Enter"]){
            boxenter.position.y = 1.25
        }
        else {
            boxenter.position.y = 1
        }
        

    })
    return scene;

};