import Container from "../components/Container/Container";
import Grid from "../components/Grid/Grid";
import PageLayout from "../components/PageLayout/PageLayout";

function HomePage() {
  return (
    <PageLayout title="Cabin Control" subTitle="Cabin543">
      <Grid>
        {Array.from(new Array(6)).map((_, i) => {
          return (
            <Container
              title={"title: " + i}
              image={"image: " + i}
              href="air-condition"
            />
          );
        })}
      </Grid>
    </PageLayout>
  );
}

export default HomePage;
