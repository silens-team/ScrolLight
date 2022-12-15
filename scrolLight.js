let observer = new MutationObserver(callback);

observer.observe(node, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
});

function inViewCheck() {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}