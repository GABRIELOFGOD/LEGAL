import validator from "validator"

export const isValidUrl = url => validator.isURL(url)

export const isValidEmail = email => validator.isEmail(email)

export const isValidPhone = phone => validator.isMobilePhone(phone)