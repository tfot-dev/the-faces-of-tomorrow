import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Auth } from './constants/Auth';
import { AppState } from '@auth0/auth0-react/dist/auth0-provider';
import { history } from './utils/history';
// import i18n (needs to be bundled)
import './i18n';

const onRedirectCallback = (appState: AppState) => {
    history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={Auth.domain}
            clientId={Auth.clientId}
            audience={Auth.audience}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

Notification.requestPermission().then((permission) => {
    console.log(permission);
});
