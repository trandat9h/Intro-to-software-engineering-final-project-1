const filterState = {
  province: '',
  type: '',
  avarageRates: '',
  amenities: [],
  generalService: [],
  minPrice: 0,
  maxPrice: 10000000,
  checkinDate: '',
  checkoutDate: '',
}

const guestNumber = 0
const idState = {
  id: '',
}

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    case "RESET":
      return filterState
    default:
      return state;
  }
}

export const homestayIdReducer = (state = idState, action) => {
  switch (action.type) {
    case "ID-SET":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const guestNumberReducer = (state = guestNumber, action) => {
  switch (action.type) {
    case "GUEST-SET":
      return action.payload
    default:
      return state;
  }
}