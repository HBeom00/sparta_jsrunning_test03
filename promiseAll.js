async function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 Complete");
    }, 1000);
  });
}

async function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 2 Complete");
    }, 2000);
  });
}

async function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3 Complete");
    }, 3000);
  });
}

async function runTasksSequential() {
  console.time("Sequential");
  try {
    const result1 = await task1();
    console.log(result1);
    const result2 = await task2();
    console.log(result2);
    const result3 = await task3();
    console.log(result3);
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Sequential");

  // 예상되는 대략적인 시간과 그 이유 < 빈칸 1 >
  /*
  풀이 : 대략적인 시간은 6초가 걸릴 것이다.
  왜냐하면, result1(1초 뒤)이 실행 되고 나서 result2(2초 뒤)가 실행되고, result2가 출력되야 result3(3초 뒤)가 실행되기 때문에
  총 1초 + 2초 + 3초 = 6초 가 걸린다 !!
  */
}

async function runTasksParallel() {
  console.time("Parallel");
  try {
    // 병렬로 promise들을 한 번에 처리하는 코드
    // < 빈칸 2 >
    const results = await Promise.all([task1(), task2(), task3()]);
    results.forEach((result) => console.log(result));
  } catch (error) {
    console.error("Error:", error);
  }
  console.timeEnd("Parallel");
  // 예상되는 대략적인 시간과 그 이유 < 빈칸 3 >
  /*
  풀이 : 시간이 제일 긴 task3()가 출력될 때 task1(), task2()도 한번에 출력되므로 총 3초가 걸린다고 볼 수 있다.
  */
}

// 함수 호출
runTasksSequential().then(() => runTasksParallel());
