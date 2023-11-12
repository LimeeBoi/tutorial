import Utils from './Utils';
const Article = [
  () => { // intro
    return (
      <div>
        <h1>Introduction</h1>
        <p>
          Javascript is a coding language.
          It is mostly used in webdevelopment.
          Anyways, it's kind of easy to learn,
          but still, like any coding language,
          when you do a real/committed project,
          the fact that not everything will work out
          the first time will screw your sanity up. <br/>
          (until you get used to it)
        </p>
      </div>
    )
  },

  () => { // getting started
    return (
      <div>
        <h1>Getting Started</h1>
        <p>
          Step 1: Install visual studio code. <br/>
          Step 2: Press <br/><br/>
          <Utils.Code style={{
            width: 'inherit',
          }}>
            cmd `
          </Utils.Code>
          <br/><br/>
          (you'll find it on the keyboard)
        </p>
      </div>
    )
  },

  () => { // basix
    return (
      <div>
        <h1>Basics</h1>
        <Utils.Divider/>
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
        <Utils.Code style={{
          color: 'rgb(102, 132, 83)'
        }}>
          {'// this is how you make comments:'} <br/>
          {'// I am a single-line comment.'} <br/>
          {'/*'} <br/>
            I am <br/>
            a multi-line <br/>
            comment. <br/>
          {'*/'} <br/>
        </Utils.Code>
      </div>
    )
  }
]

export default Article;