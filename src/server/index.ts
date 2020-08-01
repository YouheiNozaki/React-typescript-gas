declare const global: {
  [x: string]: any;
};

const greeter = (person: string) => {
  return `Hello, ${person}!`;
};

// 関数一覧
function testGreeter() {
  const user = 'Ryusou';
  Logger.log(greeter(user));
}

// 関数を実行
global.testGreeter = function() {
  return testGreeter();
};
