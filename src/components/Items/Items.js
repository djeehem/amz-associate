import ITEMS_DATA from "../../data/ITEMS_DATA";
import Item from "./Item";
import Disclaimer from "../Disclaimer";
import { Fragment } from "react";

const Items = () => {
  const itemList = ITEMS_DATA.map((item) => (
    <Item
      id={item.id}
      key={item.id}
      name={item.name}
      href={item.href}
      src={item.src}
      review={item.review}
    />
  ));

  return (
    <Fragment>
      <Disclaimer />
      <section>
        <ul>{itemList}</ul>
        <iframe
          title="metallophone"
          sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
          style={{ width: "120px", height: "240px" }}
          marginWidth={0}
          marginHeight={0}
          scrolling="no"
          frameBorder={0}
          src="//rcm-na.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=djeehem-20&language=en_CA&o=15&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B082CN1W8T&linkId=8bdacd5361c4a2ef4653346868b522cb"
        />
      </section>
    </Fragment>
  );
};

export default Items;
