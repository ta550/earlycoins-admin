import React from 'react';
import {Label, Box, BasePropertyProps} from '@admin-bro/design-system';
// import { Label, Box, DropZone } from '@admin-bro/design-system'

const Show: React.FC<BasePropertyProps> = (props) => {
    const {property, onChange, record} = props;

    const srcImg = record.params['image'];

    return (
        <Box>
            {srcImg ? (
                <img src={srcImg} />
            ): "No Image"}
        </Box>
        // <Box>
        //     <input type="file" />
        // </Box>
    )
}

export default Show;