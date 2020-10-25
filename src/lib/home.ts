import home from "../../content/home.json";

type Home = {
  readonly headline: string;
  readonly headline_body: string;
  readonly services_summary: string;
  readonly services: {
    title: string;
    body: string;
  }[]
};

export default home as Home;
