import React from 'react';
import ReactDragListView from './Drag/index.js';
import './Drag/index.less';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const data = [];
    for (let i = 1, len = 21; i < len; i += 1) {
      data.push({
        title: `rows${i}`
      });
    }
    this.state = {
      data
    };
  }

  render() {
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const { data } = that.state;
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.setState({ data });
      },
      nodeSelector: 'li',
      handleSelector: 'a'
    };

    return (
      <div className="simple simple1">
        <h2>Dragging handle</h2>
        <div className="simple-inner">
          <ReactDragListView {...dragProps}>
            <ol>
              {this.state.data.map((item, index) => (
                <li key={index}>
                  {item.title}
                  <a href="#">Drag</a>
                </li>
            ))}
            </ol>
          </ReactDragListView>
        </div>
      </div>
    );
  }
}

export default Demo