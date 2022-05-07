import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Suggestion from "./Suggestion";

const Suggestions: React.FC = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => (
      {
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
        companyName: faker.company.companyName(),
        id: i
      }
    ));
    setSuggestions(suggestions);
  }, [])

  return (
    <div className='mt-4 ml-10'>
      <div className="flex justify-between text-sm mb-5">
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'>See all</button>
      </div>
      {
        suggestions.map(profile => (
          <Suggestion key={profile.id} avatar={profile.avatar} username={profile.username} companyName={profile.companyName} />

        ))
      }
    </div>
  )
}

export default Suggestions;
