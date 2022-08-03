console.log('first')

const seperate = (e) =>{

    e.preventDefault()

    document.getElementById('textBefore').innerHTML = ``

    document.getElementById('textAfter').innerHTML =  ``

    let senBefore
    let senAfter

    

    const radio = document.forms[0].radioBtn.value
    console.log(radio)

    const sentence = document.forms[0].inSentence.value
    console.log(sentence)
    
    const seperator =  document.forms[0].inSeperator.value
    console.log(seperator.length)

    const searchResult = sentence.search(seperator)
    console.log(searchResult)

    console.log(searchResult + seperator.length)

    if( searchResult === -1)
    {

        document.getElementById('textBefore').innerHTML = `Das Zeichen konnte leider nicht gefunden werden`

        document.getElementById('textAfter').innerHTML = sentence

    }else {

        switch(radio){

            case 'before':
                // ausgabe kommt hier rein
                
                senBefore = sentence.slice(0,searchResult)
                document.getElementById('textBefore').innerHTML = senBefore

                senAfter = sentence.slice(searchResult)
                document.getElementById('textAfter').innerHTML = senAfter

                console.log(senBefore)
                console.log(senAfter)
                
                
                break
            case 'after':
                // oder hier rein

                senBefore = sentence.slice(0,searchResult + seperator.length)
                document.getElementById('textBefore').innerHTML = senBefore

                senAfter = sentence.slice(searchResult + seperator.length)
                document.getElementById('textAfter').innerHTML = senAfter

                break

            default:
                console.log('Hier rechnet man mit der Dummheit der Menschen/User')
        }
    }

    
}