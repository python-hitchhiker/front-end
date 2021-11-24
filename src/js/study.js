'use strict';

function example() {
    fetch(`${SERVER}/content/description/004`).then((response) => response.json()
    ).then(
        (json) => {
            let content = json.content;
            let code = json.code;
            document.querySelector("#content").innerHTML = marked.parse(content);
            // Apply content / code to the HTML area
        }
    )
};

function sampleCode() {
    fetch(`${SERVER}/content/code/005`).then((response) => response.json()
    ).then(
        (json) => {
            let content = json.content;
            return (json.content);
        }
    )
};

window.onload = function () {
    var el = document.getElementById("editor");
    var version = "# version: Python3\n\n";
    var codeAreaTip = "# please edit your code here:\n";
    var codeStart = "# code start\n\n";
    var codeEnd = "# code end\n\n";
    var codeTip = "'''\nThis function is the entry of this program and\nit must be return your answer of current question.\n'''\n";
    var code = "def solution():\n\tpass";
    var initValue = version + codeAreaTip + codeStart + codeEnd + codeTip + code;
    var myCodeMirror = CodeMirror.fromTextArea(el, {
        mode: "python", // Language mode
        theme: "xq-light", // theme
        keyMap: "sublime", // Fast key style
        lineNumbers: true, // set number
        smartIndent: true, // smart indent
        indentUnit: 4, // Smart indent in 4 spaces
        indentWithTabs: true, // Smart indent with tabs
        lineWrapping: true, //
        // Add line number display, folder and syntax detector to the slot
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        foldGutter: true, // Enable code folding in slots
        autofocus: true, // Autofocus
        matchBrackets: true, // Match end symbols, such as "],}"
        autoCloseBrackets: true, // Auto close symbol
        styleActiveLine: true, // Display the style of the selected row
    });
    // Set the initial text, which can also be configured in the fromTextArea
    myCodeMirror.setOption("value", initValue);
    // Editor key listening
    myCodeMirror.setSize("", "25rem");
    var test = document.getElementById("test");
    test.onclick = function() {
        var value = myCodeMirror.getValue();
        axios.post("http://localhost/api/runcode", {
            code: value
        }).then(function(res) {
            console.log(res);
        });
    };
};

