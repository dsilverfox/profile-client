let APIURL = "";

switch (window.location.hostname) {
    case 'localhost' || "127.0.0.1":
        APIURL = 'http://localhost:3000';
        break;
    case 'portfolio-silverfox.herokuapp.com':
        APIURL = 'https://ds-portfolio-server.herokuapp.com';
}

export default APIURL;