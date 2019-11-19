$(() => {
    $('#decodedScreen').hide();
    hideErrors();

    $('#drunk-form').submit((event) => {
        event.preventDefault();
        hideErrors();

        let password = $('input').first().val().toLowerCase();

        let correctChars = password.includes('r') && password.includes('e') && password.includes('d')
            && password.includes('h')  && password.includes('g'); 

        // If you are reading this code, just know that you are cheating and I'm not mad, just disappointed...
        if (password === 'redherring' || password === 'red herring') {
            $('#errorMessage').text('Correct!');
            $('#initialScreen').hide();
            $('#decodedScreen').show(1000);
        } else if (correctChars) {
            setErrorMessage('Hmm, you have the letters right but out of order!')
        } else if (submittedJournalEntry(password)) {
            setErrorMessage('I see someone is just wildly guessing journal words, incorrect!')
        }
        else {
            setErrorMessage('Incorrect Password!');
        }
    });

    function hideErrors() {
       setErrorMessage('');
    }

    function setErrorMessage(text) {
        if (text) {
            text += ' Need a hint? Remember you can send us a text for a clue!'
        }
        $('#errorMessage').text(text);
    }

    function submittedJournalEntry(text) {
        let journalEntries = ['magical', 'brave', 'mood', 'confident', 'on point', 'super star', 'brilliant'];

        for (let entry of journalEntries) {
            if (text == entry) {
                return true;
            }
        }
        return false;
    }
});