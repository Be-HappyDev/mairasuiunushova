import Link from "next/link";

const NotFound = () => {
  return (
    <div className="">
      <div id="background"></div>
      <div className="top">
        <h1>404</h1>
        <h3>page not found</h3>
      </div>
      <div className="ghostContainer">
        <div className="ghost-copy">
          <div className="one" />
          <div className="two" />
          <div className="three" />
          <div className="four" />
        </div>
        <div className="ghost">
          <div className="face">
            <div className="eye" />
            <div className="eye-right" />
            <div className="mouth" />
          </div>
        </div>
        <div className="shadow" />
      </div>
      <div className="bottom">
        <p>Boo, looks like a ghost stole this page!</p>

        <div className="buttons">
          <button className="btn"><Link href={'/'}>Home</Link></button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
