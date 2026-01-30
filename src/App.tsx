import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from './components/atoms/Button/Button'
import Input from './components/atoms/Input/Input'
import Text from './components/atoms/Text/Text'
import Icon from './components/atoms/Icon/Icon'
import InputField from './components/molecules/InputField/InputField'
import InputButton from './components/molecules/InputButton/InputButton'
import Table from './components/organisism/Table/Table'
import Image from '@atoms/Image/Image'
import UserAvatar from '@molecules/UserAvatar/UserAvatar'

function App() {
  const [count, setCount] = useState(0)

  const header = [
    { label: 'Name', sortable: true, sortDirection: 'asc', onSort: () => console.log('Sort Name') },
    { label: 'Age', sortable: true, onSort: () => console.log('Sort Age') },
    { label: 'Active', sortable: false },
  ];

  const rows = [
    {
      cells: [
        { content: 'Alice' },
        { content: '30', isNumeric: true },
        { content: '', isBoolean: true, customIcon: 'check' as const },
      ],
    },
    {
      cells: [
        { content: 'Bob' },
        { content: '25', isNumeric: true },
        { content: '', isBoolean: true, customIcon: 'close' as const },
      ],
    },
  ];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <p>Test atoms</p>
        <Button
          content="Click me"
          className="button"
          onClick={() => alert('Button clicked!')}
        />

        <Input
          placeholder="Type something..."
          className="input"
          onChange={() => console.log('Input changed!')}
        />

        <Text
          content="Hello, World!"
          fontSize="20px"
          fontWeight="bold"
          color="#ff5733"
          className="text"
        />

        <Icon
          name="check"
          size="24px"
          color="#000000"
          className="icon"
        />

        <Image
          src="https://images.pexels.com/photos/31299770/pexels-photo-31299770.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Test Image"
        />
      </div>

      <div>
        <p>Test molecules</p>
        <InputField placeholder="Enter text..." content="First name" />
        <InputButton placeholder='Search'
                     content='Search'
                     onClick={() => alert('InputButton clicked!')} />

        <UserAvatar src="https://images.pexels.com/photos/31299770/pexels-photo-31299770.jpeg"
                    userName="Noah" />
      </div>

      <div>
        <p>Table</p>
        <Table headers={header} rows={rows} />
      </div>
    </>
  )
}

export default App
