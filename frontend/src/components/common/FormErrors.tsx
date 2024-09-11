import React from "react"

interface Props {
  children?: React.ReactNode
}

export const FormErrors: React.FC<Props> = ({ children }) => {
  return (
    <span className="text-xs text-primary">
      {children}
    </span>
  )
}
