import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import InputForm from "./components/CustomInput"
import { FormValues, schema } from "./models"
import "./CustomForm.css"

const CustomForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: "onBlur",
    })

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <InputForm
                name="name"
                control={control}
                label="Name"
                type="text"
                error={errors.name}
            />
            <InputForm
                name="email"
                control={control}
                label="Email"
                type="email"
                error={errors.email}
            />
            <InputForm
                name="password"
                control={control}
                label="Password"
                type="password"
                error={errors.password}
            />
            <InputForm
                name="confirmPassword"
                control={control}
                label="Confirm Password"
                type="password"
                error={errors.confirmPassword}
            />
            <button className="button-submit" type="submit">
                Submit
            </button>
        </form>
    )
}

export default CustomForm