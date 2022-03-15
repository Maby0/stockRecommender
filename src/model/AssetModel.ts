export default interface AssetModel {
    __typename: string;
    id: number;
    headline: string;
    shorterHeadline: string;
    dateLastPublished: string;
    description: string;
    pageName: string;
    relatedTagsFilteredFormatted: string;
    dateFirstPublished: string;
    sectionHierarchyFormatted: string;
    authorFormatted: string;
    shortDateFirstPublished: string;
    shortDateLastPublished: string;
    url: string;
    type: string;
    premium: boolean;
    promoImage: {
      __typename: string;
      id: number;
      url: string;
    },
    featuredMedia: {
      __typename: string;
      url: string;
      type: string;
    },
    section: {
      __typename: string;
      id: number;
      shortestHeadline: string;
      tagName: string;
      url: string;
      premium: boolean;
    }
}