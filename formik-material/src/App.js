import React from "react";
import {Controller, useController, useForm} from "react-hook-form";
import "./App.css";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
const SchemaValidation = yup.object({
  name: yup
    .string()
    .max(10, "username must be less than 10 characters")
    .required("required"),
  password: yup
    .string()
    .max(20, "password must be less than 10 characters")
    .required("required"),
});
const App = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: {errors, isValid, isSubmitting, isDirty, dirtyFields},
    watch,
  } = useForm({resolver: yupResolver(SchemaValidation)});
  const watchShowAge = watch("showAge", false);
  console.log(watchShowAge);
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] mx-auto   ">
        <div className="p-4 flex flex-col gap-2">
          <label className="text-sm">Username</label>
          <Myinput
            name="name"
            control={control}
            placeholder="Enter your name"
          ></Myinput>
          {/* <input
            className="px-4  text-black py-2 text-sm rounded-sm outline-none"
            type="text"
            name="name"
            placeholder="Enter your name"
            id="name"
            {...register("name")} */}

          {errors?.name && (
            <p className="text-sm text-red-500">{errors?.name?.message}</p>
          )}
        </div>{" "}
        <div className="p-4 flex flex-col gap-2">
          <label className="text-sm">Password</label>
          <input
            className="px-4  py-2 text-black text-sm rounded-sm outline-none"
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors?.password && (
            <p className="text-sm text-red-500">{errors?.password?.message}</p>
          )}
        </div>{" "}
        <div className="p-4 flex flex-col gap-2">
          <input type="checkbox" {...register("showAge")} />
          {watchShowAge && (
            <input type="number" {...register("age", {min: 50})} />
          )}
        </div>
        <div className="p-4 flex flex-col gap-2">
          <button type="submit" className="p-2 bg-green-500 text-sm">
            {isSubmitting ? (
              <div className="w-4 h-4 mx-auto border-white border-2 border-t-2 border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "      submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
const Myinput = ({control, ...props}) => {
  const {field} = useController({control, name: props.name, defaultValue: ""});
  return (
    <input
      className="px-4  py-2 text-black text-sm rounded-sm outline-none"
      {...field}
      {...props}
    />
  );
};
export default App;
