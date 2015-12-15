// Node.js tests for code-prettify.

var jsdom = require('jsdom');
var assert = require('assert');
var w;
var goldens;

describe('prettify_test.html', function () {
	
  before(function(done) {
	jsdom.env("tests/prettify_test.html",
			  ["src/prettify.js",
			   "src/lang-css.js",
			   "src/lang-erlang.js",
			   "src/lang-go.js",
			   "src/lang-hs.js",
			   "src/lang-lisp.js",
			   "src/lang-lua.js",
			   "src/lang-ml.js",
			   "src/lang-proto.js",
			   "src/lang-rust.js",
			   "src/lang-scala.js",
			   "src/lang-sql.js",
			   "src/lang-wiki.js",
			   "src/lang-vhdl.js",
			   "src/lang-vb.js",
			   "src/lang-yaml.js"],
			  { features : {
		        FetchExternalResources   : ['script'],
		        ProcessExternalResources : ['script'],
		        MutationEvents           : '2.0',
		        QuerySelector            : false
		      },
	          done : function (error, window) {
		       w = window;
		       goldens = window.goldens;
	           window.prettyPrint("", window.document);
	           done();
	          }
	});	
  });
  
  it('doStuff()', function() {
	  for (var lang in goldens) {
		    var container = w.document.getElementById(lang);
		    // Convert abbreviations that start with `.
		    var golden = goldens[lang].replace(/`([A-Z]{3})/g, function (_, lbl) {
		        return (lbl == 'END'
		            ? '<\/span>'
		            : '<span class="' + lbl.toLowerCase() + '">');
		      })
		      // Line numbers
		      .replace(/`#(?![0-9])/, '<li class="L0">')
		      .replace(/`#([0-9])/g, '</li><li class="L$1">');
		    var actual = container.innerHTML;
            assert.equal(golden, actual);
	  }
  });
});