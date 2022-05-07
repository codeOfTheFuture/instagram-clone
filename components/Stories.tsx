import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

const Stories: React.FC = () => {
  const { data: session } = useSession();
  const [suggestions, setSuggestion] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
      id: i,
    }));

    setSuggestion(suggestions);
  }, []);

  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200 rounded-sm overflow-y-scroll scrollbar-thin scrollbar-thumb-black'>
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => {
        console.log(profile);
        return (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};

export default Stories;
