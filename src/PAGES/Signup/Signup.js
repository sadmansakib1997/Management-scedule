import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/Authprovider";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signup, updateUser } = useContext(Authcontext);
  const [signuperror, setsignuperror] = useState("");

  const navigate = useNavigate();

  const hadlesingup = (data) => {
    console.log(data);
    setsignuperror("");
    signup(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("user create successfully");
        navigate("/");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setsignuperror(error.message);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8">
        <h1 className="text-3xl mb-10 font-semibold text-center text-white">
          SIGNUP
        </h1>
        <form onSubmit={handleSubmit(hadlesingup)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold text-white">
                Name:
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: "name is required" })}
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-2xl font-semibold text-white">
                Email:
              </span>
            </label>
            <input
              type="email"
              {...register("email", { required: "email is required" })}
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs mb-4">
            <label className="label">
              <span className="label-text  text-2xl font-semibold text-white">
                Password:
              </span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "atleast 6 characters" },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,

                  message: "password strong",
                },
              })}
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-accent w-full text-white"
            value="Sign Up"
          />
          <div>
            {signuperror && (
              <p className="text-red-600" role="alert">
                {signuperror}
              </p>
            )}
          </div>
        </form>
        <p className="text-white">
          Already have an account?
          <Link className="text text-secondary font-semibold" to={"/login"}>
            Login
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

export default Signup;
