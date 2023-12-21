
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import useAuth from "../../Hook/useAuth";
import PageHelmet from "../../Hook/PageHelmet";




const Registration = () => {
    const { createUser, logInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (event) => {

        const name = event.name;
        const email = event.email;
        const password = event.password;
        const photoUrl = event.photoUrl;
        if (/^\w{1,5}$/.test(password)) {
            toast.error("Password must be 6 characters");
        } else if (/^[^A-Z]*$/.test(password)) {
            toast.error("Password must one capital letter")
        } else if (/^[^\W_]*$/.test(password)) {
            toast.error('Must have a special character')
        } else {
            createUser(email, password, name)
                .then(result => {
                    // update profile name :
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: photoUrl
                    })
                        .then(() => {
                            toast.success("Create user successfully")
                            navigate("/")


                        })
                        .catch(err => {
                            toast.error(err.massage)
                        })
                })
                .catch(err => {
                    toast.error(err.massage);
                });


        }
    };
    // Sign in With Google 
    const handleLogInWithGoogle = () => {
        logInWithGoogle()
            .then(() => {
                toast.success('Sign in successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/p0RZHR7/vecteezy-fingerprint-identity-sensor-data-protection-system-podium-7164537.jpg)' }}>
            <PageHelmet title='Registration || Task Manager'></PageHelmet>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero min-h-screen bg-transparent">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Welcome!</h1>

                            <p className="py-6">
                            Create an account for the ultimate Task Manager experience. Enjoy comfort, convenience, and security in your task management journey. Your productivity awaits!                            </p>
                        </div>

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body bg-current rounded-xl">

                                <div className="form-control">
                                    <h2 className="text-3xl label-text my-4 font-bold">Registration Now!</h2>


                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered text-black"
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <span className="text-red-700">{errors.name.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="input input-bordered text-black"
                                        {...register('email', { required: 'Email is required' })}
                                    />
                                    {errors.email && <span className="text-red-700">{errors.email.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input input-bordered text-black"
                                        {...register('photoUrl', { required: 'PhotoUrl is required' })}
                                    />
                                    {errors.photoUrl && <span className="text-red-700">{errors.photoUrl.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        className="input input-bordered text-black"
                                        {...register('password', {
                                            required: 'Password is required',
                                            pattern: {
                                                value: passwordPattern,
                                                message:
                                                    'Password must be at least 6 characters long and include at least one uppercase, one letter, one number, and one special character.',
                                            },
                                        })}
                                    />
                                    {errors.password && <span className="text-red-700">{errors.password.message}</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <button className="text-[] bg-[#FFD700] hover:[#FFDB58] text-[#001F3F] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
                                </div>
                                <label className="label">
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account? Please Login</Link>
                                </label>
                                <div className="divider text-black">OR</div>
                                <div className="form-control mt-6 flex justify-center items-center">
                                <button onClick={handleLogInWithGoogle} className="text-white bg-[#FFD700] hover:[#FFDB58] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><svg xmlns="http://www.w3.org/2000/svg" x="500px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg></button>
                            </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Registration;

