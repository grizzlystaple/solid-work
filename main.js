  } else {
        maxEachCharRight[idRight] = 1;
      }
      idRight += String(maxEachCharRight[idRight]);

      leftSide[idLeft] = {char: sortedCharSequence[i], right: idRight};
      rightSide[idRight] = {char: encodedStr[i], left: idRight};
    }
    var result = '';
    var firstChar = sortedCharSequence[0];
    var searchChar = firstChar + '1';
    var endChar = searchChar;
    while (rightSide[leftSide[searchChar].right].left !== endChar) {
      result     += leftSide[searchChar].char;
      searchChar = rightSide[leftSide[searchChar].right].left;
    }
    result += leftSide[searchChar].char;
    result = result.substring(1).split('').reverse().join('');
    return result;
  }

}(typeof exports === 'undefined' ? window : exports));
//good
 function convertToAscii(str) {
      var result = [];
      var currentChar = '';
      var i = 0;
      for (; i < str.length; i += 1) {
        currentChar = str[i].charCodeAt(0).toString(2);
        currentChar = new Array(9 - currentChar.length).join('0') + currentChar;
        result.push(currentChar);
      }
      return result.join('');
    }
