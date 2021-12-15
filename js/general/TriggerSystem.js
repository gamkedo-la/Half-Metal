function TriggerClass(
  activator = {},
  activator_property = "",
  activator_value = false,
  target = {},
  target_property = "",
  target_value = false
) {
  // The switch to be activated
  this.activator = activator;
  this.activator_property = activator_property;
  this.activator_value = activator_value;

  // The Game Object affected by the switch
  this.target = target;
  this.target_property = target_property;
  this.target_value = target_value;

  // Check if the switch has reached the desired state. If so, activate the target object.
  this.update = function () {
    if (this.activator[this.activator_property] === this.activator_value) {
      this.target[this.target_property] = this.target_value;
    }
  };
}
