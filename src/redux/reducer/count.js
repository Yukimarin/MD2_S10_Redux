import * as typeAction from "../constant/typeAction";
// Bước 1: Khai báo giá trị khởi tạo ban đầu initState
const initState = 0;
// Bước 2: Khai báo các hàm để xử lý logic
// Hàm xử lý sẽ nhận vào 2 tham số:
// - Giá trị khởi tạo (initState)
// - action được gửi vào reducer có dạng {type:..., payload:...}
const count = (state = initState, action) => {
  switch (action.type) {
    case typeAction.ACT_UP:
      return (state = state + action.payload);
    case typeAction.ACT_DOWN:
      return (state = state - action.payload);
    case typeAction.ACT_RANDOM:
      return (state = Math.ceil(Math.random() * 100));
    default:
      break;
  }
  return state;
};

export default count;
