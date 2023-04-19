import Logo from './Logo'
import bg from '../assets/images/Graphic Side.png'

function Login () :JSX.Element{
    return (
    <div className="w-full flex h-screen">
        <div className="w-1/2 flex justify-center items-center ">
            <div className="max-w-xs">
                <Logo/>
                <h2 className="text-center text-3xl mb-2 font-bold">Sign In</h2>
                <p className="text-center text-sm text-[#8A92A6] mb-9">Sign in to stay connected. </p>
                <form className="flex flex-col">
                    <div className="user flex flex-col relative p-1">
                        <label htmlFor="username flex flex-col " className="mb-6">
                            <span className="mr-6 text-xs absolute -top-4 left-1  opacity-75">Username</span>
                            <input id="username" name="username" className="border-2 rounded border-blue-700 w-full" />
                        </label>
                    </div>
                    <div className="password flex flex-col relative p-1">
                        <label htmlFor="password flex flex-col " className="mb-6">
                            <span className="mr-6 text-xs absolute -top-4 left-1  opacity-75">Password</span>
                            <input id="password" type="password" name="password" className="border-2 rounded border-blue-700 w-full"/>
                        </label>
                    </div>
                    <div className="container-rf flex flex-row">
                        <div className="rember text-xs w-1/2">
                            <label className="form-check-label relative">
                                <input type="checkbox" className="form-check-input absolute left-5 opacity-75 -top-0.5" name="" id="" value="checkedValue" checked/>
                                <div className="ml-3 opacity-75">Remember?</div>
                            </label>
                        </div>
                        <div className="forgot text-blue-600 text-xs w-1/2 cursor-pointer">
                            Forgot Password
                        </div>
                    </div>
                </form>
                <div className="login justify-center flex">
                    <button className="mt-6 p-2 bg-blue-700 rounded-xl justify-center text-white w-1/2">Sign in</button>
                </div>    
                <div className="more-signin">
                    <div className="div text-xs text-center p-2">or sign in with other accounts?</div>
                </div>
                <div className="more flex flex-row gap-3 justify-center text-xl">
                    <i className='bx bxl-google-plus-circle cursor-pointer' ></i>
                    <i className='bx bxl-facebook-circle cursor-pointer' ></i>
                    <i className='bx bxl-instagram-alt cursor-pointer' ></i>
                </div>
                <div className="signup flex flex-row text-xs gap-3 p-3">
                    <div className="div w-1/2">
                        Don’t have an account?
                    </div>
                    <div className="signup w-1/2 text-blue-600 cursor-pointer">
                        Click here to sign up.
                    </div>
                </div>            
            </div>
        </div>
        <img src={bg} className="w-1/2" alt="heh"/>
    </div>
  )
}

Login.propTypes = {}

export default Login