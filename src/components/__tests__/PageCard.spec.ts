import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import PageCard from "../PageCard.vue";

describe("Card", () => {
  it("renders properly", () => {
    const wrapper = mount(PageCard, { props: { tag: "Card" } });

    expect(wrapper.text()).toContain("Card");
  });
});
