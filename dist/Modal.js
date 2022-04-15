"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// Functional component that returns a modal (dark background and white popup window)
function Modal(_ref) {
  let {
    children,
    show,
    onClose
  } = _ref;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return /*#__PURE__*/_react.default.createElement(ModalStyled, {
    className: showHideClassName
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "modal-main"
  }, children, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "Close")));
}

var _default = Modal;
exports.default = _default;

const ModalStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n\n  section {\n    background-color: white;\n    padding: 20px;\n    padding-left: 50px;\n    padding-right: 50px;\n    border-radius: 5px;\n  }\n\n  p {\n    color: #11191f;\n    font-weight: bold;\n  }\n"])));