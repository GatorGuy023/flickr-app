export interface ISearchOptions {
    tags: string
    sort: string
    safeSearch: number
    contentType: number
    media: string
    perPage: number
    page: number
}

export interface IImage {
    id: string
    owner: string
    secret: string
    server: string
    farm: string
    title: string
    isPublic: boolean
    isFriend: boolean
    isFamily: boolean
}

export interface ISearchResult {
    photos: IResult
    stat: string
}

export interface IResult {
    page: number
    pages: string
    perpage: number
    total: string
    photo: IImage[]
}
