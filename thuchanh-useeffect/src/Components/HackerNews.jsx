import axios from "axios";
import React, {useEffect, useRef, useState} from "react";
//http://hn.algolia.com/api/v1/search?query=
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const handleFetchingData = useRef({});
  handleFetchingData.current = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(!message && !query ? [] : response.data.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      setMessage(`the error happend :${error}`);
    }
  };

  useEffect(() => {
    handleFetchingData.current();
  }, [query]);
  return (
    <div>
      <div className="p-5 shadow-lg mx-auto max-w-[300px] text-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search..."
          className="px-3 w-[300px] py-2 outline-none"
        />
        {loading && (
          <div className="w-10 mx-auto h-10 rounded-full border-red-600 border-4 border-r-4 border-r-transparent animate-spin"></div>
        )}
        {!loading && message && <div>{message}</div>}
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => {
            return (
              <div className="mb-2 " key={item.title}>
                {item.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNews;
