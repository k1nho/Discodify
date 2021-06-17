import { InputBar } from "./InputBar";
import { Posts } from "./Posts";
import { Stories } from "./Stories";

interface Iprops {
  userImg: string;
  username: string;
}

export const Feed: React.FC<Iprops> = ({ username, userImg }) => {
  return (
    <div className="flex flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        {/* Top Stories */}
        <Stories />
        {/* Input Bar */}
        <InputBar userImg={userImg} username={username} />
        {/* Posts */}
        <Posts />
      </div>
    </div>
  );
};
