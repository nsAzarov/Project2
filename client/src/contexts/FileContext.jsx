import React, { createContext, useState, useEffect } from 'react'

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

  return (
    <FileContext.Provider
      value={{
        file,
        setFile,
        imagePreviewUrl,
        setImagePreviewUrl,
        handleImageChange,
      }}
    >
      {children}
    </FileContext.Provider>
  )
}
