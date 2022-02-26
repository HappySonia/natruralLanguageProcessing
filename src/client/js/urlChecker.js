function checkForURL(URL) {
    const str = URL;
    const Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
    const objExp = new RegExp(Expression);
    if (objExp.test(str) === true) {
        return true;
    } else {
        return false;
    }
}

export { checkForURL }