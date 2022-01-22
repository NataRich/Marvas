import { useNavigate } from "react-router-dom";

export function SignInButton() {
    const navigate = useNavigate();

    return (
        <div className="border border-primary-600 hover:bg-primary-600 focus:bg-primary-800 group">
            <button 
                className="font-sans text-xl text-primary-600 group-hover:text-white py-[10px] px-[20px]"
                onClick={() => {navigate('/signin')}}
            >
                Sign In
            </button>
        </div>
    )
}