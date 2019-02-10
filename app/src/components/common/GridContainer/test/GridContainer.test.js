import React from "react";
import Enzyme, { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import GridContainer from "../GridContainer";

describe("GridContainer", () => {
  let wrapper;
  const children = "Lorem Ipsum";
  beforeEach(() => {
    wrapper = mount(<GridContainer>{children}</GridContainer>);
  });

  it("renders GridContainer", () => {
    expect(wrapper.contains(children)).toBeTruthy();
  });
  it("renders GridContainer with `fluid` class", () => {
    console.log(wrapper.find(".grid-container"));
  });
});
