// 카운터 관련 상태 로직

// Action type
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// Action functions
// 액션 함수의 경우 다른 파일에서 호출되기 때문에 export 해줌
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initialState = {
  number: 0
};

// Reducer를 만들어 export
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { nuber: state.number - 1 };
    default:
      return state;
  }
}
