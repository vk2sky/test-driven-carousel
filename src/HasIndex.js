import React from "react";

export default (Component, indexPropName) =>
  class ComponentWithIndex extends React.PureComponent {
    static displayName = `HasIndex(${Component.displayName || Component.name})`;

    state = {
      index: 0,
    };

    onIndexIncrement = (upperBound) => {
      this.updateIndex(this.state.index + 1, upperBound);
    };

    onIndexDecrement = (upperBound) => {
      this.updateIndex(this.state.index - 1, upperBound);
    };

    updateIndex = (newIndex, upperBound) => {
      const index = (upperBound ? (newIndex + upperBound) % upperBound : newIndex);
      this.setState({ index });
    };

    render = () => {
      const indexProps = {
        [indexPropName]: this.state.index,
        [`${indexPropName}Increment`]: this.onIndexIncrement,
        [`${indexPropName}Decrement`]: this.onIndexDecrement,
      };

      return <Component {...this.props} {...indexProps} />;
    }
};