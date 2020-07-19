import axios, { AxiosResponse } from 'axios'
import { ISearchOptions, ISearchResult } from '../models/SearchModels';

const flickrAppId = '671934968bbb0d59c92cac8fa7528aa5';

axios.defaults.baseURL = 'https://www.flickr.com/services/rest';

// axios.defaults.headers.common['Content-Type'] = 'application/json'

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
};

const Flickr = {
    search: (options: ISearchOptions): Promise<ISearchResult> => 
        requests.get(
            `/?method=flickr.photos.search&api_key=${flickrAppId}&tags=${options.tags}&sort=${options.sort}&safe_search=${options.safeSearch}&content_type=${options.contentType}&media=${options.media}&per_page=${options.perPage}&page=${options.page}&format=json&nojsoncallback=1`
        )
}

export default Flickr
