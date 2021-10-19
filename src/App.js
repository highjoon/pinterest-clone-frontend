import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore.js";

import Header from "./components/Header";
import Mainboard from "./components/Mainboard.js";
import unsplash from "./api/unsplash"
import LoginHeader from "./components/LoginHeader.js";
import LoginMainboard from "./components/LoginMainboard.js";

import { PinDetail } from "./pages";


function App() {
   
    
    const scrollToBottom = () =>
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
           
        });
    //
    const [pins, setNewpins] = React.useState([])
    
    const getImages = (term) => {
        return unsplash.get("https://api.unsplash.com/search/photos", {
            params: {
                query: term
            }  
        }   
        );
    }
    const onSearchSubmit = (term) => {
        console.log("on search submit", term)
         getImages(term).then((res) =>{
             let results = res.data.results;

             let newPins = [
                 ...results,
                 ...pins
             ]
             newPins.sort(function(a,b) {
                 return 0.5-Math.random();
             })
             setNewpins(newPins)
         })
    };
    
    const getNewPins = () => {
        let promises = [];
        let pinData = [];

        let pins = ['ocean','Tokyo',"city","food","people"]

        pins.forEach((pinTerm)=>{
            promises.push(
                getImages(pinTerm).then((res)=> {
                    let results = res.data.results;

                    pinData = pinData.concat(results)

                    pinData.sort(function(a,b) {
                        return 0.5 -Math.random();
                    })
                })
            )
        })
        Promise.all(promises).then(()=> {
            setNewpins(pinData);
        })
    }
    React.useEffect(()=> {
        getNewPins();
    }, []);

   
    return (
        <React.Fragment>
        <ConnectedRouter history={history}>
         <Route path = "/" exact>
         <LoginHeader onSubmit={onSearchSubmit}/>
             <LoginMainboard pins={pins}/>
        
         </Route>
         <Route path = "/main" exact>
         <Header onSubmit={onSearchSubmit}/>
             <Mainboard pins={pins} />
         </Route>

           <Route path="/detail/:id" component={PinDetail} />

        </ConnectedRouter>
           
        </React.Fragment>
          
           
       
    

    );
}

export default App;

