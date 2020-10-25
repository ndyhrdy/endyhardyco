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
          <p className="text-base font-light md:text-xl text-gray-700 leading-snug">
            {home.headline_body}
          </p>
        </div>
      </section>
      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container lg:px-24">
          <h2 className="text-xl font-light text-gray-700 mb-12">
            {home.services_summary}
          </h2>
          <div className="flex flex-wrap -mx-4">
            {home.services.map((service) => {
              return (
                <div key={service.title} className="md:w-1/3 px-4 mb-8">
                  <h3 className="text-lg font-light text-orange-500 border-b border-orange-500 pb-2 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
