function updateOrAddHideClass(className) {
    // Check if a style tag for this class already exists
    const existingStyleTag = Array.from(document.head.getElementsByTagName('style')).find(style => style.innerHTML.includes(`.${className} {`));

    if (existingStyleTag) {
        // If the style tag exists, update its content to ensure display is set to none
        existingStyleTag.innerHTML = existingStyleTag.innerHTML.replace(new RegExp(`\\.${className} \\{[^}]*display: [^;]+;?`, 'g'), `.${className} { display: none;`);
    } else {
        // If no existing style tag, create a new one
        const style = document.createElement('style');
        style.innerHTML = `.${className} { display: none; }`;
        document.head.appendChild(style);
    }
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        updateOrAddHideClass('elementClass');
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        updateOrAddHideClass('elementClass');
    }
});

*/