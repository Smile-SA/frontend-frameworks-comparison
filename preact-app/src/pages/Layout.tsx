import Homepage from "../components/Homepage";
import DynamicLayout from "../layouts/DynamicLayout";

export default function Layout() {
  return (
    <DynamicLayout>
      <Homepage />
    </DynamicLayout>
  );
}
