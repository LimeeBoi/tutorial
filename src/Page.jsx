import Utils from './Utils';
import Article from './Article';
import { useState } from 'react';

export default function Stuffs() {
  const [index, setIndex] = useState(0);
  return (
    <div className="stuffs">
      {Article[index]()}
      <Utils.Button
        disabled={Article[index - 1] ? false : true}
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        PREV
      </Utils.Button>
      <Utils.Button
        disabled={Article[index + 1] ? false : true}
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        NEXT
      </Utils.Button>
    </div>
  )
}