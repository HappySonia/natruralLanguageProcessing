function handleSubmit(event) {
    event.preventDefault()

    const inputText = document.getElementById('text').value
    if (Client.checkForURL(inputText) === true) {

        fetch('http://localhost:8081/postData', {
                method: 'POST',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: inputText })
            })
            .then(res => res.json())
            .then(function(res) {
                console.log(res);
                //document.getElementById('results').innerHTML = res.message
                document.getElementById('agreement').innerHTML = `Agreement: ${res.agreement}`
                document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`
                document.getElementById('irony').innerHTML = `Irony: ${res.irony}`
                document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`
            })
    } else {
        alert('Please enter a valid URL.')
    };
}


export { handleSubmit }