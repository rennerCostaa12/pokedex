import { FavoritesContextProvider } from './contexts/favoritesContext';
import { MainRoutes } from '../src/routes/MainRoutes';

export default function App() {

  return (
    <div >
      <>
        <FavoritesContextProvider>
          <MainRoutes />
        </FavoritesContextProvider>
      </>
    </div>
  )
}
