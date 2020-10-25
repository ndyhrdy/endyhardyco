import BasicMeta from "../components/meta/BasicMeta";
import home from "../lib/home";
import Layout from "../components/Layout";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} title="Web and Mobile App Development" />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <section className="py-12 md:py-24">
        <div className="container lg:px-24">
          <h1 className="text-3xl font-light md:text-4xl text-orange-500 leading-tight tracking-tight mb-8">
            {home.headline}
          </h1>
          <p className="text-base font-light md:text-xl text-gray-700 leading-snug mb-12">
            {home.headline_body}
          </p>
        </div>
      </section>
    </Layout>
  );
}
