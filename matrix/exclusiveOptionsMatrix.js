// Exclusive option in a Matrix question (change the number in const exclusiveOption)

$(function () {
  $('input:checkbox').click(function () {
    const qid = $(this).attr("id").split('_')[0];
    const i = $(this).attr("id").split('_')[3];
    const exclusiveOption = '8'; 

    if ($(this).attr('id') === `${qid}_A_${exclusiveOption}_${i}`) {
      // If the option is selected, it will unselect all the others
      $(`input[id$="_${i}"]:checkbox`).not(this).prop('checked', false);
    } else {
      // If any other option is selected, it will unselect the exclusive option
      $(`#${qid}_A_${exclusiveOption}_${i}`).prop('checked', false);
    }
  });
});
