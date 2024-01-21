export interface IProjItem {
  fields: {
    title_en: string;
    title_ru: string;
    slug: string;
    description_en: string;
    description_ru: string;
    image: {
      fields: {
        title: string;
        file: {
          url: string;
        };
      };
    };
  };
}
