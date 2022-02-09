function Options() {
  let input = document.createElement("input");
  input.type = "range";
  input.id = "audio volume slider";
  input.name = "audio volume slider";
  input.min = "0";
  input.max = "100";
  input.value = "0";
  input.style.position = "absolute";
  input.style.zIndex = "1";
  input.style.left = "50%";
  input.style.top = "20%";
  input.style.display = "contents";
  document.body.appendChild(input);
  input = "audio volume slider";
  const options_config = {
    buttons: [
      new ButtonClass(...[, , , ,], "BACK", ...[, ,], () => {
        menu_stack.pop();
      }),
    ],
    name: "Options",
    button_start_x: 87,
    button_start_y: 125,
    show_name: true,
  };

  MenuClass.call(this, options_config);
}
