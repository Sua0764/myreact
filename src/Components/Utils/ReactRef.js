import { useRef } from "react";

export function ReactRef() {
  const inputRef = useRef(null);
  const h3Ref = useRef(null);

  return (
    <>
      <div>
        <input ref={inputRef}></input>
        <button onClick={() => inputRef.current.focus()}>
          입력창에 포커스
        </button>
        <h3></h3>
        <button
          onClick={() => {
            h3Ref.current.textContext = "테스트";
          }}
        >
          h3 태그에 텍스트 입력
        </button>
      </div>
    </>
  );
}
