import { useState } from 'react';

function Button({ show, children, onClick }) {
  let stuff = null;
  if (show) stuff = (
    <button onClick={onClick}>
      {children}
    </button>
  )

  return stuff;
}

function Divider() {
  return (<div className="divider"/>)
}

function Intro() {
  return (
    <div className="intro">
      <h1>Introduction</h1>
      <p>
        Javascript is a coding language.
        It is mostly used in webdevelopment. 
        (i probably misspelled that lol)
        Anyways, it's kind of easy to learn,
        but still, like any coding language,
        when you do a real/committed project,
        the fact that not everything will work out
        the first time will screw your sanity up.
        (until you get used to it)
      </p>
    </div>
  )
}

function Basix() {
  return (
    <div className="basix">
      <h1>Basics</h1>
      <Divider/>
      <h2>Comments</h2>
      <p>
        Comments are pretty much what they sound like they are,
        but you're the commenter.
        These help you remember things while making a project,
        and also help you get back on track if you took a "short" break.
        These are basically lines of text that the compiler ignores.
        <br/>
        Example:
      </p>
      <code>
        // this is how you make comments.
        // I am a single-line commente
        /*
          I am
          a multi-line
          comment.
        */
      </code>
    </div>
  )
}

export default function Stuffs() {
  const [index, setIndex] = useState(0);
  const things = [<Intro/>, <Basix/>];
  return (
    <div className="stuffs">
      {things[index]}
      <Button
        show={things[index - 1]}
        onClick={() => {
          setIndex(index - 1)
        }}
      >
        PREV
      </Button>
      <Button
        show={things[index + 1]}
        onClick={() => {
          setIndex(index + 1)
        }}
      >
        NEXT
      </Button>
    </div>
  )
}