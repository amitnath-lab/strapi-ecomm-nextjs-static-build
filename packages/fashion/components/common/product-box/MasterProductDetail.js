import React from "react";

const MasterProductDetail = ({
  product,
  productDetail,
  currency,
  uniqueTags,
  detailClass,
  title,
  des,
  variantChangeByColor,
  template
}) => {
  let RatingStars = [];
  let rating = 5;
  for (var i = 0; i < rating; i++) {
    RatingStars.push(<i className="fa fa-star" key={i}></i>);
  }

  return (
    <div className={`product-detail ${productDetail} ${detailClass}`}>
      <div>
        {title !== "Product style 4" ? (
          <div className="rating">{RatingStars}</div>
        ) : (
          ""
        )}
        <h6>{product.name}</h6>
        {des ? <p>{product.description}</p> : ""}
        <h4>
          {currency.symbol}
          {(product.variants[0].price / currency.cents).toFixed(2)}
          <del>
            <span className="money">
              {currency.symbol}
              {(product.price / currency.cents).toFixed(2)}
            </span>
          </del>
        </h4>

        {product.variants.map((vari) => {
          let variantColor = vari.facetValues ? vari.facetValues.find((x) => x.facet.code === 'color') : ''
          var findItem = uniqueTags.find((x) => x.color === variantColor);
          if (!findItem) uniqueTags.push({... vari, ... {color: variantColor}});
        })}

        {template === "jewellery" ||
        template === "nursery" ||
        template === "beauty" ||
        template === "electronics" ||
        template === "goggles" ||
        template === "watch" ||
        template === "pets" ? (
          ""
        ) : (
          <>
            {title !== "Product style 4" && uniqueTags[0].color ? (
              <ul className="color-variant">
                {uniqueTags.map((vari, i) => {
                  return (
                    <li
                      className={vari.color}
                      key={i}
                      title={vari.color}
                      onClick={() =>
                        variantChangeByColor(vari.image_id, product.images)
                      }
                    ></li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MasterProductDetail;
