import React, { createContext, useState } from 'react'
import axios from 'axios'
import FormData from 'form-data'

export const FileContext = createContext()

export const FileContextProvider = ({ children }) => {
  const [file, setFile] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')

  const handleImageChange = (e) => {
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      setFile(file)
      setImagePreviewUrl(reader.result)
    }

    reader.readAsDataURL(file)
  }

  const sendFile = async () => {
    const formData = new FormData()
    formData.append('file', file)
    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      const { fileName, filePath } = res.data

      console.log('File Uploaded')
    } catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server')
      } else {
        console.log(err.response.data.msg)
      }
    }
  }

  return (
    <FileContext.Provider
      value={{
        file,
        setFile,
        imagePreviewUrl,
        setImagePreviewUrl,
        handleImageChange,
        sendFile,
      }}
    >
      {children}
    </FileContext.Provider>
  )
}
