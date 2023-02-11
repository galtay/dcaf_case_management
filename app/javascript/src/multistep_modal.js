const activateMultiModal = () => {
  // select all elements with id ending with "modal"
  $('[id$=modal]').modalSteps()

};

$(document).on('turbo:load', activateMultiModal);
