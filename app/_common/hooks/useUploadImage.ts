import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { ChangeEvent } from 'react'
import { putImage } from '../libs/r2/storage'

export const userMutateAvatarImage = () => {
  const updateAvatarImage = useMutation({
    mutationFn: async (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        console.log('error')
        throw new Error('Please select the image file')
      }
      console.log(e.target.files[0])
      const path = await putImage(e.target.files[0], 'avatar')
      console.log(path)

      return path
    },
    onSuccess: (data, variables, context) => {
      console.log({ data, variables, context })
    },
    onError: (error, variables, context) => {},
  })
  return { updateAvatarImage }
}
