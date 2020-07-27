function custom() {


	// Capitalize titles

	const _0x12b1=['css','capitalize','text-transform','querySelectorAll'];(function(_0x30e6fc,_0x12b136){const _0x46c740=function(_0x2905a4){while(--_0x2905a4){_0x30e6fc['push'](_0x30e6fc['shift']());}};_0x46c740(++_0x12b136);}(_0x12b1,0x131));const _0x46c7=function(_0x30e6fc,_0x12b136){_0x30e6fc=_0x30e6fc-0x0;let _0x46c740=_0x12b1[_0x30e6fc];return _0x46c740;};let helements=document[_0x46c7('0x2')]('h1,\x20h2,\x20h3,\x20h4,\x20h5,\x20h6');helements['forEach'](capitalize);function capitalize(_0x33f6fa){$(_0x33f6fa)[_0x46c7('0x3')](_0x46c7('0x1'),_0x46c7('0x0'));}


	// Fix Featured and Releated product sizes sections

	let bphoto = document.getElementsByClassName("box-photo");
	setTimeout(() => {
	    
	  [].forEach.call(bphoto, function(el) {
	    el.firstElementChild.style.height = "200px";
	}); 
	}, 
	0);

};