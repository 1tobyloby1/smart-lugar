import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Grid from "../components/Grid/Grid";
import PageLayout from "../components/PageLayout/PageLayout";
import Cabin from "shared/Models/Cabin";
import api from "../functions/api";

function HomePage() {
  const [cabin, setcabin] = useState<Cabin | null>(null);

  const fetchCabin = async () => {
    const response = await api({
      method: "GET",
      url: "/cabin",
    });

    if (response.successful) {
      setcabin(response.data[0] as Cabin);
    }
  };

  useEffect(() => {
    fetchCabin();
  }, []);

  return (
    <PageLayout title="Cabin Control" subTitle="Cabin543">
      <Grid>
        {cabin &&
          cabin.controls.map((control) => {
            return <Container {...control} key={control.href} />;
          })}
      </Grid>
    </PageLayout>
  );
}

export default HomePage;
