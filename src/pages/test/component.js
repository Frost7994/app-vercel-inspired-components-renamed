import Button from "@/components/ui/button"
import Checkbox from "@/components/ui/checkbox"
import { useForm, Controller } from "react-hook-form"

const Component = () => {
  // form destructure
  const { register, handleSubmit, errors, control } = useForm({
    defaultValues: {
      terms: false
    }
  })

  // fn submit
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="flex items-center justify-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2">
        <Controller
          control={control}
          name='terms'
          render={({ field: { value, onChange } }) =>
            <Checkbox
              checked={value}
              setChecked={onChange}
            />
          } />

        <p>Agree to terms and conditions.</p>
        <Button size='sm' type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default Component
