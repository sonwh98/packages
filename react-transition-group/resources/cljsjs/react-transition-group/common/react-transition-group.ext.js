/**********************************************************************
 * Extern for ReactTransitionGroup
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/

var ReactTransitionGroup = {
  "CSSTransition": {
    "defaultProps": {
      "transitionAppear": {},
      "transitionEnter": {},
      "transitionLeave": {}
    },
    "displayName": {},
    "propTypes": {
      "transitionAppear": {
        "isRequired": function () {}
      },
      "transitionAppearTimeout": function () {},
      "transitionEnter": {
        "isRequired": function () {}
      },
      "transitionEnterTimeout": function () {},
      "transitionLeave": {
        "isRequired": function () {}
      },
      "transitionLeaveTimeout": function () {},
      "transitionName": {
        "isRequired": function () {}
      }
    }
  },
  "TransitionGroup": {
    "defaultProps": {
      "childFactory": function () {},
      "component": {}
    },
    "displayName": {},
    "propTypes": {
      "childFactory": {
        "isRequired": function () {}
      },
      "children": {
        "isRequired": function () {}
      },
      "component": {
        "isRequired": function () {}
      }
    }
  }
};
ReactTransitionGroup.CSSTransition.prototype = {
  "forceUpdate": function () {},
  "isReactComponent": function () {},
  "render": function () {},
  "setState": function () {}
};
ReactTransitionGroup.TransitionGroup.prototype = {
  "componentDidMount": function () {},
  "componentDidUpdate": function () {},
  "componentWillMount": function () {},
  "componentWillReceiveProps": function () {},
  "forceUpdate": function () {},
  "isReactComponent": function () {},
  "render": function () {},
  "setState": function () {}
};
