export const formatMovieTitle = (title)=>{
    return title.length > 20? title.substring(0, 17).concat(" ..."): title;
}