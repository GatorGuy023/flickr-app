import { IImage } from "../models/SearchModels";

export const formatTags = (tagsString: string): string => {
    const returnStr = tagsString.split(' ').filter((value) => value).join(',');
    
    return returnStr;
}

export const getImageUrl = (image: IImage) => {
    return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
}
