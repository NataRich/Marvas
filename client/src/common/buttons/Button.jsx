import { useNavigate } from "react-router-dom";

export function SignInButton() {
    const navigate = useNavigate();

    return (
        <div className="border rounded-[2px] border-primary-600 hover:bg-primary-600 active:!bg-primary-700 active:shadow-inner active:border-primary-700 transition-all group">
            <button 
                className="font-sans text-xl text-primary-600 group-hover:text-white active:text-white transition-all py-[10px] px-[20px]"
                onClick={() => {navigate('/signin')}}
            >
                Sign In
            </button>
        </div>
    )
}