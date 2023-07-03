import Head from "next/head";
import DynamicHomepage from "../../components/DynamicHomepage/DynamicHomepage";
import DynamicLayout from "../../layouts/DynamicLayout/DynamicLayout";

export default function Home() {
  return (
    <DynamicLayout>
      <DynamicHomepage />
    </DynamicLayout>
  );
}
