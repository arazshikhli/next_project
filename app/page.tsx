'use client'
import { useState } from 'react'
import { Button, Htag, Paragraph, Tag } from '../components'
import { Rating } from '../components/Rating/Rating'

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0)

  return (
    <main>
      <p>
        Next
      </p>
      <Htag tag='h1' >Counter: {counter}</Htag>
      <Htag tag='h2' >Text</Htag>
      <Htag tag='h3' >Text</Htag>
      {/* <Button appearance="primary" >Click Me</Button> */}
      {/* <Button appearance="ghost" arrow="right">Click Me</Button>
      <Paragraph size="s">Salam</Paragraph>
      <Paragraph >Salam</Paragraph>
      <Paragraph size="l">Salam</Paragraph>
      <Tag color="primary" href="wwww.google.com" >Salam</Tag>
      <Tag size='m' color="ghost" >Salam</Tag>
      <Tag size='s' color="ghost" >Salam</Tag>
      <Tag color="green" >Salam</Tag> */}
      <Button appearance='primary' onClick={() => setCounter(x => x + 1)}>+</Button>
      <Button appearance='primary' onClick={() => {
        setCounter(x => x - 1)
      }}>-</Button>
      <Rating rating={5} />
    </main>
  )
}
