/*
          LICENSE: DBAD (https://github.com/philsturgeon/dbad/blob/master/LICENSE.md)
		  
 Everyone is permitted to copy and distribute verbatim or modified copies of this license document.

 DON'T BE A DICK PUBLIC LICENSE TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  1. Do whatever you like with the original work, just don't be a dick.

     Being a dick includes - but is not limited to - the following instances:

      1a. Outright copyright infringement - Don't just copy the original work/works and change the name.
      1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.
      1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.

  2. If you become rich through modifications, related works/services, or supporting the original work, share the love. Only a dick would make loads off this work and not buy the original work's creator(s) a pint.

  3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back or submit a bug report.

  4. If you use code, calling it your own would make you a ROYAL dick. How to cite a repo. Alternatively, even just a comment giving attribution to where you found the code would be OK.

*/

// CREDITS TO MONOCHROMENINJA FOR THIS ENTIRE CODE.

import "https://cdn.jsdelivr.net/gh/nodeca/pako@master/dist/pako.js";
const k3 = {
    isValidZlib: function (i) {
        let t = atob(i)
                .split("")
                .map((i) => i.charCodeAt(0)),
            e = new Uint8Array(t);
        try {
            return pako.inflate(e), !0;
        } catch {
            return !1;
        }
    },
    isValidB84: function (i) {
        return [...i].every((i) => "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$%&+-.=?^{}/#_*':,@~|".includes(i));
    },
    isValidK3: function (i) {
        let t = i.split(";");
        return i.startsWith("K3") && ";:".includes(i[2]) && t.length >= 5 && this.isValidB84(t[1]) && this.isValidB84(t[2]) && this.isValidB84(t[3]) && t[3].length === 1 && this.isValidZlib(t[4]);
    },
};
window.k3 = k3;