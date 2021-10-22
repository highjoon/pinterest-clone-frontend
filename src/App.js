import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import unsplash from "./api/unsplash";
import { actionCreators as PinCreators } from "./redux/modules/pin.js";
import { actionCreators as userActions } from "./redux/modules/user";
import { history } from "./redux/configureStore.js";
import { Header, Mainboard, LoginHeader, LoginMainboard } from "./components";
import { PinDetail, AddPin, MyPage, Search } from "./pages";

function App() {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.user.is_login);
    // 로그인이 되어있으면 true, 안되어있으면 false

    // const scrollToBottom = () =>
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         behavior: "smooth",
    //     });

    useEffect(() => {
        getNewPins();
        dispatch(userActions.loginCheckAPI());
    }, []);

    const [pins, setNewpins] = React.useState([]);

    const getImages = (term) => {
        return unsplash.get("https://api.unsplash.com/search/photos", {
            params: {
                query: term,
            },
        });
    };

    const onSearchSubmit = (term) => {
        getImages(term).then((res) => {
            let results = res.data.results;

            let newPins = [...results, ...pins];
            newPins.sort(function (a, b) {
                return 0.5 - Math.random();
            });
            setNewpins(newPins);
        });
    };

    const getNewPins = () => {
        let promises = [];
        let pinData = [];

        let pins = ["ocean", "Tokyo", "city"];

        pins.forEach((pinTerm) => {
            promises.push(
                getImages(pinTerm).then((res) => {
                    let results = res.data.results;

                    pinData = pinData.concat(results);

                    pinData.sort(function (a, b) {
                        return 0.5 - Math.random();
                    });
                })
            );
        });
        Promise.all(promises).then(() => {
            setNewpins(pinData);
            dispatch(PinCreators.getZapPin(pinData));
        });
    };

    return (
        <React.Fragment>
            {isLogin ? (
                <ConnectedRouter history={history}>
                    <Header onSubmit={onSearchSubmit} />
                    <Route path="/" exact>
                        <Mainboard />
                    </Route>
                    <Route path="/view/search/:word" exact>
                        <Search />
                    </Route>
                    <Route path="/detail/:id" exact component={PinDetail} />
                    <Route path="/addpin" exact component={AddPin} />
                    <Route path="/mypage" exact component={MyPage} />
                </ConnectedRouter>
            ) : (
                <ConnectedRouter history={history}>
                    <Route path="/" exact>
                        <LoginHeader />
                        <LoginMainboard pins={pins} />
                    </Route>
                </ConnectedRouter>
            )}
        </React.Fragment>
    );
}

export default App;
