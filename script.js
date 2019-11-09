$(() => {
    console.log( "ready!" );
    //$('#decodedScreen').hide();

    $('#drunk-form').submit((event) => {
        event.preventDefault();

        let password = $('input').first().val();

        // If you are reading this code, just know that you are cheating and I'm not mad, just disappointed...
        if (password === 'redherring') {
            $('#initialScreen').hide();
            $('#decodedScreen').show(1000);
        }
    });
});