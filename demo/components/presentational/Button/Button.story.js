import React from "react";
import { storiesOf } from "@storybook/react-native";
import { Story } from "../../../storybook/views/Story";
import { UseCase } from "../../../storybook/views/UseCase";
import { action } from "@storybook/addon-actions";
import Button from "@presentational/Button";

storiesOf("Button", module).add("Style", () => (
  <Story>
    <UseCase text="Primary Button">
      <Button title="Button" onPress={action("button-tap")} />
    </UseCase>
  </Story>
));