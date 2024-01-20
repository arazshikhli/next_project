import { Button } from "../components";
import { Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <main>
      <p>
        Next
      </p>
      <Htag tag='h1' >Text</Htag>
      <Htag tag='h2' >Text</Htag>
      <Htag tag='h3' >Text</Htag>
      <Button appearance="primary" >Click Me</Button>
      <Button appearance="ghost" >Click Me</Button>
    </main>
  )
}
