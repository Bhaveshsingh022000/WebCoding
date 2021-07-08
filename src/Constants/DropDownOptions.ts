import { range } from "lodash";
import { DropdownOption } from "../Components/CommonComponents/DropDownComponent";

export class DropdownOptions {
  public static themeOptions: DropdownOption[] = [
    {
      key: 1,
      value: "nord_dark",
      text: "Nord dark",
    },
    {
      key: 2,
      value: "twilight",
      text: "Twilight",
    },
    {
      key: 3,
      value: "solarized_light",
      text: "Solarized light",
    },
    {
      key: 4,
      value: "vibrant_ink",
      text: "Vibrant ink",
    },
  ];

  public static fontSizeOptions: DropdownOption[] = range(4, 40, 2).map(
    (item, index) => ({
      key: index + 1,
      value: item,
      text: item,
    })
  );
}
