/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { shallow } from "enzyme";
import { MessageSpan, MessageDiv } from "../../ui-framework/messages/MessageSpan";

describe("MessageSpan & MessageDiv", () => {

  describe("MessageSpan", () => {
    it("with message text", () => {
      shallow(<MessageSpan message="Test" />).should.matchSnapshot();
    });

    it("with message HTMLElement", () => {
      const newSpan = document.createElement("span");
      const newContent = document.createTextNode("Test");
      newSpan.appendChild(newContent);
      shallow(<MessageSpan message={newSpan} />).should.matchSnapshot();
    });
  });

  describe("MessageDiv", () => {
    it("with message text", () => {
      shallow(<MessageDiv message="Test" />).should.matchSnapshot();
    });

    it("with message HTMLElement", () => {
      const newSpan = document.createElement("span");
      const newContent = document.createTextNode("Test");
      newSpan.appendChild(newContent);
      shallow(<MessageDiv message={newSpan} />).should.matchSnapshot();
    });
  });

});
