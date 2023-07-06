import "./Video.css";
export default function Video({
  title,
  channel,
  views,
  time,
  url,
  verified,
  id,
  children,
}) {
  let channeljsx;

  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/200/300`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        {verified ? (
          <div className="channel">{channel} ✅</div>
        ) : (
          <div className="channel">{channel}</div>
        )}
        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
