export const getAdaptedOffer = (data) => {
  return ({
    bedrooms: data.bedrooms,
    city: {
      center: [data.city.location.latitude, data.city.location.longitude],
      zoom: data.city.location.zoom,
      name: data.city.name
    },
    description: data.description,
    goods: data.goods,
    host: {
      avatarUrl: data.host.avatar_url,
      id: data.host.id,
      isPro: data.host.is_pro,
      name: data.host.name
    },
    id: data.id,
    images: data.images,
    isFavorite: data.is_favorite,
    isPremium: data.is_premium,
    location: {
      latLng: [data.location.latitude, data.location.longitude],
      zoom: data.location.zoom
    },
    maxAdults: data.max_adults,
    previewImage: data.preview_image,
    price: data.price,
    rating: data.rating,
    title: data.title,
    type: data.type
  });
};

export const getAdaptedUserData = (userData) => {
  return ({
    avatarUrl: userData.avatar_url,
    email: userData.email,
    id: userData.id,
    isPro: userData.is_pro,
    name: userData.name,
  });
};

export const getAdaptedReview = (review) => {
  return ({
    comment: review.comment,
    date: review.date,
    id: review.id,
    rating: review.rating,
    user: {
      avatarUrl: review.user.avatar_url,
      id: review.user.id,
      isPro: review.user.is_pro,
      name: review.user.name
    }
  });
};
