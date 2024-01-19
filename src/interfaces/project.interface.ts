export interface IProjItem {
    fields: {
      title: string;
      slug: string;
      description: string;
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