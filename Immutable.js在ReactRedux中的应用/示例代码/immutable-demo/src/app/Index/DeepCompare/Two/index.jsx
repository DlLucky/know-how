import React from 'react';
import _ from 'lodash';
import { formatData } from '@util';

const prodData1 = formatData();
const prodData2 = _.cloneDeep(prodData1);
// const prodData2 = formatData();

export default class Two extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      takeUpTime: 0,
      equalSign: 0,
    };
  }

  clickMe = () => {
    const start = new Date().getTime();
    const compareResult =
      JSON.stringify(prodData1) === JSON.stringify(prodData2);
    const end = new Date().getTime();
    this.setState({
      takeUpTime: end - start,
      equalSign: compareResult ? 1 : 2,
    });
  };

  render() {
    const { takeUpTime, equalSign } = this.state;
    let showIsEqual = '';
    switch (equalSign) {
      case 0:
        showIsEqual = '';
        break;
      case 1:
        showIsEqual = '是';
        break;
      case 2:
        showIsEqual = '否';
        break;
      default:
        showIsEqual = '';
    }
    return (
      <div className="card">
        <h2>2、使用JSON.stringify</h2>
        <p className="discribe">
          使用JSON.stringify，非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中，
          并且undefined、任意的函数以及symbol值，在序列化过程中会被忽略（出现在非数组对象的
          属性值中时）或者被转换成null（出现在数组中时）以及其他问题，使用此方法比较存在一定风险；
        </p>
        <hr />
        <div className="operate">
          <button type="button" onClick={this.clickMe}>
            点我
          </button>
          <p>
            耗时<span>{takeUpTime}ms</span>
          </p>
        </div>
        <p>是否相等：{showIsEqual}</p>
      </div>
    );
  }
}
