export const MainTopRatedGallery = ({ Top_Rated_Gallery }) => {
  return `${TopRatedGallery({ Top_Rated_Gallery })}`;
};

const GalleryItemList = (GallList) => {
  let ContentGalleryItemList = `
        <li class="Gallery_Item_Information">
            <ul class="Gallery_Item__Place">
                <li>
                    <img src="${
                      GallList.imgPlacePath
                    }" alt="Vector" class="img_Place">
                    <span data-lang="${GallList.CountryPlace.split(" ").join(
                      ""
                    )}">${GallList.CountryPlace}</span>
                </li>
            </ul>
            <ul class="Gallery_Item__Name">
                <li>
                    <span data-lang="${GallList.Place.split(" ").join("")}">${
    GallList.Place
  }</span>
                </li>
            </ul>
            <ul class="Gallery_Item__Price">
                <li>
                    <span data-lang="${GallList.From.split(" ").join("")}">${
    GallList.From
  }</span>
                    <span>${GallList.Price}</span>
                </li>
            </ul>
        </li>
        <li class="Gallery_Item_Valuation">
            <span>${GallList.Valuation}</span>
            <img src="${GallList.ImagPathValuation1}" alt="${
    GallList.AltImagValuation
  }">
            <img src="${GallList.ImagPathValuation2}" alt="${
    GallList.AltImagValuation
  }">
            <img src="${GallList.ImagPathValuation3}" alt="${
    GallList.AltImagValuation
  }">
            <img src="${GallList.ImagPathValuation4}" alt="${
    GallList.AltImagValuation
  }">
            <img src="${GallList.ImagPathValuation5}" alt="${
    GallList.AltImagValuation
  }">
        </li>
    `;
  return ContentGalleryItemList;
};

const TopRatedGallery = ({ Top_Rated_Gallery }) => {
  let ContentTopRatedGallery = "";
  // let TopRatedGallery = "";
  let Contentchild = "";
  for (let RatedItem in Top_Rated_Gallery) {
    let TopRatedGallery = `<ul class="${Top_Rated_Gallery[RatedItem].topClassName}" data-top="${Top_Rated_Gallery[RatedItem].dataTop}">`;
    let TopContentchild = "";
    for (let cld in Top_Rated_Gallery[RatedItem].child) {
      let ItemChild = Top_Rated_Gallery[RatedItem].child[cld];
      Contentchild = `<li class="Top_Rated_Gallery_Item">
          <img src="${ItemChild.pathImag}" alt="${
        ItemChild.alt
      }" class="Gallery_Item_img">
          <ul class="Gallery_Item__List">
            ${GalleryItemList(ItemChild.GalleryItemList)}
          </ul>
        </li>`;
      TopContentchild += Contentchild;
    }
    ContentTopRatedGallery += TopRatedGallery + TopContentchild + "</ul>";
  }
  return ContentTopRatedGallery;
};
