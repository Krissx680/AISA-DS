import { PrimaryButton } from "./PrimaryButton";
import { OutlinedPrimaryButton } from "./OutlinedPrimaryButton";
import { TextPrimaryButton } from "./TextPrimaryButton";

export default function App() {
  return (
    <div className="App">
      <div style={{ marginBottom: "16px" }}>
        <PrimaryButton disableRipple>Button</PrimaryButton>
      </div>
      <div>
        <OutlinedPrimaryButton disableRipple>Button</OutlinedPrimaryButton>
      </div>
      <div style={{ marginTop: "16px" }}>
        <TextPrimaryButton>Button</TextPrimaryButton>
      </div>
    </div>
  );
}
