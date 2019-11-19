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
           shuffleErrorMessage();
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

    function shuffleErrorMessage() {
        let random = Math.random();
        let message = '';
        if (random < 0.25) {
            message = 'Incorrect!  Keep Trying.'
        } else if (random >= 0.25 && random < 0.5) {
            message = 'Hmm, sorry that is incorrect.'
        } else if (random >= 0.5 && random < 0.75) {
            message = 'Nope, not the right password!'
        } else {
            message = 'Wrong!'
        }

        setErrorMessage(message);
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