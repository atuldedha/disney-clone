import React, {useEffect} from 'react'
import styled from 'styled-components'
import {selectUserName, setSignOut,setUserLogin,selectUserEmail, selectUserPhoto} from '../features/user/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import {auth, provider} from '../firebase'
import {useHistory} from 'react-router-dom'

const Header = () => {

    const dispatch =  useDispatch()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(async (user ) => {
            if(user) { 
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push('/');
            }
        })
    })

    const signin = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push('/');
        })
    }

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(setSignOut());
            history.push('/login');
        })
    }

    return (
        <Nav>
            <Logo src = "/images/logo.svg"/>
            { !userName ? (

                <LoginContainer>
                    <Login onClick = {signin}>
                        LOGIN
                    </Login>
                </LoginContainer>
                 ) : 

                <>
                    <NavMenu>
                    <a>
                        <img src = "/images/home-icon.svg" />
                        <span>Home</span>
                    </a>

                    <a>
                        <img src = '/images/search-icon.svg' />
                        <span>Search</span>
                    </a>

                    <a>
                        <img src = '/images/watchlist-icon.svg' />
                        <span>Watchlist</span>
                    </a>

                    <a>
                        <img src = '/images/original-icon.svg' />
                        <span>Originals</span>
                    </a>

                    <a>
                        <img src = '/images/movie-icon.svg' />
                        <span>Movies</span>
                    </a>

                    <a>
                        <img src = '/images/series-icon.svg' />
                        <span>Series</span>
                    </a>

                    </NavMenu>

                    <UserImg onClick = {signOut}
                      src = {userPhoto ? (userPhoto) : (userName)}/>
        
                </>

            }

            </Nav>
    
    )
}

export default Header

const Nav = styled.div`
    height:70px;
    background: #090b13;
    display: flex;
    align-items: center;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;
    display: flex;
    align-items: center;

`;

const NavMenu = styled.div`
    display:flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a {
        display:flex;
        align-items:center;
        padding : 0 12px;
        cursor: pointer;

        img {
            height : 20px;

        }
        span {
            font-size: 13px;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }


        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    
`;

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`;

const LoginContainer = styled.div`
    flex:1;    
    display: flex;
    justify-content: flex-end;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0,0,0,0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;
    

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`

