import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import NewsFeed from "./NewsFeed";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-gray-50 min-h-screen">
          <div className="flex flex-col mt-14">
            <div className="flex flex-row justify-center flex-shrink items-stretch min-w-[320px] flex-nowrap">
              <Sidebar />
              <NewsFeed />
              <div
                role="complementary"
                className="sticky top-14 z-10 max-w-sm max-h-0 min-w-[280px] basis-96 flex-shrink"
              >
                <h1 className="overflow-y-auto">

                Sponsored
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
