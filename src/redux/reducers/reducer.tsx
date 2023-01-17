const initialState = {}

export default (state = initialState, { type, payload }:any) => {
  switch (type) {

  case "example":
    return { ...state, ...payload }

  default:
    return state
  }
}
