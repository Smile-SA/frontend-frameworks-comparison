import SsrHomepage from "../../components/SsrHomepage";
import DynamicLayout from "../../layouts/DynamicLayout";

export default function Ssr() {
  return (
    <DynamicLayout>
      <SsrHomepage />
    </DynamicLayout>
  );
}
