"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTable = ListTable;
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
require("oc-listtable/src/table.css");
require("oc-listtable/src/pagination.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Pagination(_ref) {
  var totalItems = _ref.totalItems,
    itemsPerPage = _ref.itemsPerPage,
    currentPage = _ref.currentPage,
    onPageChange = _ref.onPageChange;
  var totalPages = Math.ceil(totalItems / itemsPerPage);
  var handlePageChange = function handlePageChange(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage - 1);
    },
    disabled: currentPage === 1
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronLeft
  })), /*#__PURE__*/_react["default"].createElement("span", null, " ", currentPage, " sur ", totalPages), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return handlePageChange(currentPage + 1);
    },
    disabled: currentPage === totalPages
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronRight
  })));
}
function ListTable(_ref2) {
  var headers = _ref2.headers,
    items = _ref2.items,
    _ref2$defaultItemsPer = _ref2.defaultItemsPerPage,
    defaultItemsPerPage = _ref2$defaultItemsPer === void 0 ? 20 : _ref2$defaultItemsPer;
  var isEmpty = items.length === 0;

  // Pagination variables
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    currentPage = _useState2[0],
    setCurrentPage = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultItemsPerPage),
    _useState4 = _slicedToArray(_useState3, 2),
    itemsPerPage = _useState4[0],
    setItemsPerPage = _useState4[1];
  var itemsPerPageOptions = [20, 40, 60, 80, 100];
  var startIndex = currentPage * itemsPerPage - itemsPerPage;
  var endIndex = startIndex + itemsPerPage;

  // Search variables
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    search = _useState6[0],
    setSearch = _useState6[1];

  // Sort variables
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    sortHeader = _useState8[0],
    setSortHeader = _useState8[1];
  var _useState9 = (0, _react.useState)("asc"),
    _useState10 = _slicedToArray(_useState9, 2),
    sortOrder = _useState10[0],
    setSortOrder = _useState10[1];

  // Search functions
  function onSearchChange(e) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }
  function filterItems(items) {
    return items.filter(function (item) {
      var values = Object.values(item);
      var valuesAsString = values.join("").toLowerCase();
      return valuesAsString.includes(search.toLowerCase());
    });
  }

  //Pagination functions
  var handlePageChange = function handlePageChange(newPage) {
    setCurrentPage(newPage);
  };
  function changeItemsPerPage(e) {
    setItemsPerPage(parseInt(e.target.value));
  }

  // Sort functions
  function sortBy(header, order) {
    setSortHeader(header);
    setSortOrder(order);
  }
  function sortItems(items) {
    return items.sort(function (itemA, itemB) {
      var valueA = sortHeader.transformer ? sortHeader.transformer(itemA[sortHeader.key]) : itemA[sortHeader.key];
      var valueB = sortHeader.transformer ? sortHeader.transformer(itemB[sortHeader.key]) : itemB[sortHeader.key];
      if (valueA === valueB) {
        return 0;
      }
      if (sortOrder === "asc") {
        return valueA > valueB ? 1 : -1;
      }
      return valueA > valueB ? -1 : 1;
    });
  }
  var itemsForCurrentPage = _toConsumableArray(sortItems(filterItems(items))).slice(startIndex, endIndex);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tools-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "entry-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "entry per page:"), /*#__PURE__*/_react["default"].createElement("select", {
    onChange: changeItemsPerPage,
    value: itemsPerPage
  }, itemsPerPageOptions.map(function (itemsPerPageOption) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: itemsPerPageOption,
      key: itemsPerPageOption
    }, itemsPerPageOption);
  }))), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMagnifyingGlass,
    className: "logo-search"
  }), /*#__PURE__*/_react["default"].createElement("input", {
    className: "input-search",
    placeholder: "search",
    value: search,
    onChange: onSearchChange
  })), /*#__PURE__*/_react["default"].createElement("table", {
    className: "table-container"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, headers.map(function (header) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: header.key
    }, header.title, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faChevronUp,
      onClick: function onClick() {
        return sortBy(header, "asc");
      },
      className: "chevron-up"
    }), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faChevronDown,
      onClick: function onClick() {
        return sortBy(header, "desc");
      },
      className: "chevron-down"
    }));
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, isEmpty ? /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: headers.length,
    style: {
      textAlign: 'center'
    }
  }, "No data ")) : itemsForCurrentPage.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index
    }, headers.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: column.key
      }, item[column.key]);
    }));
  }))), /*#__PURE__*/_react["default"].createElement(Pagination, {
    totalItems: filterItems(items).length,
    itemsPerPage: itemsPerPage,
    currentPage: currentPage,
    onPageChange: handlePageChange
  }));
}
