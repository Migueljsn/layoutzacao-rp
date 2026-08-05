(() => {
  const appendChild = Node.prototype.appendChild;
  const legacyPlayerSource =
    /(?:scripts\.converteai\.net|cdn\.atomicatmedia\.net\/cdn\/s2\.js)/i;

  Node.prototype.appendChild = function appendRioPiranhasMedia(node) {
    if (
      node instanceof HTMLScriptElement &&
      legacyPlayerSource.test(node.src)
    ) {
      return node;
    }

    return appendChild.call(this, node);
  };
})();
