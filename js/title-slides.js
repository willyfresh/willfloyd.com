(function ($) {

    // set the height

    let cardFaces = $('.card > *');

    cardFaces.each(function () {
        $(this).css('min-height', self.innerHeight)
    });

    // title slides

    const delay = 4000;
    let int = 0;
    let cardTitles = $('.card__title li');

    cardTitles.hide();
    cardTitles.first().show();

    var intervalId = setInterval(function () {
        cardTitles.eq(int).slideToggle();
        int++
        if (int === cardTitles.length) {
            int = 0;
        }
        cardTitles.eq(int).slideToggle();
    }, delay);

})(jQuery);