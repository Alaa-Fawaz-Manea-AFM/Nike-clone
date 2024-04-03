import {
  Hero,
  Footer,
  NavBar,
  Services,
  Subscribe,
  SpecialOffer,
  SuperQuality,
  PopularProducts,
  CustomerReviews,
} from "@/components";

const Home = () => (
  <main className="relative">
    <NavBar />
    <section className="xl:sm:pl-16 pl-8 wide:sm:pr-16 pr-8 sm:pb-24 pb-12">
      <Hero />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <PopularProducts />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SuperQuality />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <Services />
    </section>
    <section className="sm:px-16 px-8 sm:py-24 py-12">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue sm:px-16 px-8 sm:py-24 py-12">
      <CustomerReviews />
    </section>
    <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black sm:px-16 px-8 sm:pt-24 pt-12 pb-8">
      <Footer />
    </section>
  </main>
);

export default Home;
