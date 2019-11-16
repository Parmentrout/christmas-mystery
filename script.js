$(() => {
    console.log( "ready!" );
    $('#decodedScreen').hide();
    hideErrors();

    $('#drunk-form').submit((event) => {
        event.preventDefault();
        hideErrors();

        let password = $('input').first().val().toLowerCase();

        let correctChars = password.includes('r') && password.includes('e') && password.includes('d')
            && password.includes('h'); 
        // If you are reading this code, just know that you are cheating and I'm not mad, just disappointed...
        if (password === 'redherring' || password === 'red herring') {
            $('#initialScreen').hide();
            $('#decodedScreen').show(1000);
        } else if (correctChars) {
            $('#badLetters').show();
        }
        else {
            $('#badpassword').show();
        }
    });

    function hideErrors() {
        $('#badpassword').hide();
        $('#badLetters').hide();
    }
});