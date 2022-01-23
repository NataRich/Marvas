import SignupForm from "./SignupForm"

export default function Signup(){
    return (
        <div className="w-full h-[500px] flex items-center justify-center">
            <div className="w-[415px] h-[140px] flex flex-col  justify-center items-center">
            <div className="text-4xl font-bold text-primary-500 justify-center items-center mb-[30px]">Welcome on board!</div>
            
            <SignupForm/>
            </div>
            
        </div>
    )
}