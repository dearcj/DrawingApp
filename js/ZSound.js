var ZSound = {
    available: false,
    playSounds: true,
    playMusic: true,
    loaded : false
};

ZSound.Init = function(manifest, cb) {

    var audioPath = "./wp-content/themes/mmoma/Assets/Sounds/";

    /*if (!MOBILE) {
        createjs.FlashAudioPlugin.swfPath = "res/sndnew/"; // Initialize the base path from this document to the Flash Plugin

        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);

        createjs.Sound.alternateExtensions = ["mp3"];

        ZSound.available = createjs.Sound.initializeDefaultPlugins();
    } else
    {*/


        createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);

        createjs.Sound.alternateExtensions = ["mp3"];

        ZSound.available = createjs.Sound.initializeDefaultPlugins();
        //createjs.Sound.initializeDefaultPlugins();
        //    createjs.Sound.registerPlugins([createjs.CocoonJSAudioPlugin]);
        //    createjs.Sound.alternateExtensions = ["mp3"];
    //}

    //remove MOBILE here!!!!!!!!!
    if (!ZSound.available) {
        console.log("ZSound loaded without plugins [NO SOUND]");
        ZSound.loaded = true;
        if (ZSound.soundLoadedFunction)ZSound.soundLoadedFunction();
        return;
    }


    ZSound.loaded = 0;
    ZSound.total = manifest.length;
    var handleLoad = function(x)
    {
        ZSound.loaded++;
        console.log(x.src);
        console.log("ZSound loaded " + ZSound.loaded.toString() + " / " + manifest.length.toString());
        if ( ZSound.loaded == manifest.length) {
            if (ZSound.soundLoadedFunction) {
                ZSound.loaded = true;
                ZSound.soundLoadedFunction();
            }

        }
    }
    createjs.Sound.on("fileload", handleLoad); // call handleLoad when each sound loads

    createjs.Sound.registerSounds(manifest, audioPath);
}

ZSound.PlayMusic = function(snd) {
    if (!ZSound.playMusic) return;


        if (ZSound.loaded)
        ZSound.PlayMusicInner(snd);
    else soundLoadedFunction = function () {
        ZSound.PlayMusicInner(snd);
        ZSound.loaded = true;
    }
};

ZSound.UnMute = function () {
    if (ZSound.available) return;
    ZSound.available = true;
    ZSound.playSounds = true;

   // createjs.Sound.setMute(false);

    /*if (this.musicInstance)
     {
     createjs.Sound.play(this.musicInstance);
     }*/
}

ZSound.Mute = function () {
    ZSound.available = false;
    ZSound.playSounds = false;
  //  createjs.Sound.setMute(true);
    /*if (this.musicInstance)
     {
     createjs.Sound.stop(this.musicInstance);
     }*/
}


ZSound.stopMusic = function() {
    if (ZSound.musicInstance)
    {
        ZSound.musicInstanceName = null;
        createjs.Sound.stop(ZSound.musicInstance);
        ZSound.musicInstance = null;
    }
}

ZSound.PlayMusicInner = function(snd)
{

    if (ZSound.musicInstanceName == snd && ZSound.musicInstance) return;
    if (ZSound.musicInstance)
    {
        createjs.Sound.stop(ZSound.musicInstance);
    }

    try {
        ZSound.musicInstanceName = snd;
        ZSound.musicInstance = createjs.Sound.play(snd, {interrupt: createjs.Sound.INTERRUPT_NONE, loop:999999});
    } catch (e) {}
}


ZSound.Play = function(snd) {
    if (! ZSound.playSounds) return;
     if (!ZSound.available) return;
    try {
        createjs.Sound.play(snd, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    } catch (e) {}
};

/*var ZSound = {
    available: false,
    loaded : false
};


ZSound.Init = function(manifest) {
    this.available = createjs.Sound.initializeDefaultPlugins();
    if (!this.available) return;

    var audioPath = "res/sndnew/";
    createjs.Sound.alternateExtensions = ["mp3"];
    ZSound.loaded = 0;
    ZSound.total = manifest.length;
    var handleLoad = function()
    {
        ZSound.loaded++;
        if ( ZSound.loaded == manifest.length) {
            if (ZSound.soundLoadedFunction) ZSound.soundLoadedFunction();
            this.loaded = true;
        }
    }
    createjs.Sound.addEventListener("fileload", handleLoad); // call handleLoad when each sound loads

    createjs.Sound.registerManifest(manifest, "res/sndnew/");

}

ZSound.PlayMusic = function(snd) {
    if (ZSound.loaded)
        ZSound.PlayMusicInner(snd);
    else soundLoadedFunction = function () {
        ZSound.PlayMusicInner(snd);
        ZSound.loaded = true;
    }
};

ZSound.UnMute = function () {
    if (this.available) return;
    this.available = true;

    createjs.Sound.setMute(false);


}

ZSound.Mute = function () {
    this.available = false;

    createjs.Sound.setMute(true);

}


ZSound.PlayMusicInner = function(snd)
{

    if (this.musicInstanceName == snd && this.musicInstance) return;
    if (this.musicInstance)
    {
     createjs.Sound.stop(this.musicInstance);
    }

    try {
        this.musicInstanceName = snd;
        this.musicInstance = createjs.Sound.play(snd, {interrupt: createjs.Sound.INTERRUPT_NONE, loop:999999});
    } catch (e) {}
}


ZSound.Play = function(snd) {
    if (!this.available) return;
    try {
        createjs.Sound.play(snd, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
    } catch (e) {}
};

*/