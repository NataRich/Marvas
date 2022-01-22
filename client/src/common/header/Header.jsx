import { useNavigate } from 'react-router-dom'

import Logo from '../asset/img/marvas.jpg';
import AvatarProfile from '../asset/img/avatar.jpg';
import Search from '../search/SearchBar';
import { SignInButton } from '../buttons/Button';

function Avatar(props) {
    const navigate = useNavigate();

    return (
        <div 
            className="w-[50px] h-[50px] rounded-full cursor-pointer"
            onClick={() => {navigate('/profile')}}
        >
            <img className="w-[50px] h-[50px] rounded-full object-cover" src={props.src} alt="" />
        </div>
    )
}

export default function Header() {
    const auth = localStorage.getItem('auth')
    const isAuthenticated = !!auth;

    const navigate = useNavigate();

    return (
        <div className="w-full h-[100px] flex justify-center items-center font-sans">
            <div className="w-10/12 min-w-[1000px] h-[80px] flex justify-around items-center">
                <div className="w-[80px] h-full rounded-full object-cover">
                    <img className="w-[80px] h-full rounded-full object-cover" src={Logo} alt="" /> 
                </div>
                <div className="w-[375px] h-fit">
                    <Search />
                </div>
                <div className="flex">
                    <div className="flex justify-center items-center space-x-[30px] mr-[30px]">
                        <p 
                            className="text-xl text-neutral-600 hover:underline hover:text-neutral-900 m-0 cursor-pointer"
                            onClick={() => {navigate('/')}}
                        >
                            Home
                        </p>
                        <p 
                            className="text-xl text-neutral-600 hover:underline hover:text-neutral-900 m-0 cursor-pointer"
                            onClick={() => {navigate('/marketplace')}}
                        >
                            Marketplace
                        </p>
                        <p 
                            className="text-xl text-neutral-600 hover:underline hover:text-neutral-900 m-0 cursor-pointer"
                            onClick={() => {navigate('/list')}}
                        >
                            List
                        </p>
                    </div>
                    {
                        isAuthenticated ? (
                            <div className=''>
                                <Avatar src={AvatarProfile} />
                            </div>
                        ) : (
                            <div className="flex justify-center items-center space-x-[20px]">
                                <SignInButton />
                                <p 
                                    className="text-xl text-neutral-600 hover:text-neutral-800 m-0 cursor-pointer"
                                    onClick={() => {navigate('/signup')}}
                                >
                                    Sign Up
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}