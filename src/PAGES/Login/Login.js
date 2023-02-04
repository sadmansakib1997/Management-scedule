import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovider";

const Login = () => {
  const { login } = useContext(Authcontext);
  const [loginerror, setloginerror] = useState("");
  const [loginuseremail, setloginuseremail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pahtname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    setloginerror("");
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setloginuseremail(data.email);
        toast("Successfully LogIN");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setloginerror(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8">
        <h1 className="text-3xl mb-10 font-semibold text-center text-white">
          LOGIN
        </h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold text-white">
                Email:
              </span>
            </label>
            <input
              type="email"
              defaultValue="alu@gmail.com"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text  text-2xl font-semibold text-white">
                Password:
              </span>
            </label>
            <input
              type="password"
              defaultValue="Sakib@2"
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
            <label className="label">
              <span className="label-text text-white">Forgot Password?</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full text-white"
            value="Login"
          />
          <div>
            {loginerror && (
              <p className="text-red-600" role="alert">
                {loginerror}
              </p>
            )}
          </div>
        </form>
        <p className="text-white">
          New to Doctors Portal?
          <Link className="text text-secondary font-semibold" to={"/signup"}>
            Create an account
          </Link>
        </p>
        <div className="divider text-white">OR</div>
        <button className="btn btn-outline w-full text-white">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
