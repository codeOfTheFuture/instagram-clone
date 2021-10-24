import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";

const Stories: React.FC = () => {
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestion(suggestions);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-y-scroll scrollbar-thin scrollbar-thumb-black'>
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
};

export default Stories;
