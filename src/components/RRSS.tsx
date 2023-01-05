import { RRSS as data } from "../data/Business";

export const RRSS = () => {
  return (
    <div className="rrss">
      {data.map((item) => (
        <a target="_blank" key={item.id} href={item.url}>
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};
