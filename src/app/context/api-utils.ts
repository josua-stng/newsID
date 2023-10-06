export function generateApiUrlTech(typeNewsData: string) {
  switch (typeNewsData) {
    case 'cnn':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/teknologi/`;
    case 'cnbc':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/tech/`;
    case 'tribun':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`;
    case 'okezone':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/techno/`;
    default:
      return '';
  }
}
export function generateApiUrlSport(typeNewsData: string) {
  switch (typeNewsData) {
    case 'cnn':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/olahraga/`;
    case 'cnbc':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/sindonews/sports/`;
    case 'tribun':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/merdeka/olahraga/`;
    case 'okezone':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/sports/`;
    default:
      return '';
  }
}

export function generateApiUrlEconomy(typeNewsData: string) {
  switch (typeNewsData) {
    case 'cnn':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/ekonomi/`;
    case 'cnbc':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/opini/`;
    case 'tribun':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`;
    case 'okezone':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/economy/`;
    default:
      return '';
  }
}

export function generateApiUrlLifestyle(typeNewsData: string) {
  switch (typeNewsData) {
    case 'cnn':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/gayaHidup/`;
    case 'cnbc':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/lifestyle/`;
    case 'tribun':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`;
    case 'okezone':
      return `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/lifestyle/`;
    default:
      return '';
  }
}
