import avatar from './assets/avatar.png';
import { type ButtonProps, Button } from './Button';
import { FaGithub, FaSpotify, FaTelegram, FaYoutube } from 'react-icons/fa';
import { IoMdMusicalNote, IoMdMail } from 'react-icons/io';

interface Category {
  label: string;
  buttons: ButtonProps[];
}

const categories: Category[] = [
  {
    label: 'Socials & Contacts',
    buttons: [
      {
        label: 'Telegram',
        href: 'https://t.me/eliva1e',
        backgroundColor: '#24A1DE',
        icon: <FaTelegram />,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/eliva1e',
        backgroundColor: 'black',
        icon: <FaGithub />,
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@realmisterkirill',
        backgroundColor: '#FC0032',
        icon: <FaYoutube />,
      },
      {
        label: 'Email',
        href: 'mailto:kirillsiukhin@proton.me',
        backgroundColor: '#0043fc',
        icon: <IoMdMail />,
      },
    ],
  },
  {
    label: 'Music',
    buttons: [
      {
        label: 'Spotify',
        href: 'https://open.spotify.com/artist/3KFWoswTJ6GuEf9N1thuz2?si=jZN771MIRr2F1sfYu6h7jw',
        backgroundColor: '#1DB954',
        icon: <FaSpotify />,
      },
      {
        label: 'Yandex Music',
        href: 'https://music.yandex.ru/artist/22418905',
        backgroundColor: '#FED42B',
        color: 'black',
        icon: <IoMdMusicalNote />,
      },
    ],
  },
];

function App() {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <img
        src={avatar}
        alt="Kirill Siukhin's avatar"
        className="rounded-full shadow-xl mb-4"
        width={250}
        height={250}
      />

      <div className="text-center font-bold mb-8">
        <h1 className="text-4xl mb-2">Kirill Siukhin</h1>
        <span className="text-gray-200">AKA Mister Kirill, eliva1e</span>
      </div>

      {categories.map((category) => (
        <div key={category.label} className="mb-6">
          <h1 className="uppercase text-xs font-bold tracking-wider mb-2">{category.label}</h1>

          <div className="flex flex-col gap-2">
            {category.buttons.map((props) => (
              <Button key={props.label} {...props} />
            ))}
          </div>
        </div>
      ))}

      <img
        src={avatar}
        className="fixed top-0 left-0 w-full h-full object-cover blur-xl opacity-50 -z-10 scale-115"
        alt=""
        aria-hidden
      />
    </div>
  );
}

export default App;
