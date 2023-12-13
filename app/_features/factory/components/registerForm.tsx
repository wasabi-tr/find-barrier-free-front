'use client'
import { useFormState, useFormStatus } from 'react-dom'
import { actions } from '../actions/factoryRegisterActions'

const initialState = {
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
        <div className="relative flex flex-col items-start gap-5  ">
          <label htmlFor="name" className="text-lg">
            施設名<span>必須</span>
          </label>
          <div className="relative w-full">
            <input
              id="name"
              name="name"
              type="text"
              className="py-3 px-2  rounded-lg bg-white w-full border border-color-main-600 "
            />
          </div>
        </div>
        <div className="relative flex flex-col items-start gap-5  ">
          <label htmlFor="description" className="text-lg">
            説明<span>必須</span>
          </label>
          <div className="relative w-full">
            <input
              id="description"
              name="description"
              type="text"
              className="py-3 px-2  rounded-lg bg-white w-full border border-color-main-600 "
            />
          </div>
        </div>
        <button>送信</button>
      </div>
    </form>
  )
}
