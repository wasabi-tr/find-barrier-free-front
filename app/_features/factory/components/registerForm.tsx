'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { actions } from '../actions/factoryRegisterActions'
import { Button } from '@/app/_components/ui-parts/button'

const initialState = {
  errors: {},
  message: null,
}
export const RegisterForm = () => {
  const [state, register] = useFormState(actions, initialState)
  const { pending } = useFormStatus()
  console.log(state)
  //エラー時の処理がうまく行っていない

  return (
    <form action={register}>
      <div className="grid gap10">
        <div className="relative flex flex-col items-start gap-2  ">
          <label htmlFor="name" className="flex items-center gap-2 ">
            施設名<span className="text-sm text-red-600  ">必須</span>
          </label>
          <div className="relative w-full">
            <input
              id="name"
              name="name"
              type="text"
              className={`p-4 rounded-lg bg-white w-full ${
                state?.errors?.name
                  ? 'border-2 border-red-600'
                  : 'border border-color-main-600'
              }`}
              aria-describedby="name-error"
            />
          </div>
          {state?.errors?.name && (
            <p
              id="name-error"
              className="text-red-600 text-sm"
              aria-live="polite"
            >
              {state.errors.name}
            </p>
          )}
        </div>
        <div className="flex justify-center mt-5">
          <Button green>施設を登録する</Button>
        </div>
      </div>
    </form>
  )
}
