import {Strategy as GithubStrategy} from 'passport-github';
import passport from 'passport';


passport.use('github', new GithubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
    },
    (accessToken, refreshToken, profile, cb)  => {
        // console.log(accessToken, refreshToken, profile, cb)
        const user = {
            fullname: profile.displayName,
            username: profile.username,
            avatarUrl: profile.photos?.[0].value
        }
        cb()
    }
));

export {passport }