export function formatPrice(value) {
  let newValue = value.replace(/[^\d]/g, '')

  newValue = newValue.replace(/^0+/, '')

  if (newValue.length > 2) {
    const cents = newValue.slice(-2)
    const dollars = newValue.slice(0, -2)
    newValue = `${dollars}.${cents}`
  }

  if (newValue.length === 0) {
    newValue = '0.00'
  } else if (newValue.length === 1) {
    newValue = `0.0${newValue}`
  } else if (newValue.length === 2) {
    newValue = `0.${newValue}`
  }

  return newValue
}