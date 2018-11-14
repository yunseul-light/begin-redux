/* 
 카운터 관련 상태 로직
 리덕스 메뉴얼상 액션과 리듀서를 각각 다른 파일에 작성하여 관리하는 것을 알려주지만, 새 액션을 추가 할때마다 두 파일을 건들어야 함
 액션 + 리듀서 -> Ducks 구조
 기능별로 하나의 파일에서 관리 가능
*/
import { createAction, handleActions } from "redux-actions";

// Action type
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// Action functions
// 액션 함수의 경우 다른 파일에서 호출되기 때문에 export 해줌
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  number: 0
};

// Reducer를 만들어 export
export default handleActions(
  {
    [INCREMENT]: (state, action) => {
      return { number: state.number + 1 };
    },
    [DECREMENT]: (state, action) => {
      return { number: state.number - 1 };
    }
  },
  initialState
);
