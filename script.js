function dark_toggle() {
    var el1 = document.getElementById("dark-reader");
    if(el1.disabled) {
        el1.disabled = false;
		var e = document.getElementById("dark-mode-ball");
		e.style.transform = "translateX(24px)";
    } else {
        el1.disabled = true;
		var e = document.getElementById("dark-mode-ball");
		e.style.transform = "translateX(-1px)";
    }
}