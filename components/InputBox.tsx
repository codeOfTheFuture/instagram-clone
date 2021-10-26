import { EmojiHappyIcon } from '@heroicons/react/outline'

const InputBox: React.FC = () => {
  return (
    <form className='flex items-center p-4'>
      <EmojiHappyIcon className='h-7' />
      <input
        className='border-none flex-1 focus:ring-0 outline-none'
        placeholder='Add a comment...'
        type="text"
      />
      <button className='font-semibold text-blue-400'>Post</button>
    </form>
  )
}

export default InputBox;
