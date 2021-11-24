import { EmojiHappyIcon } from "@heroicons/react/outline";
import { ChangeEvent, FormEvent } from "react";

interface InputBoxProps {
  comment: string;
  handleCommentChange: (value: string) => void;
  sendComment: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}

const InputBox: React.FC<InputBoxProps> = (props) => {
  const { comment, handleCommentChange, sendComment } = props;

  return (
    <form className='flex items-center p-4' onSubmit={sendComment}>
      <EmojiHappyIcon className='h-7' />
      <input
        className='border-none flex-1 focus:ring-0 outline-none'
        placeholder='Add a comment...'
        type='text'
        value={comment}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCommentChange(e.target.value)
        }
      />
      <button
        className='font-semibold text-blue-400'
        type='submit'
        disabled={!comment.trim()}
      >
        Post
      </button>
    </form>
  );
};

export default InputBox;
