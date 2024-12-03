var time = 0;
var isPlaying = false;

function ToggleBB() {
  if (document.getElementById("BB").paused) {
    document.getElementById("BB").play();
  } else {
    document.getElementById("BB").pause();
  }
}
function TCDSongs() {
  document.getElementById("weDontCare").classList.toggle("hidden");
  document.getElementById("slowJamz").classList.toggle("hidden");
  document.getElementById("throughTheWire").classList.toggle("hidden");
}

function LRSongs() {
  document.getElementById("touchTheSky").classList.toggle("hidden");
  document.getElementById("goldDigger").classList.toggle("hidden");
  document.getElementById("heyMama").classList.toggle("hidden");
}

function GradSongs() {
  document.getElementById("champion").classList.toggle("hidden");
  document.getElementById("iWonder").classList.toggle("hidden");
  document.getElementById("homecoming").classList.toggle("hidden");
}

function EOESongs() {
  document.getElementById("heartless").classList.toggle("hidden");
  document.getElementById("paranoid").classList.toggle("hidden");
  document.getElementById("streetLights").classList.toggle("hidden");
}

function MBDTFSongs() {
  document.getElementById("gorgeous").classList.toggle("hidden");
  document.getElementById("devilInANewDress").classList.toggle("hidden");
  document.getElementById("runaway").classList.toggle("hidden");
}

function WTTSongs() {
  document.getElementById("noChurchInTheWild").classList.toggle("hidden");
  document.getElementById("niasInParis").classList.toggle("hidden");
  document.getElementById("otis").classList.toggle("hidden");
}

function YeeSongs() {
  document.getElementById("onSight").classList.toggle("hidden");
  document.getElementById("blackSkinhead").classList.toggle("hidden");
  document.getElementById("newSlaves").classList.toggle("hidden");
}

function TLOPSongs() {
  document.getElementById("fatherStretchMyHandsPt1").classList.toggle("hidden");
  document.getElementById("wolve").classList.toggle("hidden");
  document.getElementById("noMorePartiesInLa").classList.toggle("hidden");
}

function YeSongs() {
  document.getElementById("yike").classList.toggle("hidden");
  document.getElementById("ghostTown").classList.toggle("hidden");
  document.getElementById("violentCrimes").classList.toggle("hidden");
}

function JIKSongs() {
  document.getElementById("selah").classList.toggle("hidden");
  document.getElementById("followGod").classList.toggle("hidden");
  document.getElementById("godIs").classList.toggle("hidden");
}

function DondaSongs() {
  document.getElementById("offTheGrid").classList.toggle("hidden");
  document.getElementById("praiseGod").classList.toggle("hidden");
  document.getElementById("heavenAndHell").classList.toggle("hidden");
}

function toggleWDC() {
  isPlaying
    ? document.getElementById("WDC").pause()
    : document.getElementById("WDC").play();
}

document.getElementById("WDC").onplaying = function () {
  isPlaying = true;
};
document.getElementById("WDC").onpause = function () {
  isPlaying = false;
};
function toggleSlowJamz() {
  isPlaying
    ? document.getElementById("SJ").pause()
    : document.getElementById("SJ").play();
}

document.getElementById("SJ").onplaying = function () {
  isPlaying = true;
};
document.getElementById("SJ").onpause = function () {
  isPlaying = false;
};
function toggleTTW() {
  isPlaying
    ? document.getElementById("TTW").pause()
    : document.getElementById("TTW").play();
}

document.getElementById("TTW").onplaying = function () {
  isPlaying = true;
};
document.getElementById("TTW").onpause = function () {
  isPlaying = false;
};
function toggleTTS() {
  isPlaying
    ? document.getElementById("TTS").pause()
    : document.getElementById("TTS").play();
}

document.getElementById("TTS").onplaying = function () {
  isPlaying = true;
};
document.getElementById("TTS").onpause = function () {
  isPlaying = false;
};
function toggleGD() {
  isPlaying
    ? document.getElementById("GD").pause()
    : document.getElementById("GD").play();
}

document.getElementById("GD").onplaying = function () {
  isPlaying = true;
};
document.getElementById("GD").onpause = function () {
  isPlaying = false;
};
function toggleHM() {
  isPlaying
    ? document.getElementById("HM").pause()
    : document.getElementById("HM").play();
}

document.getElementById("HM").onplaying = function () {
  isPlaying = true;
};
document.getElementById("HM").onpause = function () {
  isPlaying = false;
};
function toggleChamp() {
  isPlaying
    ? document.getElementById("Champ").pause()
    : document.getElementById("Champ").play();
}

document.getElementById("Champ").onplaying = function () {
  isPlaying = true;
};
document.getElementById("Champ").onpause = function () {
  isPlaying = false;
};
function toggleIW() {
  isPlaying
    ? document.getElementById("IW").pause()
    : document.getElementById("IW").play();
}

document.getElementById("IW").onplaying = function () {
  isPlaying = true;
};
document.getElementById("IW").onpause = function () {
  isPlaying = false;
};
function toggleHC() {
  isPlaying
    ? document.getElementById("HC").pause()
    : document.getElementById("HC").play();
}

document.getElementById("HC").onplaying = function () {
  isPlaying = true;
};
document.getElementById("HC").onpause = function () {
  isPlaying = false;
};
function toggleHeart() {
  isPlaying
    ? document.getElementById("Heart").pause()
    : document.getElementById("Heart").play();
}

document.getElementById("Heart").onplaying = function () {
  isPlaying = true;
};
document.getElementById("Heart").onpause = function () {
  isPlaying = false;
};

function togglePara() {
  isPlaying
    ? document.getElementById("Para").pause()
    : document.getElementById("Para").play();
}

document.getElementById("Para").onplaying = function () {
  isPlaying = true;
};
document.getElementById("Para").onpause = function () {
  isPlaying = false;
};

function toggleSL() {
  isPlaying
    ? document.getElementById("SL").pause()
    : document.getElementById("SL").play();
}

document.getElementById("SL").onplaying = function () {
  isPlaying = true;
};
document.getElementById("SL").onpause = function () {
  isPlaying = false;
};
function toggleGor() {
  isPlaying
    ? document.getElementById("gor").pause()
    : document.getElementById("gor").play();
}

document.getElementById("gor").onplaying = function () {
  isPlaying = true;
};
document.getElementById("gor").onpause = function () {
  isPlaying = false;
};
function toggleDIAND() {
  isPlaying
    ? document.getElementById("DIAND").pause()
    : document.getElementById("DIAND").play();
}

document.getElementById("DIAND").onplaying = function () {
  isPlaying = true;
};
document.getElementById("DIAND").onpause = function () {
  isPlaying = false;
};
function toggleRun() {
  isPlaying
    ? document.getElementById("Run").pause()
    : document.getElementById("Run").play();
}

document.getElementById("Run").onplaying = function () {
  isPlaying = true;
};
document.getElementById("Run").onpause = function () {
  isPlaying = false;
};
function toggleNCITW() {
  isPlaying
    ? document.getElementById("NCITW").pause()
    : document.getElementById("NCITW").play();
}

document.getElementById("NCITW").onplaying = function () {
  isPlaying = true;
};
document.getElementById("NCITW").onpause = function () {
  isPlaying = false;
};
function toggleNIP() {
  isPlaying
    ? document.getElementById("NIP").pause()
    : document.getElementById("NIP").play();
}

document.getElementById("NIP").onplaying = function () {
  isPlaying = true;
};
document.getElementById("NIP").onpause = function () {
  isPlaying = false;
};
function toggleOtis() {
  isPlaying
    ? document.getElementById("otis").pause()
    : document.getElementById("otis").play();
}

document.getElementById("otis").onplaying = function () {
  isPlaying = true;
};
document.getElementById("otis").onpause = function () {
  isPlaying = false;
};
function toggleOS() {
  isPlaying
    ? document.getElementById("OS").pause()
    : document.getElementById("OS").play();
}

document.getElementById("OS").onplaying = function () {
  isPlaying = true;
};
document.getElementById("OS").onpause = function () {
  isPlaying = false;
};
function toggleBS() {
  isPlaying
    ? document.getElementById("BS").pause()
    : document.getElementById("BS").play();
}

document.getElementById("BS").onplaying = function () {
  isPlaying = true;
};
document.getElementById("BS").onpause = function () {
  isPlaying = false;
};
function toggleNS() {
  isPlaying
    ? document.getElementById("NS").pause()
    : document.getElementById("NS").play();
}

document.getElementById("NS").onplaying = function () {
  isPlaying = true;
};
document.getElementById("NS").onpause = function () {
  isPlaying = false;
};
function toggleFSMH() {
  isPlaying
    ? document.getElementById("FSMH").pause()
    : document.getElementById("FSMH").play();
}

document.getElementById("FSMH").onplaying = function () {
  isPlaying = true;
};
document.getElementById("FSMH").onpause = function () {
  isPlaying = false;
};
function toggleWolves() {
  isPlaying
    ? document.getElementById("Wolves").pause()
    : document.getElementById("Wolves").play();
}

document.getElementById("Wolves").onplaying = function () {
  isPlaying = true;
};
document.getElementById("Wolves").onpause = function () {
  isPlaying = false;
};
function toggleNMPIL() {
  isPlaying
    ? document.getElementById("NMPIL").pause()
    : document.getElementById("NMPIL").play();
}

document.getElementById("NMPIL").onplaying = function () {
  isPlaying = true;
};
document.getElementById("NMPIL").onpause = function () {
  isPlaying = false;
};
function toggleYikes() {
  isPlaying
    ? document.getElementById("Yikes").pause()
    : document.getElementById("Yikes").play();
}

document.getElementById("Yikes").onplaying = function () {
  isPlaying = true;
};
document.getElementById("Yikes").onpause = function () {
  isPlaying = false;
};
function toggleGT() {
  isPlaying
    ? document.getElementById("GT").pause()
    : document.getElementById("GT").play();
}

document.getElementById("GT").onplaying = function () {
  isPlaying = true;
};
document.getElementById("GT").onpause = function () {
  isPlaying = false;
};
function toggleVC() {
  isPlaying
    ? document.getElementById("VC").pause()
    : document.getElementById("VC").play();
}

document.getElementById("VC").onplaying = function () {
  isPlaying = true;
};
document.getElementById("VC").onpause = function () {
  isPlaying = false;
};
function toggleSE() {
  isPlaying
    ? document.getElementById("SE").pause()
    : document.getElementById("SE").play();
}

document.getElementById("SE").onplaying = function () {
  isPlaying = true;
};
document.getElementById("SE").onpause = function () {
  isPlaying = false;
};
function toggleFG() {
  isPlaying
    ? document.getElementById("FG").pause()
    : document.getElementById("FG").play();
}

document.getElementById("FG").onplaying = function () {
  isPlaying = true;
};
document.getElementById("FG").onpause = function () {
  isPlaying = false;
};
function toggleGI() {
  isPlaying
    ? document.getElementById("GI").pause()
    : document.getElementById("GI").play();
}

document.getElementById("GI").onplaying = function () {
  isPlaying = true;
};
document.getElementById("GI").onpause = function () {
  isPlaying = false;
};
function toggleOTG() {
  isPlaying
    ? document.getElementById("OTG").pause()
    : document.getElementById("OTG").play();
}

document.getElementById("OTG").onplaying = function () {
  isPlaying = true;
};
document.getElementById("OTG").onpause = function () {
  isPlaying = false;
};
function togglePG() {
  isPlaying
    ? document.getElementById("PG").pause()
    : document.getElementById("PG").play();
}

document.getElementById("PG").onplaying = function () {
  isPlaying = true;
};
document.getElementById("PG").onpause = function () {
  isPlaying = false;
};
function toggleHAH() {
  isPlaying
    ? document.getElementById("HAH").pause()
    : document.getElementById("HAH").play();
}

document.getElementById("HAH").onplaying = function () {
  isPlaying = true;
};
document.getElementById("HAH").onpause = function () {
  isPlaying = false;
};

function hiddenroom() {
  window.location.href = "hidden.html";
}
function toggleMB() {
  if (document.getElementById("MB").paused) {
    document.getElementById("MB").play();
  } else {
    document.getElementById("MB").pause();
  }
}
function toggleFB() {
  if (document.getElementById("FB").paused) {
    document.getElementById("FB").play();
  } else {
    document.getElementById("FB").pause();
  }
}
function toggleFG() {
  if (document.getElementById("FG").paused) {
    document.getElementById("FG").play();
  } else {
    document.getElementById("FG").pause();
  }
}
function toggleSWABF() {
  if (document.getElementById("SWABF").paused) {
    document.getElementById("SWABF").play();
  } else {
    document.getElementById("SWABF").pause();
  }
}
function toggleGS() {
  if (document.getElementById("GS").paused) {
    document.getElementById("GS").play();
  } else {
    document.getElementById("GS").pause();
  }
}
function backHome() {
  window.location.href = "index.html";
}
function toggleNSMA() {
  if (document.getElementById("NSMA").paused) {
    document.getElementById("NSMA").play();
  } else {
    document.getElementById("NSMA").pause();
  }
}
function toggleHMD() {
  if (document.getElementById("HMD").paused) {
    document.getElementById("HMD").play();
  } else {
    document.getElementById("HMD").pause();
  }
}
