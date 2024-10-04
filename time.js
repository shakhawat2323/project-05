function timeData(time){
    const hour = parseInt(time / 3600);
    let remening = parseInt(time % 3600)
    const minit = parseInt(remening / 60);
    remening = remening %60;

    return `${hour} hour ${minit} minit ${remening} senend `
}

const resulet = timeData(3670);
console.log(resulet)