/**
 * @description: 求任意数组中的最大值
 * @param {type} arr 数组
 * @return: 最大值
 */
function getMax (arr) {
  var max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * @description: 求任意数组中的最小值
 * @param {type}  arr 数组
 * @return: 最小值
 */
function getMin (arr) {
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * @description: 翻转任意数组顺序
 * @param {type} arr 数组
 * @return: 翻转后的数组
 */
function reverse (arr) {
  var newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

/**
 * @description: 对任意数组从小到大排序
 * @param {type} arr 数组
 * @return: 排序后的从小到大的数组
 */
function bubbleSort (arr) {
  for (let j = 0; j < arr.length - 1; j++) {
    // 假设都排好序了
    var flag = true;
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        // 打脸了
        flag = false;
      }
    }
    // 假设成立，终止循环
    if (flag) {
      break;
    }
  }
  return arr;
}

/**
 * @description: 数组去重
 * @param {type} arr 数组
 * @return: 去重后的数组
 */
function unique (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

/**
 * @description: 判断value是否在arr中存在
 * @param {type} arr 数组
 * @param {type} value 值
 * @return: true或者false
 */
function contain (arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}