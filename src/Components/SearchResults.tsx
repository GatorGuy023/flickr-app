import React from 'react'
import { IImage } from '../models/SearchModels'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { getImageUrl } from '../util/utility'

interface IProps {
    images: IImage[]
}

const SearchResults: React.FC<IProps> = ({images}) => {
    let images2d: IImage[][] = [];
    let row: IImage[] = [];
    for(let i = 0; i < images.length; i++) {
        row.push(images[i])
        if ((i + 1) % 5 === 0 || i + 1 === images.length) {
           images2d.push(row);
           row = [];
        }
    }

    return (
        <div>
            {images2d.map((value, i) => (
                <Row key={i} className='align-items-center image-row'>
                    {value.map((value2) => (
                        <Col key={value2.id} className='image-cell'>
                            <Image rounded src={getImageUrl(value2)} style={{width: '100%'}} />
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    )
}

export default SearchResults
