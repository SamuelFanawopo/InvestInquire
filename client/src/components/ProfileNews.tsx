import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// Define the GraphQL query
const GET_PROFILE_NEWS = gql`
  query GetProfileNews($tickers: String) {
    profileNews(tickers: $tickers, limit: 4) {
      title
      url
      bannerImage
    }
  }
`;

// Define the props for the NewsItem
interface NewsItem {
  bannerImage: string;
  title: string;
  url: string;
}

const ProfileNews: React.FC<{ ticker: string }> = ({ ticker }) => {
  const { loading, error, data } = useQuery(GET_PROFILE_NEWS, {
    variables: { tickers: ticker },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading news data.</p>;

  // Extract newsItems from data
  const profileNewsItems: NewsItem[] = data?.profileNews || [];

  // Check if there is any news available
  if (profileNewsItems.length === 0) {
    return <p>No news available for this ticker.</p>;
  }

  return (
    <div className="flex flex-col items-center w-full ml-2">
      <h1 className="font-bold text-3xl text-center my-6">
        Latest Financial News
      </h1>
      {/* First news item taking up the full width */}
      {profileNewsItems.length > 0 && (
        <div className="w-full mb-3">
          <a href={profileNewsItems[0].url} className="block">
            <h2 className="font-bold text-xl mb-5 text-center">
              {profileNewsItems[0].title}
            </h2>
            <img
              src={profileNewsItems[0].bannerImage}
              alt={profileNewsItems[0].title}
              className="w-full rounded-md mb-5"
            />
          </a>
        </div>
      )}
      {/* Other news items in a responsive grid */}
      {profileNewsItems.length > 1 && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {profileNewsItems.slice(1).map((item, index) => (
            <div key={index}>
              <a href={item.url} className="block">
                <h2 className="font-bold text-lg">{item.title}</h2>
                <img
                  src={item.bannerImage}
                  alt={item.title}
                  className="w-full rounded-md"
                />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileNews;
