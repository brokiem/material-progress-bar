const MProgress = {};

MProgress.show = function() {
    document.getElementById('mprogress').classList.remove('mprogress-hidden');
    document.getElementById('mprogress').classList.add('mprogress-visible');
}

MProgress.hide = function() {
    document.getElementById('mprogress').classList.remove('mprogress-visible');
    document.getElementById('mprogress').classList.add('mprogress-hidden');
}
