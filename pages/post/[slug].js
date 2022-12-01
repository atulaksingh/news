import { useRouter } from "next/router";
import React from "react";

import Layout from "../../components/layout/Layout";
import DPage from "../../components/main/DPage";

function Slug() {
  const router = useRouter();
  // const { slug } = router.query;
  return (
    <Layout>
    <div>
      <DPage />
    </div>
    </Layout>
  );
}

export default Slug;
