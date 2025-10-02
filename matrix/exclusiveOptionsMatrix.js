// Exclusive option in a Matrix question (change the number in const exclusiveOption)

$(function () {
  $('input:checkbox').click(function () {
    const qid = $(this).attr("id").split('_')[0];
    const i = $(this).attr("id").split('_')[3];
    const exclusiveOption = '8'; 

    if ($(this).attr('id') === `${qid}_A_${exclusiveOption}_${i}`) {
      // Se a opção exclusiva foi clicada, desmarca todas as outras
      $(`input[id$="_${i}"]:checkbox`).not(this).prop('checked', false);
    } else {
      // Se outra opção foi clicada, desmarca a exclusiva
      $(`#${qid}_A_${exclusiveOption}_${i}`).prop('checked', false);
    }
  });
});
