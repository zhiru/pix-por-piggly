(()=>{"use strict";window.pixCopyText=function(e,o){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){window.pixCopied(o)})).catch((function(){window.pixCopyFallback(e,o)})):window.pixCopyFallback(e,o)},window.pixCopyFallback=function(e,o){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n),n.select(),n.setSelectionRange(0,99999);var i=document.execCommand("copy");document.body.removeChild(n),i&&window.pixCopied(o),null!==window.getSelection()&&void 0!==window.getSelection()&&window.getSelection().removeAllRanges()},window.pixCopied=function(e){var o=document.getElementById(e),n=o.innerHTML;o.innerHTML="Copiado",setTimeout((function(){o.innerHTML=n}),1500)}})();