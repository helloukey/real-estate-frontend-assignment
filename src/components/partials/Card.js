// assets
import EmptyImage from "../../assets/empty.svg";
import LoadingImage from "../../assets/loader.svg";

// components
import { LazyImage } from "@kunalukey/react-image";
import CardPrice from "./card/CardPrice";
import CardTitle from "./card/CardTitle";
import CardBedroom from "./card/CardBedroom";
import CardBathroom from "./card/CardBathroom";
import CardArea from "./card/CardArea";
import LikeButton from "./card/LikeButton";

const Card = ({ data }) => {
  return (
    <>
      {data &&
        data.results &&
        data.results.map((card) => (
          <a
            href={card.href}
            target="_blank"
            rel="noreferrer"
            key={card.listing_id}
            className="transition-all duration-300 hover:scale-105"
          >
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <LazyImage
                src={card.primary_photo ? card.primary_photo.href : EmptyImage}
                alt={card.permalink}
                className="object-cover h-full w-full aspect-video"
                placeholderSrc={LoadingImage}
                placeholderClassName="object-cover h-full w-full"
              />
              <div className="card-body relative">
                <CardPrice card={card} />
                <CardTitle card={card} />
                <div className="grid grid-cols-3 gap-4 border-t-2 border-base-200 pt-2">
                  <CardBedroom card={card} />
                  <CardBathroom card={card} />
                  <CardArea card={card} />
                </div>

                {/* Liked Button */}
                <LikeButton />
              </div>
            </div>
          </a>
        ))}
    </>
  );
};
export default Card;
