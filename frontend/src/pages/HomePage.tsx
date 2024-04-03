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
      setcabin(response.data as Cabin);
    }
  };

  useEffect(() => {
    fetchCabin();
  }, []);

  return (
    <PageLayout title="Cabin Control" subTitle={cabin?.displayName ?? ""}>
      <Grid>
        {cabin &&
          cabin.zones.map((zone) => {
            return <Container {...zone} key={zone.nodeId} />;
          })}
      </Grid>
    </PageLayout>
  );
}

export default HomePage;
