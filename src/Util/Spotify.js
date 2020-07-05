let AccessToken;

const Spotify = {
    getAccessToken() {
        if (AccessToken) {
            return AccessToken;
        }
    },
};

export default Spotify;
