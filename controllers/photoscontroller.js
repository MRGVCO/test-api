exports.filterPhoto = (source, destination) => {
    if (source.length > 0 && destination.length > 0) {
        const findphoto = destination.filter(p => source.includes(p));
        return findphoto.length > 0;
    } else if (source.length > 0 && destination.length === 0) {
        return false;
    }
    return true
}