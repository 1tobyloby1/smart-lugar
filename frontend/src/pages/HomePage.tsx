import { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Grid from "../components/Grid/Grid";
import PageLayout from "../components/PageLayout/PageLayout";
import Cabin from "shared/Models/Cabin";
import api from "../functions/api";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [cabin, setcabin] = useState<Cabin | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCabin = async () => {
      const response = await api({
        method: "GET",
        url: "/cabin",
      });

      if (response.successful) {
        setcabin(response.data as Cabin);
      } else if (response.status === 404) {
        navigate("/setup");
      }
    };

    fetchCabin();
  }, [navigate]);

  return (
    <PageLayout title="Cabin Control">
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
