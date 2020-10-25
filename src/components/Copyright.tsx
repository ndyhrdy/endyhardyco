import config from "../lib/config";

export default function Copyright() {
  return (
    <div className="bg-gray-600 py-2">
      <div className="container">
        <p className="text-white">
          &copy; Copyright {new Date().getFullYear()} {config.site_title}.
        </p>
      </div>
    </div>
  );
}
