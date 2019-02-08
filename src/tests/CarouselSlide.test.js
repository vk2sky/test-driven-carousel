import React from "react";
import {shallow, mount} from "enzyme";
import CarouselSlide from "../CarouselSlide";

describe("CarouselSlide", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CarouselSlide
        imgUrl="https://example.com/default.jpg"
        description="Default test image" />
    );
  });

  it("renders correctly", () => {
    wrapper.setProps({
      description: "Description",
      attribution: "Attribution",
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("passes other props through to the <figcaption>", () => {
    const style = {};
    const onClick = () => {
    };
    const className = "my-carousel-slide";

    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop("style")).toBe(style);
    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
  });
});

describe("Img", () => {
  let mounted;
  const imgUrl = "https://example.com/default.jpg";

  beforeEach(() => {
    mounted = mount(
      <CarouselSlide.defaultProps.Img
        src={imgUrl}
        imgHeight={500}
      />);
  });

  it("renders correctly", () => {
    expect(mounted.find("img")).toMatchSnapshot();
  });

  it("uses imgHeight as the height style property", () => {
    expect(mounted).toHaveStyleRule("height", "500px");

    mounted.setProps({ imgHeight: "calc(100vh - 100px)" });
    expect(mounted).toHaveStyleRule("height", "calc(100vh - 100px)");
  });
});
