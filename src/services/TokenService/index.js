const TokenService = () => {
    function _setToken(tokenObj) {
        sessionStorage.setItem('token', JSON.stringify(tokenObj));
    }

    function _getAccessToken() {
        let accessToken = JSON.parse(sessionStorage.getItem('token'));
        return accessToken;
    }

    function _getRefreshToken() {
        return sessionStorage.getItem('refresh_token');
    }

    function _clearToken() {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
    }

    return {
        setToken: _setToken,
        getAccessToken: _getAccessToken,
        getRefreshToken: _getRefreshToken,
        clearToken: _clearToken
    }

};
export default TokenService;