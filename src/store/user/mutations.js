// import state from './state'

// 登入
export const login = (state, data) => {
  state.token = data.token
  state.account = data.account
  state.email = data.email
  state.role = data.role
  state.cart = data.cart
}

export const logout = (state) => {
  state.token = ''
  state.account = ''
  state.email = ''
  state.role = 0
  state.cart = 0
}

export const getInfo = (state, data) => {
  state.account = data.account
  state.role = data.role
  state.email = data.email
  state.cart = data.cart
  state.name = data.name
  state.address = data.address
  state.phone = data.phone
}

export const updateInfo = (state, data) => {
  state.email = data.email
  state.name = data.name
  state.address = data.address
  state.phone = data.phone
}

export const extend = (state, data) => {
  state.token = data
}

export const updateCart = (state, data) => {
  state.cart = data
}

export const appointment = (state, data) => {
  state.appointment.serviceitem = data.serviceitem
  state.appointment.pettype = data.pettype
  state.appointment.time = data.time
  state.appointment.name = data.name
  state.appointment.phone = data.phone
  state.appointment.email = data.email
  state.appointment.petname = data.petname
  state.appointment.pettype = data.pettype
  state.appointment.appointmentDate = data.appointmentDate
  state.appointment.memo = data.memo
}
