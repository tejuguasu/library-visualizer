export const makePlain = (text) => {
    return text
        .replace(/[áàãâä]/gi,"a")
        .replace(/[éè¨ê]/gi,"e")
        .replace(/[íìïî]/gi,"i")
        .replace(/[óòöôõ]/gi,"o")
        .replace(/[úùüû]/gi, "u")
        .replace(/[ç]/gi, "c")
        .replace(/[ñ]/gi, "n")
        .replace(/[^a-zA-Z0-9]/g," ")
        .toLowerCase();
}