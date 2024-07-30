const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === API_URL) {
        resolve("url이 같습니다");
      } else reject("url이 다릅니다");
    }, 3000);
  });
}

async function getData2(url2) {
  try {
    const result = await getData(url2);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getData2(API_URL);
getData2(WRONG_URL);
