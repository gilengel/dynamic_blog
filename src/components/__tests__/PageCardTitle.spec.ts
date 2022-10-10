import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PageCardTitle from "../PageCardTitle.vue";

describe("PageCardTitle", () => {
  it("renders properly", () => {
    const title = "Card";
    const subtitles = ["Subtitle1", "Subtitle2"];

    const wrapper = mount(PageCardTitle, {
      props: { title, subtitles },
    });

    const subtitleElements = wrapper.findAll("h2");
    expect(wrapper.find("h1").text()).toBe(title);
    expect(subtitleElements.length).toBe(subtitles.length);

    for (let i = 0; i < subtitleElements.length; i += 1) {
      expect(subtitleElements[i].text()).toBe(subtitles[i]);
    }
  });
});
