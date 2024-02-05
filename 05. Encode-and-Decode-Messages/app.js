function encodeAndDecodeMessages() {
    const [messageToEncodeRef, messageToDecodeRef] = document.querySelectorAll('textarea');
    const [encodeBtnRef, decodeBtnRef] = document.querySelectorAll('button');
    
    encodeBtnRef.addEventListener('click', encodeFunc);
    decodeBtnRef.addEventListener('click', decodeFunc);

    function encodeFunc(event) {
        let text = messageToEncodeRef.value;
        messageToEncodeRef.value = '';
        let result = '';

        for (let word of text) {
            let asciiNum = word.charCodeAt() + 1;
            let changedWord = String.fromCharCode(asciiNum);
            result += changedWord;
        }
        messageToDecodeRef.value = result;
    }

    function decodeFunc(event) {
        let text = messageToDecodeRef.value;
        let result = '';

        for (let word of text) {
            let asciiNum = word.charCodeAt() - 1;
            let changedWord = String.fromCharCode(asciiNum);
            result += changedWord;
        }
        messageToDecodeRef.value = result;
    }
}