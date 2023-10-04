export function generateApiUrlTech(typeNewsData: string) {
  return typeNewsData === 'cnn'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/teknologi/`
    : typeNewsData === 'cnbc'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/tech/`
    : typeNewsData === 'tribun'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`
    : typeNewsData === 'okezone'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/techno/`
    : '';
}
export function generateApiUrlSport(typeNewsData: string) {
  return typeNewsData === 'cnn'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/olahraga/`
    : typeNewsData === 'cnbc'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/sindonews/sports/`
    : typeNewsData === 'tribun'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/merdeka/olahraga/`
    : typeNewsData === 'okezone'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/sports/`
    : '';
}

export function generateApiUrlEconomy(typeNewsData: string) {
  return typeNewsData === 'cnn'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/ekonomi/`
    : typeNewsData === 'cnbc'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/opini/`
    : typeNewsData === 'tribun'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`
    : typeNewsData === 'okezone'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/economy/`
    : '';
}

export function generateApiUrlLifestyle(typeNewsData: string) {
  return typeNewsData === 'cnn'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/gayaHidup/`
    : typeNewsData === 'cnbc'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/lifestyle/`
    : typeNewsData === 'tribun'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`
    : typeNewsData === 'okezone'
    ? `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/lifestyle/`
    : '';
}
