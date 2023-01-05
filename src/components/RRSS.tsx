import { RRSS as data } from "../data/Business";

export const RRSS = () => {
  return (
    <div className="rrss">
      {data.map((item) => (
        <a rel="noreferrer" target="_blank" key={item.id} href={item.url}>
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};
