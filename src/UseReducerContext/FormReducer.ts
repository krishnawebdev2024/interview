//formReducer.ts
export interface FormState {
  name: string;
  email: string;
}

export type FormAction =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "RESET_FORM" };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "RESET_FORM":
      return { name: "", email: "" };
    default:
      return state;
  }
};

export default formReducer;
