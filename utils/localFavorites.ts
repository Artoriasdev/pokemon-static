
const toggleFavorite = (id: number) => {

    if (typeof window !== 'undefined') {
        let favorites: number[] = JSON.parse(window.localStorage.getItem('favorites') || '[]' );
    
        if (favorites.includes(id)) {
            favorites = favorites.filter(pokeId => pokeId !== id);
        }else {
            favorites.push(id);
        }
    
        window.localStorage.setItem('favorites', JSON.stringify(favorites));
    }


}

const existInFavorites = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(window.localStorage.getItem('favorites') || '[]' );
    return favorites.includes(id);
}

const pokemons = (): number[] => {
    return JSON.parse(window.localStorage.getItem('favorites') || '[]' );
}

export default{
    toggleFavorite,
    existInFavorites,
    pokemons
}