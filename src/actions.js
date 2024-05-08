import axios from "axios";

export const NOT_EKLE = "NOT_EKLE";
export const NOT_SIL = "NOT_SIL";
export const FETCH_LOADING = "YUKLENIYOR";
export const FETCH_ERROR = "HATA VAR";

export function notEkle(not) {
  return { type: NOT_EKLE, payload: not };
}

export function notSil(notId) {
  return { type: NOT_SIL, payload: notId };
}

export function fetchLoading() {
  return { type: FETCH_LOADING };
}

export function fetchError(message) {
  return { type: FETCH_ERROR, payload: message };
}

export const notEkleAPI = (yeniNot) => (dispatch) => {
  dispatch(fetchLoading());
  axios
    .post("https://httpbin.org/anything", yeniNot)
    .then((res) => {
      if (res.status === 200) {
        dispatch(notEkle(res.data.json));
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notEkle ile dispatch edin
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchError(error.response.message));
    });
};

export const notSilAPI = (id) => (dispatch) => {
  dispatch(fetchLoading());
  console.log(id);
  axios
    .delete("https://httpbin.org/anything", { data: id })
    .then((res) => {
      if (res.status === 200) {
        dispatch(notSil(res.data.data));
        // res.data objesi içerisinden ihtiyaç duyduğunuz değeri bulun ve oluşturduğunuz notSil ile dispatch edin
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchError(error.response.message));
    });
};
