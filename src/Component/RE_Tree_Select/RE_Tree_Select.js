import "rc-dialog/assets/index.css";
import TreeSelect, { SHOW_PARENT } from "rc-tree-select";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const RE_Tree_Select = () => {
  const [state, setState] = useState({
    tsOpen: false,
    visible: false,
    searchValue: "0-0-0-label",
    value: "0-0-0-value1",
    // value: ['0-0-0-0-value', '0-0-0-1-value', '0-0-0-2-value'],
    lv: { value: "0-0-0-value", label: "spe label" },
    multipleValue: [],
    simpleSearchValue: "test111",
    simpleTreeData: [
      { key: 1, pId: 0, label: "test1", value: "test1" },
      { key: 121, pId: 0, label: "test2", value: "test2" },
      { key: 11, pId: 1, label: "test11", value: "test11" },
      { key: 12, pId: 1, label: "test12", value: "test12" },
      { key: 111, pId: 11, label: "test111", value: "test111" },
    ],
    treeDataSimpleMode: {
      id: "key",
      rootPId: 0,
    },
  });

  const onSearch = (value, ...args) => {
    console.log("Do Search:", value, ...args);
    setState({ searchValue: value });
  };

  const onSelect = (...args) => {
    console.log(args);
  };

  const {
    visible,
    value,
    searchValue,
    tsOpen,
    multipleValue,
    lv,
    simpleTreeData,
    simpleSearchValue,
    treeDataSimpleMode,
  } = state;

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </nav>

      <TreeSelect
        style={{ width: 200 }}
        dropdownStyle={{ maxHeight: 200, overflow: "auto" }}
        defaultValue="leaf1"
        multiple
        treeCheckable
        showCheckedStrategy={SHOW_PARENT}
        treeDefaultExpandAll
        treeData={[
          { key: "", value: "", label: "empty value", children: [] },
          {
            key: "0",
            value: "0",
            label: "0 label",
            children: [
              { key: "00", value: "00", label: "00 label", children: [] },
              { key: "01", value: "01", label: "01 label", children: [] },
            ],
          },
        ]}
        onChange={(val, ...args) => console.log(val, ...args)}
      />
    </div>
  );
};

export default RE_Tree_Select;
