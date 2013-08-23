Conductor.card({
  activate: function () {
    this.consumers.height.autoUpdate = false;

    var bigNode = document.createElement("div");

    bigNode.style.width = "600px";
    bigNode.style.height = "700px";

    this.element.style.padding = "1px";
    this.element.style.margin = "2px";
    this.element.style.border = "solid transparent 4px";
    this.element.appendChild(bigNode);

    this.consumers.height.update();
  }
});
