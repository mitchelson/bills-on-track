export const initialState = {
  isLogged: false,
  profile: {},
};

const transactions = (state = initialState, action: any) => {
  switch (action.type) {
    case "asd": {
      return "teste";
    }
    default: {
      return state;
    }
  }
};

export default transactions;