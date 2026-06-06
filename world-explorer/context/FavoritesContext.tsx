// made a mistake by not creating context for the favorite country feature
'use client'

import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { ReactNode } from 'react';

type FavoritesContextType = {
  favorites: string[];
  toggleFavorite: (id: string) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: React.Dispatch<React.SetStateAction<boolean>>;
};

type FavoritesProviderProps = {
  children: ReactNode;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ( {children}: FavoritesProviderProps ) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded ] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);


  const toggleFavorite = ((id: string) => {
   if(favorites.includes(id)) {
    setFavorites(
        favorites.filter((favoriteId) => favoriteId !== id)
      );
   } else {
    setFavorites([...favorites, id]) 
   }
  })

    useEffect(() => {
     const storedFavorites = localStorage.getItem("favorites");
     if(storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
     }
  
     setIsLoaded(true)
    },[])
  
    useEffect(() => {
      if(!isLoaded) return;
     localStorage.setItem("favorites", JSON.stringify(favorites));
   }, [favorites, isLoaded]);


  return(

    <FavoritesContext.Provider 
    value={{ 
     favorites, 
     toggleFavorite,
     showFavoritesOnly,
     setShowFavoritesOnly,
    }}
    >
        {children}
    </FavoritesContext.Provider>

  )
};


export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return context;
};