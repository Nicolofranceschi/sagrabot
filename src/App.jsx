import { createContext, useContext , useState, useEffect } from 'react';
import Editor from "./Editor";
import Sale from "./Sale";
import Loginphone from "./Loginphone";
import { AnimateSharedLayout } from 'framer-motion';
import { auth, getUserDocument } from './firebase';
import { Route, Switch } from 'react-router';
import useLocalStorage from './useLocalStorage';
import { toast , ToastContainer } from "react-toastify";
import Choose from './Choose';
<<<<<<< HEAD
import Prenotatore from "./prenotazioni"
import Typeform from "./Typeform";

=======
import Prenotazioni from "./Prenotazioni"
>>>>>>> d670f95a06ba42e78daa237b0289523fc4129cc7

const SalaContext = createContext(null);
export const useSala = () => useContext(SalaContext);

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async firebaseUser => {
      if (firebaseUser) {
        try {
          const data = await getUserDocument(firebaseUser.uid);
          setUser({ ...data });
        } catch (error) {
          toast.error(error.message); 
        }
      }
    });
  }, []);

  const context = useLocalStorage('sala', '');

  return user ? (
    <SalaContext.Provider value={context}>
      <LoggedRouter />
    </SalaContext.Provider>
  ) : <NonLoggedRouter  /> ;
  }

 const LoggedRouter = () => (
  <AnimateSharedLayout type="crossfade">
        <Switch>
          <Route path="/editor">
            <Editor />
          </Route>
          <Route path="/sale">
            <Sale /> 
          </Route>
          <Route path="/choose">
            <Prenotazioni />
          </Route>
          <Route path="/">
            <Choose />
          </Route>
        </Switch>
    </AnimateSharedLayout>
);

const NonLoggedRouter = () => (
  <AnimateSharedLayout type="crossfade">
        <Switch>
        <Route path="/type">
          <Typeform />
          </Route>
          <Route path="/">
          <ToastContainer
            position="top-right"
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            draggable
            hideProgressBar
          />
            <Loginphone />
          </Route>
        </Switch>
    </AnimateSharedLayout>
);

export default App;
